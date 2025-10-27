
// 🔁 Scroll-படி navbar fixed பண்ண
function hidenavbar() {
  const amazonNav = document.querySelector(".amazon-nav");
  const menunav = document.querySelector('.menu-nav');

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      amazonNav.style.position = "fixed";
      amazonNav.style.top = "0";
      amazonNav.style.left = "0";
      amazonNav.style.right = "0";
      amazonNav.style.zIndex = "9999";

    } else {
      amazonNav.style.position = "static";
      menunav.style.display = "flex";
      // ✅ இங்கே position அல்ல, display
    }
  });
}

hidenavbar();













let slidebtnleft = document.getElementById('slide-btn-left');
let slidebtnright = document.getElementById('slide-btn-right');
let sliderList = document.querySelector('.slider-list'); // parent container added for append/prepend
let imageitem = document.querySelectorAll('.item');

let startslider = 0;
let endslider = (imageitem.length - 1) * 100;
let isSliding = false; // 🔒 lock

function updateItems() {
  imageitem = document.querySelectorAll('.item');
}

// Left button (Previous Slide)
slidebtnleft.addEventListener("click", () => {
  if (isSliding) return; // ⛔ stop if already moving
  isSliding = true; // 🔒 lock

  if (startslider < 0) {
    startslider += 100;

    // normal slide move
    imageitem.forEach(element => {
      element.style.transform = `translateX(${startslider}%)`;
      element.style.transition = "transform 0.2s ease-in-out";
    });

    setTimeout(() => isSliding = false, 200);

  } else {
    // Infinite loop logic - PREPEND last slide

    sliderList.prepend(imageitem[imageitem.length - 1]);
    updateItems();

    startslider = -100;
    imageitem.forEach(element => {
      element.style.transform = `translateX(${startslider}%)`;
      element.style.transition = "none";
    });

    // animate back to 0
    setTimeout(() => {
      startslider = 0;
      imageitem.forEach(element => {
        element.style.transform = `translateX(${startslider}%)`;
        element.style.transition = "transform 0.2s ease-in-out";
      });
      setTimeout(() => isSliding = false, 200);
    }, 20);
  }
});

// Right button (Next Slide)
slidebtnright.addEventListener("click", () => {
  if (isSliding) return; // ⛔ stop if already moving
  isSliding = true; // 🔒 lock

  if (startslider > -endslider) {
    startslider -= 100;

    // normal slide move
    imageitem.forEach(element => {
      element.style.transform = `translateX(${startslider}%)`;
      element.style.transition = "transform 0.2s ease-in-out";
    });

    setTimeout(() => {
      // if last slide → append first slide for infinite effect
      if (startslider === -endslider) {
        sliderList.appendChild(imageitem[0]);
        updateItems();
        startslider += 100;
        imageitem.forEach(element => {
          element.style.transition = "none";
          element.style.transform = `translateX(${startslider}%)`;
        });
      }
      isSliding = false;
    }, 200);

  } else {
    // Infinite loop logic - APPEND first slide
    sliderList.appendChild(imageitem[0]);
    updateItems();

    startslider = 0;
    imageitem.forEach(element => {
      element.style.transform = `translateX(${startslider}%)`;
      element.style.transition = "transform 0.2s ease-in-out";
    });

    setTimeout(() => isSliding = false, 200);
  }
});


// Auto slider settings
// 🔁 Auto slider settings
let autoSlideInterval = null;
let autoSlideDelay = 3000;

function startAutoSlider() {
  if (autoSlideInterval) return; // Already running → skip
  autoSlideInterval = setInterval(() => {
    slidebtnright.click();
  }, autoSlideDelay);
}

function stopAutoSlider() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = null; // Reset
}

// Start auto slider on page load
startAutoSlider();

// Optional: Pause on hover
sliderList.addEventListener("mouseenter", stopAutoSlider);
sliderList.addEventListener("mouseleave", startAutoSlider);


document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopAutoSlider()
  } else {
    startAutoSlider()
  }
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 70) {
    stopAutoSlider(); // stop auto slide
  } else {
    startAutoSlider(); // restart auto slide
  }
});



















const slider = document.querySelector('.kitchen-outers-slider');
const btnLeft = document.querySelector('.button1-outer');
const btnRight = document.querySelector('.button2-outer');
const items = document.querySelectorAll('.outer-item');

const scrollAmount = 1300;

// 🔁 Shake animation for edge clicks
function addShakeEffect(effectClass) {
  items.forEach((item) => {
    item.classList.add(effectClass);
    setTimeout(() => {
      item.classList.remove(effectClass);
    }, 400); // must match animation duration
  });
}

// 🎨 Update button colors based on scroll position
function updateButtonColors() {
  const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

  // Left button color
  if (slider.scrollLeft === 0) {
    btnLeft.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    btnLeft.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';

  } else {
    btnLeft.style.backgroundColor = 'white';
  }

  // Right button color
  if (Math.ceil(slider.scrollLeft) >= maxScrollLeft) {
    btnRight.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    btnRight.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
  } else {
    btnRight.style.backgroundColor = 'white';
  }
}

// ▶️ Left Button Click
btnLeft.addEventListener('click', () => {
  if (slider.scrollLeft === 0) {
    addShakeEffect('left-shake'); // Edge reached
  } else {
    slider.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  }
  setTimeout(updateButtonColors, 500); // Wait scroll finish
});

// ▶️ Right Button Click
btnRight.addEventListener('click', () => {
  const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
  if (Math.ceil(slider.scrollLeft) >= maxScrollLeft) {
    addShakeEffect('right-shake'); // Edge reached
  } else {
    slider.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
  setTimeout(updateButtonColors, 500); // Wait scroll finish
});

// ▶️ Update button colors on scroll too (optional)
slider.addEventListener('scroll', () => {
  updateButtonColors();
});

// ▶️ Call once on load
window.addEventListener('load', () => {
  updateButtonColors();
});







const slider1 = document.querySelector('.kitchen1-outers1-slider1');
const btnLeft1 = document.querySelector('#button1-outer1');
const btnRight1 = document.querySelector('#button2-outer1');
const items1 = document.querySelectorAll('.outer1-item1');

const scrollAmount1 = 1300;

function addShakeEffect1(effectClass1) {
  items1.forEach((items) => {
    items.classList.add(effectClass1);
    setTimeout(() => {
      items.classList.remove(effectClass1);
    }, 400); // must match animation duration
  });
}



// 🎨 Update button colors based on scroll position
function updateButtonColors1() {
  const maxScrollLeft1 = slider1.scrollWidth - slider1.clientWidth;

  // Left button color
  if (slider1.scrollLeft === 0) {
    btnLeft1.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    btnLeft1.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';

  } else {
    btnLeft1.style.backgroundColor = 'white';
  }

  // Right button color
  if (Math.ceil(slider1.scrollLeft) >= maxScrollLeft1) {
    btnRight1.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    btnRight1.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
  } else {
    btnRight1.style.backgroundColor = 'white';
  }
}



// ▶️ Left Button Click
btnLeft1.addEventListener('click', () => {
  if (slider1.scrollLeft === 0) {
    addShakeEffect1('left-shake'); // Edge reached
  } else {
    slider1.scrollBy({
      left: -scrollAmount1,
      behavior: 'smooth'
    });
  }
  setTimeout(updateButtonColors1, 500); // Wait scroll finish
});

// ▶️ Right Button Click
btnRight1.addEventListener('click', () => {
  const maxScrollLeft1 = slider1.scrollWidth - slider1.clientWidth;
  if (Math.ceil(slider1.scrollLeft) >= maxScrollLeft1) {
    addShakeEffect1('right-shake'); // Edge reached
  } else {
    slider1.scrollBy({
      left: scrollAmount1,
      behavior: 'smooth'
    });
  }
  setTimeout(updateButtonColors1, 500); // Wait scroll finish
});

slider1.addEventListener('scroll', () => {
  updateButtonColors1();
});

// ▶️ Call once on load
window.addEventListener('load', () => {
  updateButtonColors1();
});













const slider2 = document.querySelector('.kitchen2-outers2-slider2');
const btnLeft2 = document.querySelector('#button1-outer2');
const btnRight2 = document.querySelector('#button2-outer2');
const items2 = document.querySelectorAll('.outer2-item2');

const scrollAmount2 = 1300;

function addShakeEffect2(effectClass2) {
  items2.forEach((items) => {
    items.classList.add(effectClass2);
    setTimeout(() => {
      items.classList.remove(effectClass2);
    }, 400); // must match animation duration
  });
}



// 🎨 Update button colors based on scroll position
function updateButtonColors2() {
  const maxScrollLeft2 = slider2.scrollWidth - slider2.clientWidth;

  // Left button color
  if (slider2.scrollLeft === 0) {
    btnLeft2.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    btnLeft2.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';

  } else {
    btnLeft2.style.backgroundColor = 'white';
  }

  // Right button color
  if (Math.ceil(slider2.scrollLeft) >= maxScrollLeft2) {
    btnRight2.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    btnRight2.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
  } else {
    btnRight2.style.backgroundColor = 'white';
  }
}



// ▶️ Left Button Click
btnLeft2.addEventListener('click', () => {
  if (slider2.scrollLeft === 0) {
    addShakeEffect2('left-shake'); // Edge reached
  } else {
    slider2.scrollBy({
      left: -scrollAmount2,
      behavior: 'smooth'
    });
  }
  setTimeout(updateButtonColors2, 500); // Wait scroll finish
});

// ▶️ Right Button Click
btnRight2.addEventListener('click', () => {
  const maxScrollLeft2 = slider2.scrollWidth - slider2.clientWidth;
  if (Math.ceil(slider2.scrollLeft) >= maxScrollLeft2) {
    addShakeEffect2('right-shake'); // Edge reached
  } else {
    slider2.scrollBy({
      left: scrollAmount2,
      behavior: 'smooth'
    });
  }
  setTimeout(updateButtonColors2, 500); // Wait scroll finish
});

slider2.addEventListener('scroll', () => {
  updateButtonColors2();
});

// ▶️ Call once on load
window.addEventListener('load', () => {
  updateButtonColors2();
});













const slider3 = document.querySelector('.kitchen3-outers3-slider3');
const btnLeft3 = document.querySelector('#button1-outer3');
const btnRight3 = document.querySelector('#button2-outer3');
const items3 = document.querySelectorAll('.outer3-item3');

const scrollAmount3 = 1300;

function addShakeEffect3(effectClass3) {
  items3.forEach((items) => {
    items.classList.add(effectClass3);
    setTimeout(() => {
      items.classList.remove(effectClass3);
    }, 400); // must match animation duration
  });
}



// 🎨 Update button colors based on scroll position
function updateButtonColors3() {
  const maxScrollLeft3 = slider3.scrollWidth - slider3.clientWidth;

  // Left button color
  if (slider3.scrollLeft === 0) {
    btnLeft3.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    btnLeft3.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';

  } else {
    btnLeft3.style.backgroundColor = 'white';
  }

  // Right button color
  if (Math.ceil(slider3.scrollLeft) >= maxScrollLeft3) {
    btnRight3.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    btnRight3.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
  } else {
    btnRight3.style.backgroundColor = 'white';
  }
}



// ▶️ Left Button Click
btnLeft3.addEventListener('click', () => {
  if (slider3.scrollLeft === 0) {
    addShakeEffect3('left-shake'); // Edge reached
  } else {
    slider3.scrollBy({
      left: -scrollAmount3,
      behavior: 'smooth'
    });
  }
  setTimeout(updateButtonColors3, 500); // Wait scroll finish
});

// ▶️ Right Button Click
btnRight3.addEventListener('click', () => {
  const maxScrollLeft3 = slider3.scrollWidth - slider3.clientWidth;
  if (Math.ceil(slider3.scrollLeft) >= maxScrollLeft3) {
    addShakeEffect3('right-shake'); // Edge reached
  } else {
    slider3.scrollBy({
      left: scrollAmount3,
      behavior: 'smooth'
    });
  }
  setTimeout(updateButtonColors3, 500); // Wait scroll finish
});

slider3.addEventListener('scroll', () => {
  updateButtonColors3();
});

// ▶️ Call once on load
window.addEventListener('load', () => {
  updateButtonColors3();
});















const slider4 = document.querySelector('.kitchen4-outers4-slider4');
const btnLeft4 = document.querySelector('#button1-outer4');
const btnRight4 = document.querySelector('#button2-outer4');
const items4 = document.querySelectorAll('.outer4-item4');

const scrollAmount4 = 1300;

function addShakeEffect4(effectClass4) {
  items4.forEach((items) => {
    items.classList.add(effectClass4);
    setTimeout(() => {
      items.classList.remove(effectClass4);
    }, 400); // must match animation duration
  });
}



// 🎨 Update button colors based on scroll position
function updateButtonColors4() {
  const maxScrollLeft4 = slider4.scrollWidth - slider4.clientWidth;

  // Left button color
  if (slider4.scrollLeft === 0) {
    btnLeft4.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    btnLeft4.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';

  } else {
    btnLeft4.style.backgroundColor = 'white';
  }

  // Right button color
  if (Math.ceil(slider4.scrollLeft) >= maxScrollLeft4) {
    btnRight4.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    btnRight4.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
  } else {
    btnRight4.style.backgroundColor = 'white';
  }
}



// ▶️ Left Button Click
btnLeft4.addEventListener('click', () => {
  if (slider4.scrollLeft === 0) {
    addShakeEffect4('left-shake'); // Edge reached
  } else {
    slider4.scrollBy({
      left: -scrollAmount4,
      behavior: 'smooth'
    });
  }
  setTimeout(updateButtonColors4, 500); // Wait scroll finish
});

// ▶️ Right Button Click
btnRight4.addEventListener('click', () => {
  const maxScrollLeft4 = slider4.scrollWidth - slider4.clientWidth;
  if (Math.ceil(slider4.scrollLeft) >= maxScrollLeft4) {
    addShakeEffect4('right-shake'); // Edge reached
  } else {
    slider4.scrollBy({
      left: scrollAmount4,
      behavior: 'smooth'
    });
  }
  setTimeout(updateButtonColors4, 500); // Wait scroll finish
});

slider4.addEventListener('scroll', () => {
  updateButtonColors4();
});

// ▶️ Call once on load
window.addEventListener('load', () => {
  updateButtonColors4();
});






































// // dom structure
// const structurediv1=document.querySelector('.structure-domused1');
// const structurediv2=document.querySelector('.structure-domused2');
// const container1dom=document.createElement('div');
// container1dom.classList.add('container1dom')
// const container2dom=document.createElement('div');
// container2dom.classList.add('container1dom')
// const container3dom=document.createElement('div');
// container3dom.classList.add('container1dom')
// const container4dom=document.createElement('div');
// container4dom.classList.add('container1dom');
// structurediv1.appendChild(container1dom)
// structurediv1.appendChild(container2dom)
// structurediv1.appendChild(container3dom)
// structurediv1.appendChild(container4dom)


// const containers = [container1dom, container2dom, container3dom, container4dom];
// const letters=['one','two','three','four'];
// containers.forEach((container,index) => {
//     const childDiv = document.createElement('div');
//     childDiv.classList.add('box')
//     childDiv.style.backgroundColor = 'white';
//     childDiv.textContent = letters[index];
//     container.appendChild(childDiv);
// });

const box1 = document.querySelector('.displaybox1-container1');
const box2 = document.querySelector('.displaybox2-container1');
const box3 = document.querySelector('.displaybox3-container1');
const box4 = document.querySelector('.displaybox4-container1');
const container1btn1 = document.querySelector('.structurebtn1');
const container1btn2 = document.querySelector('.structurebtn2');
const container1btn3 = document.querySelector('.structurebtn3');
const container1btn4 = document.querySelector('.structurebtn4');




const btns = document.querySelectorAll('.buttons-in-container1  button');

const colors = ["white", "white", "white", "white"];

[box1, box2, box3, box4].forEach((box, i) => {
  box.style.background = colors[i];
});

btns.forEach((btn, i) => {
  btn.style.background = colors[i];
});



// ✅ Your original four functions (unchanged)
function button1structure6() {
  box1.classList.add('action');
  box2.classList.remove('action');
  box3.classList.remove('action');
  box4.classList.remove('action');
  container1btn1.classList.add('structure7-btn-border')
  container1btn2.classList.remove('structure7-btn-border')
  container1btn3.classList.remove('structure7-btn-border')
  container1btn4.classList.remove('structure7-btn-border')




  // mouse leave


}

function button2structure6() {
  box1.classList.remove('action');
  box2.classList.add('action');
  box3.classList.remove('action');
  box4.classList.remove('action');
  container1btn2.classList.add('structure7-btn-border')
  container1btn1.classList.remove('structure7-btn-border')

  container1btn3.classList.remove('structure7-btn-border')
  container1btn4.classList.remove('structure7-btn-border')
}

function button3structure6() {
  box1.classList.remove('action');
  box2.classList.remove('action');
  box3.classList.add('action');
  box4.classList.remove('action');
  container1btn1.classList.remove('structure7-btn-border')
  container1btn2.classList.remove('structure7-btn-border')
  container1btn3.classList.add('structure7-btn-border')
  container1btn4.classList.remove('structure7-btn-border')
}

function button4structure6() {
  box1.classList.remove('action');
  box2.classList.remove('action');
  box3.classList.remove('action');
  box4.classList.add('action');
  container1btn1.classList.remove('structure7-btn-border')
  container1btn2.classList.remove('structure7-btn-border')
  container1btn3.classList.remove('structure7-btn-border')
  container1btn4.classList.add('structure7-btn-border')
}











// container2 in structur7 start
const box5 = document.querySelector('.moving-img-para-content1');
const box6 = document.querySelector('.moving-img-para-content2');
const box7 = document.querySelector('.moving-img-para-content3');
const box8 = document.querySelector('.moving-img-para-content4');



const btn5 = document.querySelector('.mensbtn1');
const btn6 = document.querySelector('.mensbtn2');
const btn7 = document.querySelector('.mensbtn3');
const btn8 = document.querySelector('.mensbtn4');

const btn1mg = document.querySelector('.btn1mg-container2')
const btn2mg = document.querySelector('.btn2mg-container2')
const btn3mg = document.querySelector('.btn3mg-container2')
const btn4mg = document.querySelector('.btn4mg-container2')



const boximg1 = document.getElementById('container2-imgbtn1')
const boximg2 = document.getElementById('container2-imgbtn2')
const boximg3 = document.getElementById('container2-imgbtn3')
const boximg4 = document.getElementById('container2-imgbtn4')



const btns1 = document.querySelectorAll('.button-center-setup  button');
const imgbtns = document.querySelectorAll('.button-center-setup .setup')
const color3 = ['white', 'white', 'white', 'white']
const colors1 = ['white', 'white', 'white', 'white'];
//  const color3=['white','black','white','black']


const src1 = [
  "https://m.media-amazon.com/images/I/71JLnaiPYNL._AC_SY175_.jpg",
  "https://m.media-amazon.com/images/I/81Bjkp0GiKL._AC_SY175_.jpg",
  "https://m.media-amazon.com/images/I/71x6sccNoFL._AC_SY175_.jpg",
  "https://m.media-amazon.com/images/I/81ejYOoXXVL._AC_SY175_.jpg",



];




[box5, box6, box7, box8].forEach((box1, i) => {
  box1.style.background = colors1[i];
});


[btn5, btn6, btn7, btn8].forEach((btn1, i) => {
  btn1.style.background = colors1[i];
  // btn1.style.backgroundImage = `url(${src1[i]})`;   // ✅ correct way
  // btn1.style.backgroundSize = "contain";            // படம் உள்ளே fit ஆகும்
  // btn1.style.backgroundRepeat = "no-repeat";        // repeat ஆகாது
  // btn1.style.backgroundPosition = "center";         // center align
  // btn1.style.width = "150px";                       // ✅ width
  // btn1.style.height = "150px";  

});

// [btn1mg,btn2mg,btn3mg,btn4mg].forEach((btnimg,i)=>{
// btnimg.style.background=color3[i];
// });

imgbtns.forEach((imgsetup, l) => {
  imgsetup.style.backgroundColor = color3[l];
  imgsetup.style.backgroundImage = `url(${src1[l]})`;   // ✅ correct way
  imgsetup.style.backgroundSize = "contain";            // படம் உள்ளே fit ஆகும்
  imgsetup.style.backgroundRepeat = "no-repeat";        // repeat ஆகாது
  imgsetup.style.backgroundPosition = "center";         // center align
  imgsetup.style.width = "52px";                       // ✅ width
  imgsetup.style.height = "52px";
});

[boximg1, boximg2, boximg3, boximg4].forEach((boximg, i) => {
  boximg.style.backgroundImage = `url(${src1[i]})`;   // ✅ correct way
  boximg.style.backgroundSize = "contain";            // படம் உள்ளே fit ஆகும்
  boximg.style.backgroundRepeat = "no-repeat";        // repeat ஆகாது
  boximg.style.backgroundPosition = "center";         // center align
  boximg.style.width = "100%";                       // ✅ width
  boximg.style.height = "100%";
})


function mensbtn1action1() {
  box5.classList.add('action1');
  box6.classList.remove('action1');
  box7.classList.remove('action1');
  box8.classList.remove('action1');
  btn5.classList.add('structure7-btn-border')
  btn6.classList.remove('structure7-btn-border')
  btn7.classList.remove('structure7-btn-border')
  btn8.classList.remove('structure7-btn-border')
}


function mensbtn2action1() {
  box5.classList.remove('action1');
  box6.classList.add('action1');
  box7.classList.remove('action1');
  box8.classList.remove('action1');
  btn5.classList.remove('structure7-btn-border')
  btn6.classList.add('structure7-btn-border')
  btn7.classList.remove('structure7-btn-border')
  btn8.classList.remove('structure7-btn-border')
}

function mensbtn3action1() {
  box5.classList.remove('action1');
  box6.classList.remove('action1');
  box7.classList.add('action1');
  box8.classList.remove('action1');
  btn5.classList.remove('structure7-btn-border')
  btn6.classList.remove('structure7-btn-border')
  btn7.classList.add('structure7-btn-border')
  btn8.classList.remove('structure7-btn-border')
}

function mensbtn4action1() {
  box5.classList.remove('action1');
  box6.classList.remove('action1');
  box7.classList.remove('action1');
  box8.classList.add('action1');
  btn5.classList.remove('structure7-btn-border')
  btn6.classList.remove('structure7-btn-border')
  btn7.classList.remove('structure7-btn-border')
  btn8.classList.add('structure7-btn-border')
}

function new1() {

  box5.classList.add('action1');
  box6.classList.remove('action1');
  box7.classList.remove('action1');
  box8.classList.remove('action1');
  btn5.classList.add('structure7-btn-border')
  btn6.classList.remove('structure7-btn-border')
  btn7.classList.remove('structure7-btn-border')
  btn8.classList.remove('structure7-btn-border')

}


function new2() {
  box5.classList.remove('action1');
  box6.classList.add('action1');
  box7.classList.remove('action1');
  box8.classList.remove('action1');
  btn5.classList.remove('structure7-btn-border')
  btn6.classList.add('structure7-btn-border')
  btn7.classList.remove('structure7-btn-border')
  btn8.classList.remove('structure7-btn-border')
}

function new3() {
  box5.classList.remove('action1');
  box6.classList.remove('action1');
  box7.classList.add('action1');
  box8.classList.remove('action1');
  btn5.classList.remove('structure7-btn-border')
  btn6.classList.remove('structure7-btn-border')
  btn7.classList.add('structure7-btn-border')
  btn8.classList.remove('structure7-btn-border')
}

function new4() {
  box5.classList.remove('action1');
  box6.classList.remove('action1');
  box7.classList.remove('action1');
  box8.classList.add('action1');
  btn5.classList.remove('structure7-btn-border')
  btn6.classList.remove('structure7-btn-border')
  btn7.classList.remove('structure7-btn-border')
  btn8.classList.add('structure7-btn-border')
}


// function mousehover(){
// btn1mg.addEventListener("mouseenter", () => {
//   btn5.classList.remove('structure7-btn-border');
// });

// }



// container2is finished in structure7






















// setimeout slider cuttick fade slider start



// button js start for fade sky blue border color only
function clickfade1() {
  const sliderbtn1 = document.querySelector('.sliderbtn1')
  sliderbtn1.classList.remove('blackborder')
  sliderbtn1.classList.add('clickedfade')

  setTimeout(function () {
    sliderbtn1.classList.remove('clickedfade')
    sliderbtn1.classList.add('blackborder')
  }, 200);


}
function clickfade2() {
  const sliderbtn2 = document.querySelector('.sliderbtn2')
  sliderbtn2.classList.remove('blackborder')
  sliderbtn2.classList.add('clickedfade')
  setTimeout(function () {
    sliderbtn2.classList.remove('clickedfade')
    sliderbtn2.classList.add('blackborder')
  }, 200);
}

const track = document.getElementById('slider-track');
const totalBoxes = 7;
const boxWidth = 1300; // match CSS width
let index = 0;
let increaseindex=0
let currendvalue

function updateSlider() {
 
 currendvalue = track.style.transform = `translateX(${-boxWidth * index}px)`;

}

function moveStraight() {
   
  index = (index - 1 + 7) % 7;
   updateSlider();

       let indexfade=document.querySelector('.instruction-p2-p');
     
        indexvalue=(indexvalue-1)
changevalue.innerHTML=indexvalue
    if(indexvalue<startbox){

 indexvalue=7
  changevalue.innerHTML=indexvalue
    }
    if(indexvalue==1){
    startpage.style.display="none"
    indexfade.classList.add('forstartpage')
    }
    if(indexvalue==2){
       startpage.style.display="block"
       indexfade.classList.remove('forstartpage')
    }
      if(indexvalue==3){
        startpage.style.display="block"
          indexfade.classList.remove('forstartpage')
      }
       if(indexvalue==4){
        startpage.style.display="block"
          indexfade.classList.remove('forstartpage')
      }
       if(indexvalue==5){
        startpage.style.display="block"
          indexfade.classList.remove('forstartpage')
      }
       if(indexvalue==6){
        startpage.style.display="block"
          indexfade.classList.remove('forstartpage')
      }
       if(indexvalue==7){
        startpage.style.display="block"
          indexfade.classList.remove('forstartpage')
      }
}


 let changevalue=document.querySelector('.changevalue')
    let startpage=document.querySelector('.startpage');
    let totalindex=document.querySelector('.totalindex');
    const totalwrapper=document.querySelectorAll('.wrapper-box');
    let fullboxes= totalwrapper.length
   let wraperboxes= totalindex.innerHTML=fullboxes;
   let startbox=1;
   let indexvalue=1;
   changevalue.innerHTML=indexvalue
     if(indexvalue==1){
    startpage.style.display="none"
    }


   


function moveReverse() {
    // increaseindex=increaseindex+1
  index = (index + 1) % 7;
  updateSlider();

    // let changevalue=document.querySelector('.changevalue');
    // changevalue.innerHTML=increaseindex+1
    // if(increaseindex>7){
    //   increaseindex=1
    // }
     let indexfade=document.querySelector('.instruction-p2-p');
     
      
        indexvalue=(indexvalue+1)
changevalue.innerHTML=indexvalue
    if(indexvalue>=wraperboxes){
  indexvalue=0
    }
    if(indexvalue==1){
    startpage.style.display="none"
     indexfade.classList.add('forstartpage')
    }
    if(indexvalue==2){
       startpage.style.display="block"
        indexfade.classList.remove('forstartpage')
    }
      if(indexvalue==3){
        startpage.style.display="block"
         indexfade.classList.remove('forstartpage')
      }
       if(indexvalue==4){
        startpage.style.display="block"
         indexfade.classList.remove('forstartpage')
      }
       if(indexvalue==5){
        startpage.style.display="block"
         indexfade.classList.remove('forstartpage')
      }
       if(indexvalue==6){
        startpage.style.display="block"
         indexfade.classList.remove('forstartpage')
      }
       if(indexvalue==7){
        startpage.style.display="block"
         indexfade.classList.remove('forstartpage')
      }
 

    
     
   
   
    

}
 function clickstartpage(){
      indexvalue=1
        changevalue.innerHTML=indexvalue
         startpage.style.display="none"
       index=0
        let indexfade=document.querySelector('.instruction-p2-p');
  indexfade.classList.add('forstartpage')
        updateSlider()
    }
  
function showStraight() {
  let currentvalue = track.style.transform || 'translateX(0px)';
  












  const redbox1 = document.querySelector('.redbox1');
  const redbox2 = document.querySelector('.redbox2');
  const redbox3 = document.querySelector('.redbox3');
  const redbox4 = document.querySelector('.redbox4');
  const redbox5 = document.querySelector('.redbox5');
  const redbox6 = document.querySelector('.redbox6');
  const redbox7 = document.querySelector('.redbox7');
  const purplebox1 = document.querySelector('.purplebox1');
  const purplebox2 = document.querySelector('.purplebox2');
  const purplebox3 = document.querySelector('.purplebox3');
  const purplebox4 = document.querySelector('.purplebox4');
  const purplebox5 = document.querySelector('.purplebox5');
  const purplebox6 = document.querySelector('.purplebox6');
  const purplebox7 = document.querySelector('.purplebox7');
  const greenyellowbox1 = document.querySelector('.greenyellowbox1');
  const greenyellowbox2 = document.querySelector('.greenyellowbox2');
  const greenyellowbox3 = document.querySelector('.greenyellowbox3');
  const greenyellowbox4 = document.querySelector('.greenyellowbox4');
  const greenyellowbox5 = document.querySelector('.greenyellowbox5');
  const greenyellowbox6 = document.querySelector('.greenyellowbox6');
  const greenyellowbox7 = document.querySelector('.greenyellowbox7');
  const greenbox1 = document.querySelector('.greenbox1');
  const greenbox2 = document.querySelector('.greenbox2');
  const greenbox3 = document.querySelector('.greenbox3');
  const greenbox4 = document.querySelector('.greenbox4');
  const greenbox5 = document.querySelector('.greenbox5');
  const greenbox6 = document.querySelector('.greenbox6');
  const greenbox7 = document.querySelector('.greenbox7');
  const browbox1 = document.querySelector('.browbox1');
  const browbox2 = document.querySelector('.browbox2');
  const browbox3 = document.querySelector('.browbox3');
  const browbox4 = document.querySelector('.browbox4');
  const browbox5 = document.querySelector('.browbox5');
  const browbox6 = document.querySelector('.browbox6');
  const browbox7 = document.querySelector('.browbox7');
  const orangebox1 = document.querySelector('.orangebox1');
  const orangebox2 = document.querySelector('.orangebox2');
  const orangebox3 = document.querySelector('.orangebox3');
  const orangebox4 = document.querySelector('.orangebox4');
  const orangebox5 = document.querySelector('.orangebox5');
  const orangebox6 = document.querySelector('.orangebox6');
  const orangebox7 = document.querySelector('.orangebox7');
  const bluebox1 = document.querySelector('.bluebox1');
  const bluebox2 = document.querySelector('.bluebox2');
  const bluebox3 = document.querySelector('.bluebox3');
  const bluebox4 = document.querySelector('.bluebox4');
  const bluebox5 = document.querySelector('.bluebox5');
  const bluebox6 = document.querySelector('.bluebox6');
  const bluebox7 = document.querySelector('.bluebox7');
  if (currentvalue === 'translateX(0px)') {

redbox1.classList.remove('active-for-slider')
redbox2.classList.remove('active-for-slider')
redbox3.classList.remove('active-for-slider')
redbox4.classList.remove('active-for-slider')
redbox5.classList.remove('active-for-slider')
redbox6.classList.remove('active-for-slider')
redbox7.classList.remove('active-for-slider')
    setTimeout(() => redbox1.classList.add('active-for-slider'), 100);
    redid2 = setTimeout(() => redbox2.classList.add('active-for-slider'), 200);
    redid3 = setTimeout(() => redbox3.classList.add('active-for-slider'), 300);
    redid4 = setTimeout(() => redbox4.classList.add('active-for-slider'), 400);
    redid5 = setTimeout(() => redbox5.classList.add('active-for-slider'), 500);
    redid6 = setTimeout(() => redbox6.classList.add('active-for-slider'), 600);
    redid7 = setTimeout(() => redbox7.classList.add('active-for-slider'), 700);





  }
  if (currentvalue === 'translateX(-1300px)') {
    bluebox1.style.display = 'none'
    bluebox2.style.display = 'none'
    bluebox3.style.display = 'none'
    bluebox4.style.display = 'none'
    bluebox5.style.display = 'none'
    bluebox6.style.display = 'none'
    bluebox7.style.display = 'none'
    blueid1 = setTimeout(() => bluebox1.style.display = 'block', 100);
     blueid2 = setTimeout(() => bluebox2.style.display = 'block', 200);
     blueid3 = setTimeout(() => bluebox3.style.display = 'block', 300);
     blueid4 = setTimeout(() => bluebox4.style.display = 'block', 400); 
    blueid5 = setTimeout(() => bluebox5.style.display = 'block', 500);
     blueid6 = setTimeout(() => bluebox6.style.display = 'block', 600);
     blueid7 = setTimeout(() => bluebox7.style.display = 'block', 700);

  }
  if (currentvalue === 'translateX(-2600px)') {
    orangebox1.style.display = 'none'
    orangebox2.style.display = 'none'
    orangebox3.style.display = 'none'
    orangebox4.style.display = 'none'
    orangebox5.style.display = 'none'
    orangebox6.style.display = 'none'
    orangebox7.style.display = 'none'
    orangeid1 = setTimeout(() => orangebox1.style.display = 'block', 100);
    orangeid2 = setTimeout(() => orangebox2.style.display = 'block', 200);
    orangeid3 = setTimeout(() => orangebox3.style.display = 'block', 300);
    orangeid4 = setTimeout(() => orangebox4.style.display = 'block', 400);
    orangeid5 = setTimeout(() => orangebox5.style.display = 'block', 500);
    orangeid6 = setTimeout(() => orangebox6.style.display = 'block', 600);
    orangeid7 = setTimeout(() => orangebox7.style.display = 'block', 700);
  }
  if (currentvalue === 'translateX(-3900px)') {
    greenbox1.style.display = 'none'
    greenbox2.style.display = 'none'
    greenbox3.style.display = 'none'
    greenbox4.style.display = 'none'
    greenbox5.style.display = 'none'
    greenbox6.style.display = 'none'
    greenbox7.style.display = 'none'
greenid1 = setTimeout(() => greenbox1.style.display = 'block', 100);
greenid2 = setTimeout(() => greenbox2.style.display = 'block', 200);
greenid3 = setTimeout(() => greenbox3.style.display = 'block', 300);
greenid4 = setTimeout(() => greenbox4.style.display = 'block', 400);
greenid5 = setTimeout(() => greenbox5.style.display = 'block', 500);
greenid6 = setTimeout(() => greenbox6.style.display = 'block', 600);
greenid7 = setTimeout(() => greenbox7.style.display = 'block', 700);



  }
  if (currentvalue === 'translateX(-5200px)') {
     greenyellowbox1.style.display = 'none'
     greenyellowbox2.style.display = 'none'
     greenyellowbox3.style.display = 'none'
     greenyellowbox4.style.display = 'none'
     greenyellowbox5.style.display = 'none'
     greenyellowbox6.style.display = 'none'
     greenyellowbox7.style.display = 'none'

    greenyellowid1 = setTimeout(() => greenyellowbox1.style.display = 'block', 100);
greenyellowid2 = setTimeout(() => greenyellowbox2.style.display = 'block', 200);
greenyellowid3 = setTimeout(() => greenyellowbox3.style.display = 'block', 300);
greenyellowid4 = setTimeout(() => greenyellowbox4.style.display = 'block', 400);
greenyellowid5 = setTimeout(() => greenyellowbox5.style.display = 'block', 500);
greenyellowid6 = setTimeout(() => greenyellowbox6.style.display = 'block', 600);
greenyellowid7 = setTimeout(() => greenyellowbox7.style.display = 'block', 700);
   }
  if (currentvalue === 'translateX(-6500px)') {
    purplebox1.style.display = 'none'
    purplebox2.style.display = 'none'
    purplebox3.style.display = 'none'
    purplebox4.style.display = 'none'
    purplebox5.style.display = 'none'
    purplebox6.style.display = 'none'
    purplebox7.style.display = 'none'
    purpleid1 = setTimeout(() => purplebox1.style.display = 'block', 100);
purpleid2 = setTimeout(() => purplebox2.style.display = 'block', 200);
purpleid3 = setTimeout(() => purplebox3.style.display = 'block', 300);
purpleid4 = setTimeout(() => purplebox4.style.display = 'block', 400);
purpleid5 = setTimeout(() => purplebox5.style.display = 'block', 500);
purpleid6 = setTimeout(() => purplebox6.style.display = 'block', 600);
purpleid7 = setTimeout(() => purplebox7.style.display = 'block', 700);
   }
  if (currentvalue === 'translateX(-7800px)') {
     browbox1.style.display = 'none'
      browbox2.style.display = 'none'
       browbox3.style.display = 'none'
        browbox4.style.display = 'none'
         browbox5.style.display = 'none'
          browbox6.style.display = 'none'
           browbox7.style.display = 'none'
    browid1 = setTimeout(() => browbox1.style.display = 'block', 100);
browid2 = setTimeout(() => browbox2.style.display = 'block', 200);
browid3 = setTimeout(() => browbox3.style.display = 'block', 300);
browid4 = setTimeout(() => browbox4.style.display = 'block', 400);
browid5 = setTimeout(() => browbox5.style.display = 'block', 500);
browid6 = setTimeout(() => browbox6.style.display = 'block', 600);
browid7 = setTimeout(() => browbox7.style.display = 'block', 700);
   }


}
function showReverse() {
  let currentvalue = track.style.transform || 'translateX(0px)';
  const redbox1 = document.querySelector('.redbox1');
  const redbox2 = document.querySelector('.redbox2');
  const redbox3 = document.querySelector('.redbox3');
  const redbox4 = document.querySelector('.redbox4');
  const redbox5 = document.querySelector('.redbox5');
  const redbox6 = document.querySelector('.redbox6');
  const redbox7 = document.querySelector('.redbox7');
  const purplebox1 = document.querySelector('.purplebox1');
  const purplebox2 = document.querySelector('.purplebox2');
  const purplebox3 = document.querySelector('.purplebox3');
  const purplebox4 = document.querySelector('.purplebox4');
  const purplebox5 = document.querySelector('.purplebox5');
  const purplebox6 = document.querySelector('.purplebox6');
  const purplebox7 = document.querySelector('.purplebox7');
  const greenyellowbox1 = document.querySelector('.greenyellowbox1');
  const greenyellowbox2 = document.querySelector('.greenyellowbox2');
  const greenyellowbox3 = document.querySelector('.greenyellowbox3');
  const greenyellowbox4 = document.querySelector('.greenyellowbox4');
  const greenyellowbox5 = document.querySelector('.greenyellowbox5');
  const greenyellowbox6 = document.querySelector('.greenyellowbox6');
  const greenyellowbox7 = document.querySelector('.greenyellowbox7');
  const greenbox1 = document.querySelector('.greenbox1');
  const greenbox2 = document.querySelector('.greenbox2');
  const greenbox3 = document.querySelector('.greenbox3');
  const greenbox4 = document.querySelector('.greenbox4');
  const greenbox5 = document.querySelector('.greenbox5');
  const greenbox6 = document.querySelector('.greenbox6');
  const greenbox7 = document.querySelector('.greenbox7');
  const browbox1 = document.querySelector('.browbox1');
  const browbox2 = document.querySelector('.browbox2');
  const browbox3 = document.querySelector('.browbox3');
  const browbox4 = document.querySelector('.browbox4');
  const browbox5 = document.querySelector('.browbox5');
  const browbox6 = document.querySelector('.browbox6');
  const browbox7 = document.querySelector('.browbox7');
  const orangebox1 = document.querySelector('.orangebox1');
  const orangebox2 = document.querySelector('.orangebox2');
  const orangebox3 = document.querySelector('.orangebox3');
  const orangebox4 = document.querySelector('.orangebox4');
  const orangebox5 = document.querySelector('.orangebox5');
  const orangebox6 = document.querySelector('.orangebox6');
  const orangebox7 = document.querySelector('.orangebox7');
  const bluebox1 = document.querySelector('.bluebox1');
  const bluebox2 = document.querySelector('.bluebox2');
  const bluebox3 = document.querySelector('.bluebox3');
  const bluebox4 = document.querySelector('.bluebox4');
  const bluebox5 = document.querySelector('.bluebox5');
  const bluebox6 = document.querySelector('.bluebox6');
  const bluebox7 = document.querySelector('.bluebox7');
  if (currentvalue === 'translateX(0px)') {

redbox1.classList.remove('active-for-slider')
redbox2.classList.remove('active-for-slider')
redbox3.classList.remove('active-for-slider')
redbox4.classList.remove('active-for-slider')
redbox5.classList.remove('active-for-slider')
redbox6.classList.remove('active-for-slider')
redbox7.classList.remove('active-for-slider')
    setTimeout(() => redbox1.classList.add('active-for-slider'), 700);
    redid2 = setTimeout(() => redbox2.classList.add('active-for-slider'), 600);
    redid3 = setTimeout(() => redbox3.classList.add('active-for-slider'), 500);
    redid4 = setTimeout(() => redbox4.classList.add('active-for-slider'), 400);
    redid5 = setTimeout(() => redbox5.classList.add('active-for-slider'), 300);
    redid6 = setTimeout(() => redbox6.classList.add('active-for-slider'), 200);
    redid7 = setTimeout(() => redbox7.classList.add('active-for-slider'), 100);





  }
  if (currentvalue === 'translateX(-1300px)') {
    bluebox1.style.display = 'none'
    bluebox2.style.display = 'none'
    bluebox3.style.display = 'none'
    bluebox4.style.display = 'none'
    bluebox5.style.display = 'none'
    bluebox6.style.display = 'none'
    bluebox7.style.display = 'none'
    blueid1 = setTimeout(() => bluebox1.style.display = 'block', 700);
     blueid2 = setTimeout(() => bluebox2.style.display = 'block', 600);
     blueid3 = setTimeout(() => bluebox3.style.display = 'block', 500);
     blueid4 = setTimeout(() => bluebox4.style.display = 'block', 400); 
    blueid5 = setTimeout(() => bluebox5.style.display = 'block', 300);
     blueid6 = setTimeout(() => bluebox6.style.display = 'block', 200);
     blueid7 = setTimeout(() => bluebox7.style.display = 'block', 100);

  }
  if (currentvalue === 'translateX(-2600px)') {
    orangebox1.style.display = 'none'
    orangebox2.style.display = 'none'
    orangebox3.style.display = 'none'
    orangebox4.style.display = 'none'
    orangebox5.style.display = 'none'
    orangebox6.style.display = 'none'
    orangebox7.style.display = 'none'
    orangeid1 = setTimeout(() => orangebox1.style.display = 'block', 700);
    orangeid2 = setTimeout(() => orangebox2.style.display = 'block', 600);
    orangeid3 = setTimeout(() => orangebox3.style.display = 'block', 500);
    orangeid4 = setTimeout(() => orangebox4.style.display = 'block', 400);
    orangeid5 = setTimeout(() => orangebox5.style.display = 'block', 300);
    orangeid6 = setTimeout(() => orangebox6.style.display = 'block', 200);
    orangeid7 = setTimeout(() => orangebox7.style.display = 'block', 100);
  }
  if (currentvalue === 'translateX(-3900px)') {
    greenbox1.style.display = 'none'
    greenbox2.style.display = 'none'
    greenbox3.style.display = 'none'
    greenbox4.style.display = 'none'
    greenbox5.style.display = 'none'
    greenbox6.style.display = 'none'
    greenbox7.style.display = 'none'
greenid1 = setTimeout(() => greenbox1.style.display = 'block', 700);
greenid2 = setTimeout(() => greenbox2.style.display = 'block', 600);
greenid3 = setTimeout(() => greenbox3.style.display = 'block', 500);
greenid4 = setTimeout(() => greenbox4.style.display = 'block', 400);
greenid5 = setTimeout(() => greenbox5.style.display = 'block', 300);
greenid6 = setTimeout(() => greenbox6.style.display = 'block', 200);
greenid7 = setTimeout(() => greenbox7.style.display = 'block', 100);



  }
  if (currentvalue === 'translateX(-5200px)') {
     greenyellowbox1.style.display = 'none'
     greenyellowbox2.style.display = 'none'
     greenyellowbox3.style.display = 'none'
     greenyellowbox4.style.display = 'none'
     greenyellowbox5.style.display = 'none'
     greenyellowbox6.style.display = 'none'
     greenyellowbox7.style.display = 'none'

    greenyellowid1 = setTimeout(() => greenyellowbox1.style.display = 'block', 700);
greenyellowid2 = setTimeout(() => greenyellowbox2.style.display = 'block', 600);
greenyellowid3 = setTimeout(() => greenyellowbox3.style.display = 'block', 500);
greenyellowid4 = setTimeout(() => greenyellowbox4.style.display = 'block', 400);
greenyellowid5 = setTimeout(() => greenyellowbox5.style.display = 'block', 300);
greenyellowid6 = setTimeout(() => greenyellowbox6.style.display = 'block', 200);
greenyellowid7 = setTimeout(() => greenyellowbox7.style.display = 'block', 100);
   }
  if (currentvalue === 'translateX(-6500px)') {
    purplebox1.style.display = 'none'
    purplebox2.style.display = 'none'
    purplebox3.style.display = 'none'
    purplebox4.style.display = 'none'
    purplebox5.style.display = 'none'
    purplebox6.style.display = 'none'
    purplebox7.style.display = 'none'
    purpleid1 = setTimeout(() => purplebox1.style.display = 'block', 700);
purpleid2 = setTimeout(() => purplebox2.style.display = 'block', 600);
purpleid3 = setTimeout(() => purplebox3.style.display = 'block', 500);
purpleid4 = setTimeout(() => purplebox4.style.display = 'block', 400);
purpleid5 = setTimeout(() => purplebox5.style.display = 'block', 300);
purpleid6 = setTimeout(() => purplebox6.style.display = 'block', 200);
purpleid7 = setTimeout(() => purplebox7.style.display = 'block', 100);
   }
  if (currentvalue === 'translateX(-7800px)') {
     browbox1.style.display = 'none'
      browbox2.style.display = 'none'
       browbox3.style.display = 'none'
        browbox4.style.display = 'none'
         browbox5.style.display = 'none'
          browbox6.style.display = 'none'
           browbox7.style.display = 'none'
    browid1 = setTimeout(() => browbox1.style.display = 'block', 700);
browid2 = setTimeout(() => browbox2.style.display = 'block', 600);
browid3 = setTimeout(() => browbox3.style.display = 'block', 500);
browid4 = setTimeout(() => browbox4.style.display = 'block', 400);
browid5 = setTimeout(() => browbox5.style.display = 'block', 300);
browid6 = setTimeout(() => browbox6.style.display = 'block', 200);
browid7 = setTimeout(() => browbox7.style.display = 'block', 100);
   }

}

// function showindex(){

// // let indexwrapper=1
// //   const wrapperboxes=document.querySelectorAll('.wrapper-box');
// // const totalwrapper= wrapperboxes.length;
// // indexwrapper=indexwrapper+1
// // console.log(totalwrapper)
// // console.log(index)
// // if(indexwrapper > 7){
// //   indexwrapper=0;
// // }


// let totalbox=document.querySelector('.totalindex');
//   const wrapperboxes=document.querySelectorAll('.wrapper-box');
//   // totalbox.innerHTML=wrapperboxes.length;


// totalbox.textContent = wrapperboxes.length; 





// }
// showindex()
// function addindex(){
//   let changevalue=document.querySelector('.changevalue')
//   value=1
//   // shows number of boxes
// changevalue.innerHTML=value;
// }







// button js start fade border color finished
// slider dom methods start
const dataforwrapper = [
  {
    img: "	https://images-eu.ssl-images-amazon.com/images/I/51tN59hltLL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
   starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
     deliveryfront:"Get it by",
     delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
  {
    img: "	https://images-eu.ssl-images-amazon.com/images/I/71hs7OkrR4L._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
    delivery: "Friday, September ",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
  {
   img: "https://images-eu.ssl-images-amazon.com/images/I/715L3WOq4JL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
   number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
   delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  }
  ,
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/71LBY5HSQfL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
    delivery: "Friday, September ",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
  {
   img: "https://images-eu.ssl-images-amazon.com/images/I/61Y8U5yE36L._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
     delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  }
  ,
  {
    img: "	https://images-eu.ssl-images-amazon.com/images/I/71+18JpxhOL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
    delivery: "Friday, September ",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
  {
   img:  "https://images-eu.ssl-images-amazon.com/images/I/51ojljAHTnL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64%Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
       deliveryfront:"Get it by",
    delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },{
    img: "	https://images-eu.ssl-images-amazon.com/images/I/51tN59hltLL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
   starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
     deliveryfront:"Get it by",
     delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
  {
    img: "	https://images-eu.ssl-images-amazon.com/images/I/71hs7OkrR4L._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
    delivery: "Friday, September ",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
  {
   img: "https://images-eu.ssl-images-amazon.com/images/I/715L3WOq4JL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
   number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
   delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  }
  ,
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/71LBY5HSQfL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
    delivery: "Friday, September ",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
  {
   img: "https://images-eu.ssl-images-amazon.com/images/I/61Y8U5yE36L._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
     delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  }
  ,
  {
    img: "	https://images-eu.ssl-images-amazon.com/images/I/71+18JpxhOL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
    delivery: "Friday, September ",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
  
  {
    img: "	https://images-eu.ssl-images-amazon.com/images/I/71hs7OkrR4L._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
    delivery: "Friday, September ",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
  {
   img: "https://images-eu.ssl-images-amazon.com/images/I/715L3WOq4JL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
   number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
   delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  }
  ,
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/71LBY5HSQfL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
    delivery: "Friday, September ",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
  {
   img: "https://images-eu.ssl-images-amazon.com/images/I/61Y8U5yE36L._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
     delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  }
  ,
  {
    img: "	https://images-eu.ssl-images-amazon.com/images/I/71+18JpxhOL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
    delivery: "Friday, September ",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
  {
   img:  "https://images-eu.ssl-images-amazon.com/images/I/51ojljAHTnL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64%Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
       deliveryfront:"Get it by",
    delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },{
    img: "	https://images-eu.ssl-images-amazon.com/images/I/51tN59hltLL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
   starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
     deliveryfront:"Get it by",
     delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
  {
    img: "	https://images-eu.ssl-images-amazon.com/images/I/71hs7OkrR4L._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
    delivery: "Friday, September ",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
  {
   img: "https://images-eu.ssl-images-amazon.com/images/I/715L3WOq4JL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
   number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
   delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  }
  ,
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/71LBY5HSQfL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
    delivery: "Friday, September ",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
  {
   img:  "https://images-eu.ssl-images-amazon.com/images/I/51ojljAHTnL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64%Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
       deliveryfront:"Get it by",
    delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },{
    img: "	https://images-eu.ssl-images-amazon.com/images/I/51tN59hltLL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
   starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
     deliveryfront:"Get it by",
     delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
  {
   img: "https://images-eu.ssl-images-amazon.com/images/I/61Y8U5yE36L._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
     delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  }
  ,
  {
    img: "	https://images-eu.ssl-images-amazon.com/images/I/71+18JpxhOL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
    delivery: "Friday, September ",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
  {
   img:  "https://images-eu.ssl-images-amazon.com/images/I/51ojljAHTnL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64%Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
       deliveryfront:"Get it by",
    delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },{
    img: "	https://images-eu.ssl-images-amazon.com/images/I/51tN59hltLL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
   starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
     deliveryfront:"Get it by",
     delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
  {
    img: "	https://images-eu.ssl-images-amazon.com/images/I/71hs7OkrR4L._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
    delivery: "Friday, September ",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
  {
   img: "https://images-eu.ssl-images-amazon.com/images/I/61Y8U5yE36L._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
     delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  }
  ,
  {
    img: "	https://images-eu.ssl-images-amazon.com/images/I/71+18JpxhOL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
    delivery: "Friday, September ",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
  {
   img:  "https://images-eu.ssl-images-amazon.com/images/I/51ojljAHTnL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64%Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
       deliveryfront:"Get it by",
    delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },{
    img: "	https://images-eu.ssl-images-amazon.com/images/I/51tN59hltLL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
   starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
     deliveryfront:"Get it by",
     delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
  {
    img: "	https://images-eu.ssl-images-amazon.com/images/I/71hs7OkrR4L._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
    delivery: "Friday, September ",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
  {
   img: "https://images-eu.ssl-images-amazon.com/images/I/715L3WOq4JL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
   number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
   delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  }
  ,
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/71LBY5HSQfL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
    delivery: "Friday, September ",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
  {
   img: "https://images-eu.ssl-images-amazon.com/images/I/61Y8U5yE36L._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
     delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
  {
   img: "https://images-eu.ssl-images-amazon.com/images/I/715L3WOq4JL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
   number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
   delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  }
  ,
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/71LBY5HSQfL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
    delivery: "Friday, September ",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  }
  ,
  {
    img: "	https://images-eu.ssl-images-amazon.com/images/I/71+18JpxhOL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
    delivery: "Friday, September ",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
  {
   img:  "https://images-eu.ssl-images-amazon.com/images/I/51ojljAHTnL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64%Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
       deliveryfront:"Get it by",
    delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
   {
    img: "https://images-eu.ssl-images-amazon.com/images/I/71LBY5HSQfL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
    delivery: "Friday, September ",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  }
  ,
  {
    img: "	https://images-eu.ssl-images-amazon.com/images/I/71+18JpxhOL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
    delivery: "Friday, September ",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
  {
   img:  "https://images-eu.ssl-images-amazon.com/images/I/51ojljAHTnL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64%Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
       deliveryfront:"Get it by",
    delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  }
,{
   img: "https://images-eu.ssl-images-amazon.com/images/I/61Y8U5yE36L._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
     delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
  {
   img: "https://images-eu.ssl-images-amazon.com/images/I/715L3WOq4JL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
   number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
   delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  },
  {
   img: "https://images-eu.ssl-images-amazon.com/images/I/715L3WOq4JL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
   number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
   delivery: " Friday, September this very usefull product please get this...",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  }
  ,
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/71LBY5HSQfL._AC_UL165_SR165,165_.jpg",
    title: "iBELL 20 YO Induction Cooktop 2000W with Full Touch Control, Auto Shut Off and over Heat ...", 
    starimg:"imajes/Screenshot 2025-08-26 135945 star.png",
    number: "1,234",
    btn: "64% Off",
    indian:"great indian Festivel",
    rubee:"₹",
    price: "1,599.00",
    mrp: "M.R.P:",
     mrpRate:"₹4,999.00",
      deliveryfront:"Get it by",
    delivery: "Friday, September ",
    number2:" 26",
    offerText: "FREE Delivery by Amazon"
  }
  ];




const allwrapperboxes=document.querySelectorAll('.common1');
console.log(allwrapperboxes.length)


dataforwrapper.forEach((item,index) => {
    const card=document.createElement('div');
    card.classList.add('card');
    
    const card1=document.createElement('div');
    card1.classList.add('card1')
     const card2=document.createElement('div');
    card2.classList.add('card2')
     const card3=document.createElement('div');
    card3.classList.add('card3')
    const card4=document.createElement('div');
    card4.classList.add('card4')
    const card5=document.createElement('div');
    card5.classList.add('card5')
    const imgwrapper=document.createElement('img');
    imgwrapper.src=item.img
    imgwrapper.src = item.img;
    imgwrapper.classList.add('cardimd');
    const wrapper_a=document.createElement('a');
    wrapper_a.textContent =item.title;
    wrapper_a.classList.add('cardatag')
    const wrapper_btn=document.createElement('button');
    wrapper_btn.classList.add('card3btn');
    wrapper_btn.textContent=item.btn;
    const wrapper_span=document.createElement('span');
    wrapper_span.textContent=item.indian;
    const starimg=document.createElement('img');
    starimg.src=item.starimg;
    starimg.classList.add('starimg');
    const starp=document.createElement('span');
    starp.classList.add('starspan');
    starp.textContent=item.number;
    const card5pset1=document.createElement('span');
    card5pset1.classList.add('card5pset1span')
    const card5psetp1=document.createElement('p')
    card5psetp1.textContent=item.rubee;
    card5psetp1.classList.add('card5pset1p1')
    const card5psetp2=document.createElement('p');
  card5psetp2.textContent=item.price;
  card5psetp2.classList.add('card5pset1p2')

   const card5pset2=document.createElement('span');
    card5pset2.classList.add('card5pset2span')
    const card5psetp3=document.createElement('p')
    card5psetp3.textContent=item.mrp;
    card5psetp3.classList.add('card5pset2p3')
    const card5psetp4=document.createElement('p')
  card5psetp4.textContent=item.mrpRate;
  card5psetp4.classList.add('card5pset2p4')


    const card5pset3=document.createElement('span');
    card5pset3.classList.add('card5pset3span')
    const card5psetp5=document.createElement('p')
    card5psetp5.textContent=item.deliveryfront;
    card5psetp5.classList.add('card5pset3p5')
    const card5psetp6=document.createElement('p')
  card5psetp6.textContent=item.delivery;
  card5psetp6.classList.add('card5pset3p6')
  const number2=document.createElement('p');
  number2.classList.add('card5number2')
  number2.textContent=item.number2;
  const number3=document.createElement('p');
  number3.classList.add('paralastcard5')
  number3.textContent=item.offerText;
 
  




    


     
     
    
     card.appendChild(card1)
     card1.appendChild(imgwrapper)
     card.appendChild(card2)
      card2.appendChild(wrapper_a)
       card.appendChild(card4)
       card4.appendChild(starimg)
       card4.appendChild(starp)
        card.appendChild(card3)
        card3.appendChild(wrapper_btn)
        card3.appendChild( wrapper_span)
        card.appendChild(card5)
        card5.appendChild(card5pset1)
        card5pset1.appendChild(card5psetp1)
        card5pset1.appendChild(card5psetp2)
        card5.appendChild(card5pset2)
        card5pset2.appendChild(card5psetp3)
        card5pset2.appendChild(card5psetp4)
        card5.appendChild(card5pset3)
        card5pset3.appendChild(card5psetp5)
        card5pset3.appendChild(card5psetp6)
        card5.appendChild( number2);
        card5.appendChild( number3);
      
        
    allwrapperboxes[index].appendChild(card)
});




// slider dom methods end

