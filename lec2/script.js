gsap.from("#page1 #box1",{
     scale:0,
     delay:1,
     duration:2,
     rotate:360,
     borderRadius:100,
     
     
})

gsap.from("#page2 #box2",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    
    borderRadius:100,
    scrollTrigger:{
        trigger: "#page2 #box2",
        scroller:"body"
     }

    
})

gsap.from("#page3 #box3",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
   
    borderRadius:100,
    scrollTrigger:{
        trigger: "#page3 #box3",
        scroller:"body"
     }
    
    
})