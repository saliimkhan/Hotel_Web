
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type:"fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var tl=gsap.timeline();
tl.from("#page1 svg",{
    y:-40,
    opacity:0,
    delay:0.3,
    duration:0.7,
})

 .from("#page1 img",{
    scale:.5,
    delay:-0.1,
    duration:1.2,
    ease:Power4.easeout,
    borderRadius:"100px",
 })

 .from("#nav",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.5,
 })

function loco () {
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco();


var h2data = document.querySelectorAll("#page2 h2");
h2data.forEach(function (elem) {
  var textData = elem.textContent;
  var splitedText = textData.split("");
  var clutter = "";
  splitedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;
  });
  elem.innerHTML = clutter;
});

gsap.to("#page2 h2 span", {
  color: "#e3e3c4",
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page2 h2 span",
    // markers:true,
    scroller: "#main",
    start: "top 75%",
    // end: "top -5%",
    scrub: 4,
  },
});
// var clutter="";
// document.querySelector("#page2  h2").textContent.split(" ").forEach(function(dets){
//   clutter += <span>${dets}</span>;
//   document.querySelector("#page2  h2").innerHTML = clutter;
  
// })

// gsap.to("#page2  h2 span",{
//   scrollTrigger:{
//     trigger:"#page2 h2 span",
//     scroller:"#main",
//     // start:"top bottom",
//     // end:"bottom top",
//     // scrub:2,
//     markers:true,
    
//   }
  
// })


gsap.to("#page2 #svg2,#page2 #svg3",{
  left:"-100vw",
  // delay:2,
  duration:2,
  scrollTrigger:{
    trigger:"#page2 #svg2,#page2 #svg3",
    scroller:"#main",
    // markers:true,
    start:"top 99%",
    end:"top 5%",
    scrub:4,

  }
})


gsap.to("#page6 #svg3,#page6 #svg4",{
  left:"-100vw",
  // delay:2,
  duration:1,
  scrollTrigger:{
    trigger:"#page6 #svg3,#page6 #svg4",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top 0%",
    scrub:3,

  }
})

gsap.to("#page6 #svg1,#page6 #svg2",{
  left:"-100vw",
  // delay:2,
  duration:3,
  scrollTrigger:{
    trigger:"#page6 #svg1,#page6 #svg2",
    scroller:"#main",
    // markers:true,
    start:"top 100%",
    end:"top 0%",
    scrub:5,

  }
})


var tl3=gsap.timeline();


tl3.to(".anime1",{
  transform:`translate(0%)`,
  display:`block`,
  // opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:`#page6`,
    scroller:`#main`,
    // markers:true,
    start:`top 43%`,
    end:`top 20%`,
    scrub:2,
  },
})


tl3.to(`#img-d img`,{

  scrollTrigger:{
    trigger:`#page6`,
    scroller:`#main`,
    // markers:true,
    start:`top 4%`,
    end:`top -10%`,
    scrub:2,
  },
  transform:`translate(0%)`,
  ease:`Expo.easeOut`,
  opacity:1,
  
}) 



tl3.to(`#img-f img`,{
  scrollTrigger:{
    trigger:`#page6`,
    scroller:`#main`,
    // markers:true,
    start:`top -10%`,
    end:`top -30%`,
    scrub:2,
  },

  transform:`translate(0%)`,
  ease:`Expo.easeOut`,
  opacity:1,
  
})

tl3.to(`#img-e img`,{
  scrollTrigger:{
    trigger:`#page6`,
    scroller:`#main`,
    // markers:true,
    start:`top -29%`,
    end:`top -35%`,
    scrub:2,
  },
  transform:`translate(0%)`,
  ease:`Expo.easeOut`,
  opacity:1,
})


tl3.to(" .rd1 h1",{
  scrollTrigger:{
    trigger:`#page6`,
    scroller:`#main`,
    // markers:true,
    start:`top -25%`,
    end:`top -40%`,
    scrub:2,
  },
  transform:`translate(0%)`,
  opacity:1,
  duration:1,
})
tl3.to(".rd1 p",{
  scrollTrigger:{
    trigger:`#page6`,
    scroller:`#main`,
    // markers:true,
    start:`top -27%`,
    end:`top -40%`,
    scrub:2,
  },
  transform:`translate(0%)`,
  opacity:1,
  duration:1,
  delay:2.5,  
})

tl3.to("#img-e .rd1",{
  scrollTrigger:{
    trigger:`#page6`,
    scroller:`#main`,
    // markers:true,
    start:`top -50%`,
    end:`top -70%`,
    scrub:2,
  },
  transform:`translate(0%)`,
  opacity:1,
  duration:1,
})





tl3.to("#img-f h1",{
  scrollTrigger:{
    trigger:`#page6`,
    scroller:`#main`,
    // markers:true,
    start:`top -30%`,
    end:`top -40%`,
    scrub:2,
  },
  transform:`translate(0%)`,
  opacity:1,
  // duration:1,
})

tl3.to("#img-f p",{
  scrollTrigger:{
    trigger:`#page6`,
    scroller:`#main`,
    // markers:true,
    start:`top -60%`,
    end:`top -40%`,
    scrub:2,
  },
  transform:`translate(0%)`,
  opacity:1,
  // duration:1,
  // delay:2.5,  
})





var h3data = document.querySelectorAll("#page6 h2");
h3data.forEach(function (elem) {
  var textData = elem.textContent;
  var splitedText = textData.split("");
  var clutter = "";
  splitedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;
  });
  elem.innerHTML = clutter;
});

gsap.to("#page6 h2 span", {
  color: "#e3e3c4",
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page6 h2 span",
    // markers:true,
    scroller: "#main",
    start: "top 65%",
    end: "top 35%",
    scrub: 4,
  },
});



 var h3data = document.querySelectorAll("#page3 h1");
h3data.forEach(function (elem) {
  var textData = elem.textContent;
  var splitedText = textData.split("");
  var clutter = "";
  splitedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;
  });
  elem.innerHTML = clutter;
});

gsap.to("#page3 h1 span", {
  color: "#5B6647",
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page3 h1 span",
    // markers:true,
    scroller: "#main",
    start: "top 87%",
    end: "top -2%",
    scrub: 4,
  },
});



var tl4=gsap.timeline({
  scrollTrigger:{
    trigger:`#page3`,
    scroller:`#main`,
    // markers:true,
    start:`top 40%`,
    end:`top -10%`,
    scrub:2,
  },
});

tl4.to(`.l1 h5`,{
  transform:`translate(0%)`,
  opacity:1,
},`a`)
tl4.to(`.l1 button`,{
  transform:`translate(0%)`,
  opacity:1,
},`a`)

tl4.to(`.left .l2`,{
  transform:`translate(0%)`,
  ease:`Expo.easeOut`,
  opacity:1,
})

tl4.to(`.right .r1`,{
  transform:`translate(0%)`,
  ease:`Expo.easeOut`,
  opacity:1,
},`a`)


tl4.to(`.right .r2`,{
  transform:`translate(0%)`,
  ease:`Expo.easeOut`,
  opacity:1,
})



var h7data = document.querySelectorAll("#page7 h1");
h7data.forEach(function (elem) {
  var textData = elem.textContent;
  var splitedText = textData.split("");
  var clutter = "";
  splitedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;
  });
  elem.innerHTML = clutter;
});

gsap.to("#page7 h1 span", {
  color: "#434B34",
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page7 h1 span",
    // markers:true,
    scroller: "#main",
    start: "top 85%",
    end: "top 6%",
    scrub: 4,
  },
});

var tl5 = gsap.timeline({
  scrollTrigger:{
    trigger:`#page8`,
    scroller:`#main`,
    // markers:true,
    start:`top 50%`,
    end:`top 5%`,
    scrub:2,

  },
});

tl5.from(`#page8 .left`,{
  transform:`translate(30%)`,
  duration:1
  
},`a`)

tl5.from(`#page8 .right`,{
  transform:`translate(-30%)`,
  duration:1
  
},`a`)

tl5.from(`#page8 .center`,{
  transform:`translateY(15%)`,
  opacity:0,
  duration:1,
  delay:.3

},`a`)



gsap.to(`#page4 .elem`,{
  transform:`translate(0%)`,
  opacity:1,
  duration:1,
  stagger:1,
  scrollTrigger:{
    trigger:`#page4`,
    scroller:`#main`,
    // markers:true,
    start:`top 80%`,
    end:`top -40%`,
    scrub:2
  }
})


var tl6=gsap.timeline({
  // stagger:2,
  scrollTrigger:{
    trigger:`#page10`,
    scroller:`#main`,
    // markers:true,
    start:`top 45%`,
    end:`top -65%`,
    scrub:2,

  },
});


tl6.to(`.text10 h1`,{
transform:`translate(0%)`,
opacity:1,
duration:1

})
tl6.to(`.text10 p`,{
  transform:`translate(0%)`,
  opacity:1,
  duration:1
  // stagger:1,
  })

  tl6.to(`.t-img10 .left`,{
    transform:`translate(0%)`,
    opacity:1,
    duration:1
    // stagger:1,
    })

    tl6.to(`.t-img10 .right h1`,{
      transform:`translate(0%)`,
      opacity:1,
      duration:1
      // stagger:1,
      })

      tl6.to(`.t-img10 .right p`,{
        transform:`translate(0%)`,
        opacity:1,
        duration:1
        // stagger:1,
        })

        var tl7=gsap.timeline({
          // stagger:2,
          scrollTrigger:{
            trigger:`#page10`,
            scroller:`#main`,
            // markers:true,
            start:`top -80%`,
            end:`top -120%`,
            scrub:2,
        
          },
        });

        tl7.to(`.t-img101 .right h1`,{
          transform:`translate(0%)`,
          opacity:1,
          duration:1
          // stagger:1,
          })

          tl7.to(`.t-img101 .right p`,{
            transform:`translate(0%)`,
            opacity:1,
            duration:1
            // stagger:1,
            })

            tl7.to(`.t-img101 .left`,{
              transform:`translate(0%)`,
              opacity:1,
              duration:1
              // stagger:1,
              })

              gsap.to(`#page11 .p-11`,{
                scrollTrigger:{
                  trigger:`#page11`,
                  scroller:`#main`,
                  // markers:true,
                  start:`top 60%`,
                  end:`top -60%`,
                  scrub:2,
                },

                transform:`translate(0%)`,
              opacity:1,
              duration:1
              })


              gsap.to("#page13 #svg3,#page13 #svg4",{
                left:"-100vw",
                // delay:2,
                duration:1,
                scrollTrigger:{
                  trigger:"#page13 #svg3,#page13 #svg4",
                  scroller:"#main",
                  // markers:true,
                  start:"top 90%",
                  end:"top 0%",
                  scrub:3,
              
                }
              })


              

             gsap.to(`#page13 p`,{

                scrollTrigger:{
                  trigger:"#page13",
                  scroller:"#main",
                  // markers:true,
                  start:"top 35%",
                  end:"top -50%",
                  scrub:3,
              
                },
                transform:`translate(0%)`,
                opacity:1,
                duration:1,
              })
 
              tl13 = gsap.timeline({
                scrollTrigger:{
                  trigger:"#page13",
                  scroller:"#main",
                  // markers:true,
                  start:"top 15%",
                  end:"top -50%",
                  scrub:3,
              
                }
              });
              tl13.to(`.div-img2`,{
                transform:`translate(0%)`,
                opacity:1,
                duration:1,
              },`a`)

              tl13.to(`.div-img3`,{
                transform:`translate(0%)`,
                opacity:1,
                duration:1,
              },`a`)

              tl13.to(`.div-img1`,{
                transform:`translateY(82%)`,
                opacity:1,
                // delay:1
                duration:1,
              })


var h13data = document.querySelectorAll("#page13 h1");
h13data.forEach(function (elem) {
  var textData = elem.textContent;
  var splitedText = textData.split("");
  var clutter = "";
  splitedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;
  });
  elem.innerHTML = clutter;
});

gsap.to("#page13 h1 span", {
  color: "#E3E3C4",
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page13 h1 span",
    // markers:true,
    scroller: "#main",
    start: "top 90%",
    end: "top 6%",
    scrub: 4,
  },
});


              




