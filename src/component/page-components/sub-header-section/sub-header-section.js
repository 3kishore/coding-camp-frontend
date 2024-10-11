import { useNavigate } from "react-router-dom";

function SubHeaderSection() {

  const navigate = useNavigate();

  function registerForSession() {
    navigate(`/register-for-session`);
  }

  return (
    <div className="text-2xl font-medium text-[#fff] max-[550px]:text-[16px] max-[550px]:leading-[140%]">
      <div className="p-8 flex flex-wrap gap-3 justify-center items-center">
        <div>Register and became a certified HTML, CSS and JavaScript developer.</div>
        <div>
          <button className="tutor-btn" onClick={registerForSession}>Register</button>
        </div>
      </div>
    </div>
  )
}

export default SubHeaderSection;
