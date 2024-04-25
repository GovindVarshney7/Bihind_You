let lt=gsap.timeline();
let arr1=["Project Management","SEO & SEA","Consulting"]
let arr2=["Software Development","Web Development","Ecommerce","App development",]
let arr3=["Web Design","UI/UX design","Corprate Design & branding","Print media",""]


lt
    .from("#p1ArrowA",{
        scale:0,
        ease: "slow(0.7, 0.7, false)",
        y:-80,        
        repeat:-1,
        // yoyo:true,
        duration:3
    })
    .from("#p1ArrowB",{
        delay:-1,
        scale:0,
        ease: "slow(0.7, 0.7, false)",
        y:-80,        
        repeat:-1,
        // yoyo:true,
        duration:3
    })
    .from("#p1ArrowC",{
        delay:-1,
        scale:0,
        ease: "slow(0.7, 0.7, false)",
        y:-80,        
        repeat:-1,
        // yoyo:true,
        duration:3
    })
    


    

    for(let i= 0; i < arr1.length ; i++){
        var div = document.createElement("div");
        div.setAttribute('class', 'p2SmallD');
        div.innerHTML = arr1[i];
        document.getElementById("p2DA").appendChild(div);
    }
    for(let i= 0; i < arr2.length ; i++){
        var div = document.createElement("div");
        div.setAttribute('class', 'p2SmallD');
        div.innerHTML = arr2[i];
        document.getElementById("p2DB").appendChild(div);
    }
    for(let i= 0; i < arr3.length ; i++){
        var div = document.createElement("div");
        div.setAttribute('class', 'p2SmallD');
        div.innerHTML = arr3[i];
        document.getElementById("p2DC").appendChild(div);
    }