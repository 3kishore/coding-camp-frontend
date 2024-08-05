import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FooterSectionComponent() {
  var [minute, setMinute] = useState(45);
  var [second, setSecond] = useState(60);
  var [offerEnded, changeOfferStatus] = useState(false);

  const navigate = useNavigate();

  function registerForSession() {
    navigate(`/register-for-session`);
  }

  function clockTicker() {
    if(minute > 0 || second > 0) {
      if(second <= 0) {
        setSecond(60);
        setMinute(minute - 1);
        setLocalStorage();
      } else {
        setSecond(second - 1);
        setLocalStorage();
      }
    } else {
      changeOfferStatus(true);
    }
  }

  function setLocalStorage() {
    let data = {minute: minute, second: second};
    localStorage.setItem('offerDetails', btoa(JSON.stringify(data)));
  }

  // function intializeOfferSession() {
  //   const encodedDetails = localStorage.getItem('offerDetails');
  //   if(encodedDetails) {
  //     const decodedOfferDetails = JSON.parse(atob(encodedDetails));
  //     if(decodedOfferDetails.minute) {
  //       setMinute(decodedOfferDetails.minute);
  //     }
  //     if(decodedOfferDetails.second) {
  //       setSecond(decodedOfferDetails.second);
  //     }
  //   }
  // }

  useEffect(() => {
    // intializeOfferSession();
    const interval = setInterval(() => {
      clockTicker();
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
    // eslint-disable-next-line
  },[minute, second])
  return (
    <div className="flex text-[#fff] justify-center items-center gap-[12px] tutor-bottom-section">
      <div className="flex gap-1 justify-center items-center">
        <div>offer Ends in:</div>
        <div className="flex gap-1">
          <div className="hurrytimer-timer-block">
            <div className="hurrytimer-timer-digit">{minute}</div>
            <div className="hurrytimer-timer-label">mins</div>
          </div>
          <div className="flex items-center">:</div>
          <div className="hurrytimer-timer-block">
            <div className="hurrytimer-timer-digit">{second}</div>
            <div className="hurrytimer-timer-label">mins</div>
          </div>
        </div>
      </div>
      <div>Register For The Workshop For &nbsp;<span className={!offerEnded ? "line-through text-[#ed970b]" : null}>₹499</span>&nbsp;<span>{!offerEnded && '₹199'}</span></div>
      <button className="tutor-btn" onClick={registerForSession}>Register</button>
    </div>
  )
}

export default FooterSectionComponent;
