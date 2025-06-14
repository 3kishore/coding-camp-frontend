import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FooterSectionComponent() {
  var [minute, setMinute] = useState(15);
  var [second, setSecond] = useState(60);
  var [offerEnded, changeOfferStatus] = useState(false);
  var [initialTimeSetCalled, setInitialTimeSetCalled] = useState(false);

  const navigate = useNavigate();

  function registerForSession() {
    navigate(`/register-for-session`);
  }

  function clockTicker() {
    if(minute > 0 || second > 0) {
      if(second <= 0) {
        setSecond(60);
        setMinute(minute - 1);
      } else {
        setSecond(second - 1);
      }
    } else {
      changeOfferStatus(true);
    }
  }

  function intialTimeSet() {
    if(!initialTimeSetCalled) {
      if(!localStorage.getItem('begins')) {
        localStorage.setItem('begins', new Date().getTime());
        localStorage.setItem('isOfferEnded', false);
      } else {
        const beginsAt = new Date(parseInt(localStorage.getItem('begins'))).getTime();
        const currentTime = new Date().getTime();
        let differenceInMinutes = (currentTime - beginsAt) / (1000 * 60);
        differenceInMinutes += 1;
        console.log(differenceInMinutes)
        if(differenceInMinutes > 17) {
          changeOfferStatus(true)
          setMinute(0)
          setSecond(0)
          localStorage.setItem('isOfferEnded', true);
        } else {
          setMinute(17 - Math.ceil(differenceInMinutes))
          setSecond(3)
          localStorage.setItem('isOfferEnded', false);
        }
      }
      setInitialTimeSetCalled(true)
    }
  }

  useEffect(() => {
    intialTimeSet()
    const interval = setInterval(() => {
      clockTicker();
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  },[minute, second])
  return (
    <div>
      <div className="flex text-[#fff] justify-center items-center gap-[12px] tutor-bottom-section z-[999] big-screen-footer">
        {!offerEnded && <div className="flex gap-1 justify-center items-center">
          <div>offer Ends in:</div>
          <div className="flex gap-1">
            <div className="hurrytimer-timer-block">
              <div className="hurrytimer-timer-digit">{minute}</div>
              <div className="hurrytimer-timer-label">mins</div>
            </div>
            <div className="flex items-center">:</div>
            <div className="hurrytimer-timer-block">
              <div className="hurrytimer-timer-digit">{second}</div>
              <div className="hurrytimer-timer-label">secs</div>
            </div>
          </div>
        </div>}
        <div>Register For The Classes At &nbsp;<span className={!offerEnded ? "line-through text-[#ed970b]" : null}>₹899</span>&nbsp;<span>{!offerEnded && '₹199'}</span></div>
        <button className="tutor-btn" onClick={registerForSession}>Register</button>
        {/* <div></div> */}
        {/* <button className="tutor-btn" onClick={registerForSession}>Register <span className={!offerEnded ? "line-through text-[#000]" : null}>₹899</span>&nbsp;<span>{!offerEnded && '₹199'}</span></button> */}
      </div>

      <div className="flex text-[#fff] justify-center items-center gap-[12px] tutor-bottom-section z-[999] medium-screen-footer">
        {!offerEnded && <div className="flex gap-1 justify-center items-center">
          <div>offer Ends in:</div>
          <div className="flex gap-1">
            <div className="hurrytimer-timer-block">
              <div className="hurrytimer-timer-digit">{minute}</div>
              <div className="hurrytimer-timer-label">mins</div>
            </div>
            <div className="flex items-center">:</div>
            <div className="hurrytimer-timer-block">
              <div className="hurrytimer-timer-digit">{second}</div>
              <div className="hurrytimer-timer-label">secs</div>
            </div>
          </div>
        </div>}
        {offerEnded && <div>Register For The Classes At ₹899</div>}
        <button className="tutor-btn" onClick={registerForSession}>Register {!offerEnded && <span><span className={!offerEnded ? "line-through text-[#000]" : null}>₹899</span>&nbsp;<span>{!offerEnded && '₹199'}</span></span>}</button>
      </div>

      <div className="flex flex-wrap text-[#fff] gap-1 pt-2 items-center tutor-bottom-section z-[999] small-screen-footer">
        {
          !offerEnded ? <div>offer Ends in:</div> : <div>Register For The Classes</div>
        }
        <div className="flex gap-1">
          {!offerEnded && <div className="flex gap-1 justify-center items-center">
            <div className="flex gap-1">
              <div className="hurrytimer-timer-block">
                <div className="hurrytimer-timer-digit">{minute}</div>
                <div className="hurrytimer-timer-label">mins</div>
              </div>
              <div className="flex items-center">:</div>
              <div className="hurrytimer-timer-block">
                <div className="hurrytimer-timer-digit">{second}</div>
                <div className="hurrytimer-timer-label">secs</div>
              </div>
            </div>
          </div>}
          <button className="tutor-btn" onClick={registerForSession}>Register For <span className={!offerEnded ? "line-through text-[#000]" : null}>₹899</span>&nbsp;<span>{!offerEnded && '₹199'}</span></button>
        </div>
      </div>
    </div>
  )
}

export default FooterSectionComponent;
