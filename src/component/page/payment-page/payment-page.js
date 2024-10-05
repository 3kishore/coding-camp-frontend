import { useEffect, useRef } from 'react';
import crypto from 'crypto-js';
import Axios from 'axios';

const loadScript = src => new Promise((resolve) => {
  const script = document.createElement('script');
  script.src = src;
  script.onload = () => {
    resolve(true);
  };
  script.onerror = () => {
    resolve(false);
  };
  document.body.appendChild(script);
});

const RenderRazorpay = ({
  orderId,
  keyId,
  keySecret,
  currency,
  amount,
  userDetails
}) => {
  const paymentId = useRef(null);
  const paymentMethod = useRef(null);

  const displayRazorpay = async (options) => {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js',
    );

    if (!res) {
      return;
    }
    const rzp1 = new window.Razorpay(options);

    rzp1.on('payment.submit', (response) => {
      paymentMethod.current = response.method;
    });

    rzp1.on('payment.failed', (response) => {
      paymentId.current = response.error.metadata.payment_id;
    });

    // to open razorpay checkout modal.
    rzp1.open();
  };

  // informing server about payment
  const handlePayment = async (status) => {
    await Axios.post('http://localhost:5000/order/capture-payment',
      {
        status,
        userDetails,
      }).then(res => {
        if(res && res.data.status) {
          // navigate('/payment-success')
          window.location.replace('/payment-success')
        }
      });
  };


  // we will be filling this object in next step.
    const options = {
    key: keyId,
    amount,
    currency,
    name: userDetails.name,
    order_id: orderId,
    callback_url: 'http://localhost:3000/register-for-session',
    prefill: {
      name: userDetails.name,
      email: userDetails.emailId,
      contact: userDetails.mobileNo
    },
    handler: (response) => {
      paymentId.current = response.razorpay_payment_id;
      const succeeded = crypto.HmacSHA256(`${orderId}|${response.razorpay_payment_id}`, keySecret).toString() === response.razorpay_signature;

      userDetails.paymentId = paymentId;
      userDetails.orderId = orderId;
      userDetails.paymentSign = response.razorpay_signature;
      if (succeeded) {
        handlePayment('succeeded');
      } else {
        handlePayment('failed');
      }
    },
    modal: {
      confirm_close: true,
      ondismiss: async (reason) => {
        // const {
        //   reason: paymentReason, field, step, code,
        // } = reason && reason.error ? reason.error : {};
        if (reason === undefined) {
          handlePayment('Cancelled');
        }
        else if (reason === 'timeout') {
          handlePayment('timedout');
        } 
        else {
          handlePayment('failed');
        }
      },
    },
    retry: {
      enabled: false,
    },
    timeout: 900,
    theme: {
      color: '',
    },
  };

  useEffect(() => {
    displayRazorpay(options);
    // eslint-disable-next-line
  }, []);

  return null;
};

export default RenderRazorpay;
