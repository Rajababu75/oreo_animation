// let menu = document.querySelector('#menu');
let menu_nav = document.querySelector("#nav_bar")

menu.addEventListener("click",()=>{
    if(menu_nav.style.display == "block"){
        menu_nav.style.display = "none"
    }else{
        menu_nav.style.display = "block"
    }
})

gsap.set("#group",{
    top:"110vh",
})

gsap.to("#group",{
    scrollTrigger:{
        trigger:"#two",
        start:"top 100%",
        markers:true,
        end:"top 40%",
        scrub:3

    },
    top:"-30%",
    rotate:"-170deg",
    duration:2,
    ease:Power0.easeInOut
})


    gsap.to("#a",{
        scrollTrigger:{
            trigger:"#two",
            start:"top 100%",
            // markers:true,
            end:"40% 10%",
            scrub:2
    
        },
        // top:"-30%",
        rotate:"720deg",
        duration:2,
        ease:Circ.easeInOut
    })

    gsap.to("#b",{
        scrollTrigger:{
            trigger:"#two",
            start:"top 100%",
            // markers:true,
            end:"40% 10%",
            scrub:2
    
        },
        // top:"-30%",
        rotate:"-620deg",
        duration:2,
        ease:Circ.easeInOut
    })
    gsap.to("#c",{
        scrollTrigger:{
            trigger:"#two",
            start:"top 100%",
            // markers:true,
            end:"40% 10%",
            scrub:2
    
        },
        // top:"-30%",
        rotate:"420deg",
        duration:2,
        ease:Circ.easeInOut
    })

    gsap.to("#innercircle",{
        scrollTrigger:{
            trigger:"#two",
            start:"top 70%",
            // markers:true,
            end:"10% 10%",
            scrub:2
    
        },
        // top:"-30%",
        scale:"2",
        color:"white",
        rotate:"360deg",
        duration:2,
        ease:Circ.easeInOut
    })

    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:"#three",
            start:"center center",
            markers:true,
            scrub:1,
            pin:true
        },
    });

    tl
    .to("#photu",{
        rotate:"720deg",
        top:"50%",
        ease:Circ.easeInOut
    })
    .to("#photus",{
        left:"70%",
        ease:Circ.easeInOut
    })
    .to(".abcd",{
        left:"-100%",
        ease:Circ.easeInOut
    })
    var t12= gsap.timeline({
        scrollTrigger:{
            trigger:"#four",
            start:"center center",
            markers:true,
            scrub:2,
            pin:true
        },
    })
    t12
    .to(".image",{
        opacity:0,
        else:Power3.easeInOut,
        stagger:.2
    },"a")
    .to(".image",{
       
            opacity:0,
            else:Power3.easeInOut,
            stagger:.2
        
    },"a")
    .to(".image",{
        opacity:0,
        else:Power3.easeInOut,
        stagger:.2
    })
    .to("#four h1 span",{
        y:'-10',
        ease:Power1.easeInOut,
        stagger:.2
    },"a")
    .to("#four h1 span",{
        y:'0',
        ease:Power1.easeInOut,
        stagger:.2
    },"a")



