import htmlImgPath from './html.png';
import cssImgPath from './CSS.png';
import jsImgPath from './JavaScript.png';
import Carousel from '../../organism/carousel/carousel';

// eslint-disable-next-line
function TopicsComponent() {
  // eslint-disable-next-line
  return (
    <div>
      <div className="text-2xl font-medium text-[#ed970b] pt-[18px] pb-[12px] flex justify-center max-[550px]:text-[16px] max-[550px]:leading-[140%]">Projects that you are going to build:</div>
      <Carousel />
      <div className="text-2xl font-medium text-[#ed970b] pt-[18px] pb-[12px] flex justify-center max-[550px]:text-[16px] max-[550px]:leading-[140%]">Topics to be covered during the session:</div>
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
                <li>By the end of the session, you will become an intermediate HTML developer.</li>
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
                <li>By the end of the session, you will become an intermediate CSS developer.</li>
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
                <li>By the end of the session, you will become an intermediate JavaScript developer.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-[#fff]">
        <div className="text-2xl font-medium text-[#ed970b] pt-[8px] pb-[12px] flex max-[550px]:text-[16px] max-[550px]:leading-[140%]">What You Get at the end the session:</div>
        <div className="text-xl max-[550px]:text-[16px] max-[550px]:leading-[140%]">
          <div>
            All four day session in recording format if attend or forget to attend you'll get it.
          </div>
          <div className='flex flex-wrap gap-2'>
            <div className="text-[#ed970b]">Project 1:</div>
            <div>Ecommerce Website</div>
          </div>
          <div className='flex flex-wrap gap-2'>
            <div className="text-[#ed970b]">Project 2:</div>
            <div>Stone paper scissor game</div>
          </div>
          <div className='flex flex-wrap gap-2'>
            <div className="text-[#ed970b]">Project 3:</div>
            <div>3D Scroll</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopicsComponent;
