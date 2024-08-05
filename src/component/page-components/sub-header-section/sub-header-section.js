import { useNavigate } from "react-router-dom";

function SubHeaderSection() {

  const navigate = useNavigate();

  function registerForSession() {
    navigate(`/register-for-session`);
  }

  return (
    <div className="text-2xl font-medium text-[#fff]">
      <div className="flex flex-col items-center gap-2">
        No prior coding knowledge is required. Join us and master it. We will teach you from scratch.
        <div className="text-[#ed970b]">End of the session you'll gain confidence.</div>
      </div>
      <div className="p-8 flex gap-3 justify-center items-center">
        <div>Register and get your syllabus for the class.</div>
        <div>
          <button className="tutor-btn" onClick={registerForSession}>Register</button>
        </div>
      </div>
    </div>
  )
}

export default SubHeaderSection;
