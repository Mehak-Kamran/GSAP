var i_path= "M 10 100 Q 500 100 990 100"
var f_path="M 10 100 Q 500 100 990 100"

var string=document.querySelector("#string")
string.addEventListener("mousemove",(dets)=>{
    path=`M 10 100 Q ${dets.x} ${dets.y} 990 100`
    gsap.to("svg path",{
        attr:{
            d:path,
            
        },
        duration:0.5,
        ease: "power3.out",
    })
    })

var string=document.querySelector("#string")
string.addEventListener("mouseleave",()=>{
   gsap.to("svg path",{
    attr:{d:f_path},
    duration:0.8,
    ease: "elastic.out(1,0.2)",
   })
})