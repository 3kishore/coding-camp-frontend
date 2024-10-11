import { useEffect, useState } from 'react';
import axios from "axios";
import axiosRetry from 'axios-retry';
import { APP_CONST } from "../../../constants/app-constant";
import { useNavigate } from 'react-router-dom';

function ValidatePayment() {
  const axiosHttp = axios.create({
    baseURL: 'https://coding-camp-api.vercel.app'
  });
  
  axiosRetry(axiosHttp, {
    retries: 5,
    retryDelay: (_) => {
      return 2000;
    },
    retryCondition: () => true
  });
  const navigate = useNavigate();

  const [paymentStatus, setPaymentStatus] = useState(true)
  function checkPaymentDone() {
    let paymentInfo = localStorage.getItem(btoa(APP_CONST.LOCAL_STORAGE_KEY.PAYMENT_INFO))
    if(paymentInfo) {
      validate()
    } else {
      setTimeout(() => {
        setPaymentStatus(false);
        setTimeout(() => {
          navigate('/home');
        }, 2000)
      }, 1000)
    }
  }
  function validate() {
    const encodeInfo = localStorage.getItem(btoa(APP_CONST.LOCAL_STORAGE_KEY.PAYMENT_INFO));
    const encodedUserInnfo = localStorage.getItem(btoa(APP_CONST.LOCAL_STORAGE_KEY.USER_DETAILS));
    if(encodeInfo) {
      const paymentInfo = JSON.parse(atob(encodeInfo))
      if(encodedUserInnfo) {
        const userInfo = JSON.parse(atob(encodedUserInnfo))
        userInfo.orderId = paymentInfo.razorpay_order_id
        userInfo.paymentId = paymentInfo.razorpay_payment_id
        userInfo.paymentSign = paymentInfo.razorpay_signature
        console.log(paymentInfo)
        console.log(userInfo)
        axiosHttp.post('/order/check-payment-exist', {detail: userInfo}).then(resp => {
          if(resp.data.captured) {
            createUser(userInfo);
          } else {
            localStorage.setItem(btoa(APP_CONST.LOCAL_STORAGE_KEY.IS_PAYMENT_CAPTURED), btoa(APP_CONST.NOT_CAPTURED))
            navigate('/payment-failed');
          }
        }).catch(err => {
          console.log(err)
          localStorage.setItem(btoa(APP_CONST.LOCAL_STORAGE_KEY.IS_PAYMENT_CAPTURED), btoa(APP_CONST.NOT_CAPTURED));
          navigate('/payment-failed');
        })
      }
    }
  }

  function createUser(userInfo) {
    axiosHttp.post('/student/create-student', {detail: userInfo}).then(resp => {
      if(resp.data.status) {
        localStorage.setItem(btoa(APP_CONST.LOCAL_STORAGE_KEY.IS_PAYMENT_CAPTURED), btoa(APP_CONST.CAPTURED))
        navigate('/payment-success');
      }
    }).catch(err => {
      console.log(err)
      localStorage.setItem(btoa(APP_CONST.LOCAL_STORAGE_KEY.IS_PAYMENT_CAPTURED), btoa(APP_CONST.CAPTURED))
      navigate('/payment-success');
    })
  }

  useEffect(() => {
    checkPaymentDone()
    console.log('Got fired two times')
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      {paymentStatus ?
        <div className="w-full flex flex-col gap-4 justify-center text-center">
          <div className="font-bold text-lg">Hang Tight...</div>
          <div className="font-bold text-lg">Payment Validation Inprogress...</div>
          <div className="font-bold text-lg">Don't Refresh your page or Don't close your browser...</div>
        </div> :
        <div className='flex flex-col gap-[8px] font-bold items-center'>
          <div>No payment have been done</div>
          <div>Redirecting to home page...</div>
          <div className="loader"></div>
        </div>
      }
    </div>
  )
}

export default ValidatePayment;
