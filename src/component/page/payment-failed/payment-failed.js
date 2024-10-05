import { useNavigate } from "react-router-dom";

function PaymentFailed() {
  const navigate = useNavigate();

  function goToRegistration() {
    navigate('/register-for-session')
  }
  return (
    <div className="w-full h-full flex justify-center">
      <div className="border-solid border-[1px] border-[#EDEDED] rounded-xl shadow-sm w-[450px] h-[600px] my-8 p-6 flex flex-col gap-6">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="w-12 h-12 rounded-[50%] bg-[#ff000036] flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#ff0000">
              <path d="m346-272 134-134 134 134 74-74-134-134 134-134-74-74-134 134-134-134-74 74 134 134-134 134 74 74ZM480-34q-92.64 0-174.47-34.6-81.82-34.61-142.07-94.86T68.6-305.53Q34-387.36 34-480q0-92.9 34.66-174.45 34.67-81.55 95.02-141.97 60.35-60.41 142.07-95Q387.48-926 480-926q92.89 0 174.43 34.58 81.54 34.59 141.97 95.02 60.43 60.43 95.02 142Q926-572.83 926-479.92q0 92.92-34.58 174.41-34.59 81.48-95 141.83Q736-103.33 654.45-68.66 572.9-34 480-34Z"/>
            </svg>
          </div>
          <div className="text-[18px] font-[800] text-[#dc1212]">Payment Failed!</div>
          <div className="text-[16px] font-medium text-[#000] text-center">We haven't recived your payment please check with your bank</div>
          <div className="text-[16px] font-medium text-[#000] text-center">Need clarity from our side please mail us to this mail id
            <a href="mailto:kishore.codingcamp@gmail.com" className="pl-1 text-blue">kishore.codingcamp@gmail.com</a>
          </div>
        </div>
        <button className="tutor-btn success" onClick={goToRegistration}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C">
            <path d="M476-113q-152 0-259.5-107T109-479q0-152 107.5-260T476-847q78.29 0 148.15 31.5Q694-784 745-726v-121h106v350H500v-105h170q-33-50-83.82-78.5Q535.37-709 476-709q-96 0-163.5 66.92Q245-575.17 245-479q0 96.33 67.5 163.17Q380-249 476.34-249q70.72 0 129.69-41T691-398h141q-30 124-129 204.5T476-113Z"/>
          </svg>
          Retry
        </button>
        
      </div>
    </div>
  )
}

export default PaymentFailed;
