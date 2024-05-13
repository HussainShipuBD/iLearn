const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0,
    yValue = 0;


function update(cursonPosition){
    parallax_el.forEach((el)=>{
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;

        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = (cursonPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) 
        translateY(calc(-50% + ${-yValue * speedy}px)) 
        perspective(2300px) translateZ(${zValue * speedz}px)`;
    });
}

update(0)

window.addEventListener("mousemove", (e)=>{
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY -window.innerHeight / 2;
    
    update(e.clientX);
})


// Gsap
let timeline = gsap.timeline();
let timelineMenu = gsap.timeline();

// gsap.from("h1",{
//     opacity:0,
//     duration:1,
//     y:30,
//     delay:1,
//     stagger:.5,
//     repeat:-1, //1 means 2 times 
//     yoyo:true, //means back animation

//     scrub:2, //effect will heppen when scrooled
//     pin:true, // compnent stop
// })

gsap.from("._bg_img_one",{
    scale:2,
    duration:2,
})
gsap.from("._bg_img_scr",{
    scale:2.5,
    duration:2,
    opacity:0,
})
gsap.from("._3banner_title",{
    opacity:0,
    duration:2,
    x:500,
})

gsap.from("._3banner_text",{
    opacity:0,
    duration:2,
    x:500,
    delay:.5,
})

gsap.from("._3banner_button",{
    opacity:0,
    duration:2,
    x:500,
    delay:1,
})

timeline.from("._bg_img_man",{
    opacity:0,
    duration:1.5,
    scale:2,
})
timeline.from("._bg_img_man_sha",{
    opacity:0,
    duration:1,
    scale:0,
})

timelineMenu.from("._1navbar_logo",{
    opacity:0,
    y:-200,
    duration:.5,
})
timelineMenu.from("._1navbar_list li:nth-child(1)",{
    opacity:0,
    y:-150,
    duration:.5,
})
timelineMenu.from("._1navbar_list li:nth-child(2)",{
    opacity:0,
    y:-150,
    duration:.5,
})
timelineMenu.from("._1navbar_list li:nth-child(3)",{
    opacity:0,
    y:-150,
    duration:.5,
})
timelineMenu.from("._1navbar_list li:nth-child(4)",{
    opacity:0,
    y:-150,
    duration:.3,
})
timelineMenu.from("._1navbar_button",{
    opacity:0,
    y:-150,
    duration:.5,
})