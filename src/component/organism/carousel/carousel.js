import { useEffect } from 'react';
import srool_3d from './carousel-3d-scrool.png';
import ecommerce from './carousel-ecommerce.png';
import rock_paper_scissor from './carousel-rock-paper-scissor.png';

// const imagePath = "https://drive.google.com/uc?export=view&id=1eI5ByNDlq7yXMnI5ALEapdigzflM7glE"
function Carousel() {
  let nextDom;
  let prevDom;

  let carouselDom;
  let SliderDom;
  let thumbnailBorderDom;
  let thumbnailItemsDom;
  let timeDom;
  let timeRunning = 3000;
  // let timeAutoNext = 7000;
  let runTimeOut;
  let runNextAuto;
  function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    // runNextAuto = setTimeout(() => {
    //     next.click();
    // }, timeAutoNext)
  }

  function triggerer() {
    nextDom = document.getElementById('next');
    prevDom = document.getElementById('prev');

    carouselDom = document.querySelector('.carousel');
    SliderDom = carouselDom.querySelector('.carousel .list');
    thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    timeDom = document.querySelector('.carousel .time');


    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    nextDom.onclick = function(){
        showSlider('next');    
    }
    prevDom.onclick = function(){
        showSlider('prev');    
    }
    // runNextAuto = setTimeout(() => {
    //     next.click();
    // }, timeAutoNext)
  }
  useEffect(() => {
    triggerer()
  }, [])
  return (
    <div>
      <div className="carousel">
          <div className="list">
              <div className="item">
                  <img alt="alter" src={srool_3d} />
                  <div className="content">
                      <div className="title">3D SCROOL</div>
                      <div className="topic font-size-sm">CLICK HERE TO WATCH PREVIEW</div>
                      {/* <div className="des">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                      </div> */}
                      {/* <div className="buttons">
                          <button>SEE MORE</button>
                      </div> */}
                  </div>
              </div>
              <div className="item">
                  <img alt="alter" src={ecommerce} />
                  <div className="content">
                      <div className="title">ECOMMERCE</div>
                      <div className="topic font-size-sm">CLICK HERE TO WATCH PREVIEW</div>
                      {/* <div className="des">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                      </div>
                      <div className="buttons">
                          <button>SEE MORE</button>
                      </div> */}
                  </div>
              </div>
              <div className="item">
                  <img alt="alter" src={rock_paper_scissor} />
                  <div className="content">
                      <div className="title">GAME</div>
                      <div className="topic font-size-sm">CLICK HERE TO WATCH PREVIEW</div>
                      {/* <div className="des">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                      </div>
                      <div className="buttons">
                          <button>SEE MORE</button>
                      </div> */}
                  </div>
              </div>
          </div>
          <div className="thumbnail">
              <div className="item">
                  <img alt="alter" src={srool_3d} />
                  <div className="content">
                      <div className="title">
                          Name Slider
                      </div>
                      <div className="description">
                          Description
                      </div>
                  </div>
              </div>
              <div className="item">
                  <img alt="alter" src={ecommerce} />
                  <div className="content">
                      <div className="title">
                          Name Slider
                      </div>
                      <div className="description">
                          Description
                      </div>
                  </div>
              </div>
              <div className="item">
                  <img alt="alter" src={rock_paper_scissor} />
                  <div className="content">
                      <div className="title">
                          Name Slider
                      </div>
                      <div className="description">
                          Description
                      </div>
                  </div>
              </div>
          </div>

          <div className="arrows">
              <button id="prev">{'<'}</button>
              <button id="next">{'>'}</button>
          </div>
          <div className="time"></div>
      </div>
    </div>
  )
}

export default Carousel;
