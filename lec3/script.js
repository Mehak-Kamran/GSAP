var i_path= "M 60 100 Q 1000 100 1200 100"
var f_path="M 60 100 Q 1000 100 1200 100"

var string=document.querySelector("#string")
string.addEventListener("mousemove",(dets)=>{
    path=`M 60 100 Q 1000 ${dets.y} 1200 100`
    })
})

var string=document.querySelector("#string")
string.addEventListener("mouseleave",(event)=>{
    console.log("bye")

})