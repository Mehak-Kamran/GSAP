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
        scroller:"body",
       
        // start: "top 60%",
        // end:"top 10%",
        scrub:2
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
        scroller:"body",
        
        // start: "top 60%",
        // end:"top 10%",
        scrub:5
     }
    
    
})

gsap.to("#page4 h1",{
    transform:"translateX(-170%)",
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        start:" top 0%",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})