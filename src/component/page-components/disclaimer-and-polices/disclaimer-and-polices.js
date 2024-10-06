import { useNavigate } from "react-router-dom";

function DisclaimerAndPolicies() {

  const navigate = useNavigate();

  function redirectToTandC() {
    navigate(`/terms-and-conditions`);
  }

  function redirectToPrivacyPolicy() {
    navigate(`/privacy-policy`);
  }

  return (
    <div className="text-[#fff] pt-[32px] pb-[180px]">
      <div>
        <div className="text-xl text-[#ed970b]">Disclaimer</div>
        <div className="flex flex-col gap-2">
          <div className="pt-2">Coding Camp:</div>
          <div>
            The information provided by Coding Camp (“we,” “us,” or “our”) on our website is for general informational purposes only.
            We strive to ensure that all information is accurate and up-to-date; however, we make no representations or warranties of any kind,
            express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services,
            or related graphics contained on the website for any purpose. Any reliance you place on such information is strictly at your own risk.
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="pt-2">Educational Outcomes:</div>
          <div>
            Coding Camp is dedicated to providing quality education and training in website development. However, individual results may vary based on a
            student’s effort, commitment, and the time they dedicate to their studies. We do not guarantee specific outcomes or job placements
            upon completion of our courses. Success in the field of website development requires continuous learning and practice beyond the
            completion of any single course or program.
          </div>
        </div>
        <div className="py-3">
          If you have any questions about this Privacy Policy, please contact us at: kishore.codingcamp@gmail.com
        </div>
      </div>
      <div className="w-full text-xl pt-8 flex flex-wrap justify-center gap-7">
        <div className="cursor-pointer text-blue hover:underline" onClick={redirectToTandC}>Terms & Condition</div>
        <div className="cursor-pointer text-blue hover:underline" onClick={redirectToPrivacyPolicy}>Privacy Policy</div>
      </div>
      <div className="w-fit pt-8">
        <div>Contact Us</div>
        <div className="w-full text-xl flex flex-wrap items-center gap-2">
          <div className="text-lg font-medium text-[#fff]">Email: </div>
          <div className="text-sm text-[#fff]">kishore.codingcamp@gmail.com</div>
        </div>
        <div className="w-full text-xl flex flex-wrap items-center gap-2">
          <div className="text-lg font-medium text-[#fff]">Address: </div>
          <div className="text-sm text-[#fff]">No 41, 4th street devar nagar, vyasarpadi, chennai - 600039.</div>
        </div>
      </div>
    </div>
  )  
}

export default DisclaimerAndPolicies;
