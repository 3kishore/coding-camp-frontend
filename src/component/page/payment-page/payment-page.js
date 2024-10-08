import { useEffect, useRef } from 'react';
import { APP_CONST } from '../../../constants/app-constant';

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
  // keySecret,
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
      contact: userDetails.mobileNo,
      currentStatus: userDetails.currentStatus,
      dateOfBirth: userDetails.dateOfBirth,
      courseStartDate: userDetails.courseStartDate,
      timeing: userDetails.timeing,
      shift: userDetails.shift     
    },
    handler: (response) => {
        localStorage.setItem(btoa(APP_CONST.LOCAL_STORAGE_KEY.USER_DETAILS), btoa(JSON.stringify(userDetails)))
        localStorage.setItem(btoa(APP_CONST.LOCAL_STORAGE_KEY.PAYMENT_INFO), btoa(JSON.stringify(response)))
        setTimeout(() => {
          window.location.replace('/validate-payment')
        }, 500)
    },
    modal: {
      confirm_close: true,
      ondismiss: async (_) => {},
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
