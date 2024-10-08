import htmlImgPath from './html.png';
import cssImgPath from './CSS.png';
import jsImgPath from './JavaScript.png';

// eslint-disable-next-line
function TopicsComponent() {
  // eslint-disable-next-line
  return (
    <div>
      <div className="text-2xl font-medium text-[#ed970b] pt-[18px] pb-[12px] flex justify-center">Topics to be covered during the session:</div>
      <div className="flex gap-2 flex-wrap justify-center items-center">
        <div className="elementor-widget-wrap justify-center items-center !gap-3 flex-col max-w-[450px] flex-grow">
          {/* eslint-disable-next-line */}
          <img src={htmlImgPath} alt="HTML Image" className="h-[150px] w-[150px]" />
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="text-2xl font-medium">HTML</div>
            <div className="pl-5">
              <ul className="list-disc">
                <li>Class start from basic.</li>
                <li>All important tags will be covered.</li>
                <li>End of the session you will gain 60% - 70% of the idea.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="elementor-widget-wrap justify-center items-center !gap-3 flex-col max-w-[450px] flex-grow">
          {/* eslint-disable-next-line */}
          <img src={cssImgPath} alt="HTML Image" className="h-[150px] w-[150px]" />
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="text-2xl font-medium">CSS</div>
            <div className="pl-5">
              <ul className="list-disc">
                <li>Class start from basic.</li>
                <li>All important tags will be covered.</li>
                <li>End of the session you will gain 60% - 70% of the idea.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="elementor-widget-wrap justify-center items-center !gap-3 flex-col max-w-[450px] flex-grow">
          {/* eslint-disable-next-line */}
          <img src={jsImgPath} alt="HTML Image" className="h-[150px] w-[150px]" />
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="text-2xl font-medium">JavaScript</div>
            <div className="pl-5">
              <ul className="list-disc">
                <li>Class start from basic.</li>
                <li>All important tags will be covered.</li>
                <li>End of the session you will gain basic knowledge of JS from 50% - 65% of the idea.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-[#fff]">
        <div className="text-2xl font-medium text-[#ed970b] pt-[8px] pb-[12px] flex">What You Get at the end the session:</div>
        <div className="text-xl">
          <div>
            All four day session in recording format if attend or forget to attend you'll get it.
          </div>
          <div>
            <span className="text-[#ed970b]">Project 1:</span>
            <div>Source code of stone papper scissor game.</div>
          </div>
          <div>
            <span className="text-[#ed970b]">Project 2:</span>
            <div>Source code landing page.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopicsComponent;
