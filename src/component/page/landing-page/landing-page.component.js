import { useNavigate } from "react-router-dom";
import CourseTimingComponent from "../../page-components/course-timing/course-timing";
import DisclaimerAndPolicies from "../../page-components/disclaimer-and-polices/disclaimer-and-polices";
import FooterSectionComponent from "../../page-components/footer-section/footer-section";
import HeaderSection from "../../page-components/header-section/header-section";
import SubHeaderSection from "../../page-components/sub-header-section/sub-header-section";
import TopicsComponent from "../../page-components/topics-of-session/topics-of-session";

function LandingPage() {
  const navigate = useNavigate();

  function registerForSession() {
    navigate(`/register-for-session`);
  }
  return (
    <div className="bg-[#222629] p-[24px] pt-0">
      <HeaderSection />
      <div className="w-full flex justify-center">
        <div className="flex flex-col gap-3 max-w-[650px] justify-center">
          <div className="text-3xl text-[#fff] font-bold text-center max-[550px]:text-[16px] max-[550px]:mt-[12px] max-[550px]:leading-[140%] max-[550px]:px-[12px]">
            We will shape as developer
            <div className="text-[#ed970b]">"It's a promise".</div>
          </div>
          <div className="text-2xl text-[#fff] font-bold max-[550px]:text-[14px] max-[550px]:leading-[140%] max-[550px]:px-[12px] text-center">
            We understand how difficult this is for you.
          </div>
          <div className="text-2xl text-[#fff] font-bold border border-[#fff] rounded-[24px] p-[24px] bg-[#60686d33F] max-[550px]:text-[16px] max-[550px]:leading-[140%]">
            "Six years ago, I was just like you, so I can easily relate to your problem.
            Now, I have over 4.5 years of experience as a developer and have <span className="text-blue">worked for a company called VMware, which is a global leader in cloud technology</span>.
            I’m going to teach you what development is and how to become a developer."
            push checkling

            <div className="pt-12px text-[#ed970b] text-2xl mt-[18px] max-[550px]:text-[16px] max-[550px]:leading-[140%]">
              Register now and get ₹1000 worth study material and get ₹5000 worth project source code
              <button className="tutor-btn mt-[12px]" onClick={registerForSession}>Register</button>
            </div>
          </div>
        </div>
      </div>
      <CourseTimingComponent />
      <SubHeaderSection />
      <FooterSectionComponent />
      <TopicsComponent />
      <DisclaimerAndPolicies />
    </div>
  ) 
}

export default LandingPage;
// Kishor
