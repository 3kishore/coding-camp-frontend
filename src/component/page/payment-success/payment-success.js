import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { APP_CONST } from "../../../constants/app-constant"

function PaymentSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    let paymentStatus = localStorage.getItem(btoa(APP_CONST.LOCAL_STORAGE_KEY.IS_PAYMENT_CAPTURED))
    if(paymentStatus) {
      if(atob(paymentStatus) === APP_CONST.NOT_CAPTURED) {
        navigate('/payment-failed')
      }
    } else {
      navigate('/home')
    }
    // eslint-disable-next-line 
  }, [])
  return (
    <div className="w-full h-full flex justify-center">
      <div className="border-solid border-[1px] border-[#EDEDED] rounded-xl shadow-sm w-[450px] h-[600px] my-8 p-6 flex flex-col gap-6">
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="w-12 h-12 rounded-[50%] bg-[#23a26d40] flex justify-center items-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2.66667C8.65333 2.66667 2.66666 8.65333 2.66666 16C2.66666 23.3467 8.65333 29.3333 16 29.3333C23.3467 29.3333 29.3333 23.3467 29.3333 16C29.3333 8.65333 23.3467 2.66667 16 2.66667ZM22.3733 12.9333L14.8133 20.4933C14.6267 20.68 14.3733 20.7867 14.1067 20.7867C13.84 20.7867 13.5867 20.68 13.4 20.4933L9.62666 16.72C9.24 16.3333 9.24 15.6933 9.62666 15.3067C10.0133 14.92 10.6533 14.92 11.04 15.3067L14.1067 18.3733L20.96 11.52C21.3467 11.1333 21.9867 11.1333 22.3733 11.52C22.76 11.9067 22.76 12.5333 22.3733 12.9333Z" fill="#23A26D"/>
            </svg>
          </div>
          <div className="text-[18px] font-bold">Payment Success!</div>
          <div className="text-[13px] text-[#474747]">Your payment has been successfully done.</div>
        </div>
        <div className="border-solid border-[1px] border-[#EDEDED] w-full"></div>
        <div className="w-full">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col justify-center items-center">
              <div className="text-[13px] text-[#474747]">Total Payment</div>
              <div className="text-[24px] font-bold">INR 1,000,000</div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <div className="p-2 rounded-md border-solid border-[1px] border-[#EDEDED] flex-grow">
                  <div className="text-[12px] border-[#EDEDED]">Ref Number</div>
                  <div className="text-[14px] font-medium">000085752257</div>
                </div>
                <div className="p-2 rounded-md border-solid border-[1px] border-[#EDEDED] flex-grow">
                  <div className="text-[12px] border-[#EDEDED]">Ref Number</div>
                  <div className="text-[14px] font-medium">000085752257</div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="p-2 rounded-md border-solid border-[1px] border-[#EDEDED] flex-grow">
                  <div className="text-[12px] border-[#EDEDED]">Ref Number</div>
                  <div className="text-[14px] font-medium">000085752257</div>
                </div>
                <div className="p-2 rounded-md border-solid border-[1px] border-[#EDEDED] flex-grow">
                  <div className="text-[12px] border-[#EDEDED]">Ref Number</div>
                  <div className="text-[14px] font-medium">000085752257</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[20px] font-bold text-center">You will recive your study in material in your registered mail ID</div>
      </div>
    </div>
  )
}

export default PaymentSuccess;
