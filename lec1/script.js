var t1=gsap.timeline()



t1.from("#box1",{
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    yoyo:true,
    borderRadius:100,
    backgroundColor:"blue",
    scale:2,
    repeat:-1
})

t1.to("#box2",{
    x:1000,
    repeat:-1,
    yoyo:true,
    duration:2,
    delay:1,
    rotate:360,
    borderRadius:100,
    backgroundColor:"orange",
    scale:0.7,
    
})

t1.to("h1",{
    color:"red",
    opacity:0,
    duration:2,
    delay:1,
    y:200,
    stagger:-1,
    repeat:-1,
    yoyo:true
})

