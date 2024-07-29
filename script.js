function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locomotive();

function loadingAnimation() {
  var timer = document.querySelector("#timer h4");
  var grow = 0;
  var int = setInterval(function () {
    if (grow < 100) {
      grow++;
      timer.innerHTML = grow;
    }
  }, 30);

  setTimeout(function () {
    clearInterval(int);
  }, 3600);

  var tl = gsap.timeline();
  tl.from(".load h1,.load h2,.load .lower", {
    y: 120,
    duration: 0.7,
    delay: 0.2,
    stagger: 0.2,
  });
  tl.to(".load", {
    opacity: 0,
    delay: 1.6,
    stagger: -0.2,
  });
  tl.to("#loader", {
    top: "-100%",
    duration: 1,
    ease: "power4.out",
  });
  tl.from(".text h1", {
    y: 200,
    opacity: 0,
    stagger: {
      amount: 0.5,
    },
  });
  tl.from(
    "#nav-bar",
    {
      opacity: 0,
    },
    "-=0.5"
  );
}
loadingAnimation();

function page2Animation() {
  var videoImage = document.querySelector("#video-container img");
  var videoVideo = document.querySelector("#video-container video");
  var videoC = document.querySelector("#video-container");

  videoC.addEventListener("mouseenter", function () {
    gsap.to(".mousefollower", {
      opacity: 0,
    });
  });
  videoC.addEventListener("mouseleave", function () {
    gsap.to(".mousefollower", {
      opacity: 1,
    });

    gsap.to("#play-btn", {
      left: "76%",
      top: "7%",
    });
  });

  videoC.addEventListener("mousemove", function (dets) {
    gsap.to(".play-btn", {
      left: dets.x - 95,
      top: dets.y - 200,
    });
  });

  var flag = 0;

  videoC.addEventListener("click", function () {
    if (flag == 0) {
      gsap.to(videoVideo, {
        opacity: 1,
      });

      gsap.to("#play-btn", {
        scale: 0.8,
      });
      document.querySelector("#play-btn").innerHTML =
        '<i class="ri-pause-line"></i>';
      videoVideo.play();
      flag = 1;
    } else {
      gsap.to(videoVideo, {
        opacity: 0,
      });
      gsap.to("#play-btn", {
        scale: 1,
      });
      document.querySelector("#play-btn").innerHTML =
        '<i class="ri-play-fill"></i>';

      videoVideo.pause();
      flag = 0;
    }
  });
}
page2Animation();

function flagAnimation() {
  var flagH1 = document.querySelector("#flag-part");
  var flagimg = document.querySelector("#flag");

  flagH1.addEventListener("mouseenter", function () {
    gsap.to(flagimg, {
      opacity: 1,
    });
  });
  flagH1.addEventListener("mouseleave", function () {
    gsap.to(flagimg, {
      opacity: 0,
    });
  });
  flagH1.addEventListener("mousemove", function (e) {
    var rect = flagH1.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    flagimg.style.left = x + "px";
    flagimg.style.top = y + "px";
  });
}
flagAnimation();

function page3Animation() {
  var time = gsap.timeline({
    scrollTrigger: {
      trigger: "#page-3",
      scroller: "#main",
      start: "-10% 0%",
      end: "top 10%",
    },
  });
  time.from(
    ".box-container h1",
    {
      y: 140,
      duration: 0.5,
      delay: 0.2,
    },
    "same"
  );
  time.from(
    ".text-part .underline",
    {
      scaleX: 0.1,
      transformOrigin: "100% 20%",
    },
    "same"
  );
  time.to(
    ".text-part .underline",
    {
      scaleX: 1,
      duration: 0.6,
      opacity: 1,
      transformOrigin: "100% 20%",
    },
    "same"
  );
  time.to(
    "#page-3 .before-page",
    {
      opacity: 1,
      duration: 0.8,
      delay: 0.4,
    },
    "same"
  );
}
page3Animation();

function headAnimation() {
  for (let i = 1; i <= 6; i++) {
    let heading = document.querySelector(`.heading${i}`);
    let head1 = document.querySelector(`.head${i}-1`);
    let head2 = document.querySelector(`.head${i}-2`);

    heading.addEventListener("mouseenter", function () {
      gsap.to(head1, {
        y: -120,
        duration: 0.6,
      });
      gsap.to(head2, {
        y: -40,
        duration: 0.8,
      });
    });

    heading.addEventListener("mouseleave", function () {
      gsap.to(head1, {
        y: 0,
        duration: 0.6,
      });
      gsap.to(head2, {
        y: 140,
        duration: 0.8,
      });
    });
  }
}
headAnimation();

function page4Animation() {
  var time2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page-4",
      scroller: "#main",
      start: "-10% 0%",
      end: "top 10%",
    },
  });
  time2.from(
    ".box-container2 h1",
    {
      y: 140,
      duration: 0.5,
      delay: 0.2,
    },
    "same2"
  );
  time2.from(
    ".text-part2 .line",
    {
      scaleX: 0.1,
      transformOrigin: "100% 20%",
    },
    "same2"
  );
  time2.to(
    ".text-part2 .line",
    {
      scaleX: 1,
      duration: 0.6,
      opacity: 1,
      transformOrigin: "100% 20%",
    },
    "same2"
  );
  time2.to(
    "#page-4 .before-page2",
    {
      opacity: 1,
      duration: 0.8,
      delay: 0.4,
    },
    "same2"
  );
}
page4Animation();

function page5Animation() {
  var time3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page-5",
      scroller: "#main",
      start: "-20% 0%",
      end: "top 10%",
    },
  });
  time3.to(
    "#start h2",
    {
      opacity: 1,
    },
    "same3"
  );
  time3.from(
    "#start #single-line",
    {
      scaleX: 0.1,
      transformOrigin: "100% 20%",
    },
    "same3"
  );
  time3.to(
    "#start #single-line",
    {
      scaleX: 1,
      duration: 0.6,
      opacity: 1,
      transformOrigin: "100% 20%",
    },
    "same3"
  );
}
page5Animation();
function scrollAnimation() {
  gsap.to(".page5-mark", {
    x: -1000,
    scrollTrigger: {
      trigger: "#page-5",
      scroller: "#main",
      start: "top 150%",
      end: "top -50%",
      scrub: 2,
    },
  });

  gsap.from(".page5-marking", {
    x: -1000,
    scrollTrigger: {
      trigger: "#page-5",
      scroller: "#main",
      start: "top 150%",
      end: "top -50%",
      scrub: 2,
    },
  });
}
scrollAnimation();

function createAnim() {
  var footText = document.querySelectorAll("#footer .text");

  footText.forEach(function (elem) {
    var elemText = elem.textContent;
    var splited = elemText.split("");
    var clutter = "";
    splited.forEach(function (e) {
      clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
  });

  var footerText = document.querySelector(".box-container4");

  footerText.addEventListener("mouseenter", function () {
    gsap.to("#footer h1 span", {
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
    });
    gsap.to("#footer h2 span", {
      opacity: 1,
      delay: 0.4,
      duration: 0.5,
      stagger: 0.1,
    });
    gsap.to(".box-container4 svg", {
      left: "80%",
      delay: 0.8,
    });
  });

  footerText.addEventListener("mouseleave", function () {
    gsap.to("#footer h2 span", {
      opacity: 0,
      stagger: 0.05,
      duration: 0.3,
    });
    gsap.to("#footer h1 span", {
      opacity: 1,
      delay: 0.4,
      duration: 0.3,
      stagger: 0.05,
    });
    gsap.to(".box-container4 svg", {
      left: "75%",
      delay: 0.8,
    });
  });
}
createAnim();
function footer() {
  for (let i = 1; i <= 6; i++) {
    let up = document.querySelector(`.up-anim-${i}`);
    let header1 = document.querySelector(`.header${i}-1`);
    let header2 = document.querySelector(`.header${i}-2`);

    up.addEventListener("mouseenter", function () {
      gsap.to(header1, {
        y: -100,
        duration: 0.6,
      });
      gsap.to(header2, {
        y: -25,
        duration: 0.8,
      });
    });

    up.addEventListener("mouseleave", function () {
      gsap.to(header1, {
        y: 0,
        duration: 0.6,
      });
      gsap.to(header2, {
        y: 100,
        duration: 0.8,
      });
    });
  }
  var up1 = document.querySelector(".up-anim-6");
  let header3 = document.querySelector(".header3");
  let header4 = document.querySelector(".header4");

  up1.addEventListener("mouseenter", function () {
    gsap.to(header3, {
      y: -100,
      duration: 0.6,
    });
    gsap.to(header4, {
      y: -25,
      duration: 0.8,
    });
  });

  up1.addEventListener("mouseleave", function () {
    gsap.to(header3, {
      y: 0,
      duration: 0.6,
    });
    gsap.to(header4, {
      y: 100,
      duration: 0.8,
    });
  });
}
footer();
function sheryAnimation() {
  Shery.mouseFollower();

  Shery.makeMagnet("#nav-bar h4");
}
sheryAnimation();

Shery.imageEffect(".images", {
  style: 6,
  gooey: true,
  config: {
    noiseDetail: { value: 6.11, range: [0, 100] },
    distortionAmount: { value: 2.9, range: [0, 10] },
    scale: { value: 59.54, range: [0, 100] },
    speed: { value: 0.58, range: [0, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.8333333134651184 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.27, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 0 },
    noise_speed: { value: 0.84, range: [0, 10] },
    metaball: { value: 0.44, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.38, range: [0, 2] },
    noise_scale: { value: 8.4, range: [0, 100] },
  },
});
