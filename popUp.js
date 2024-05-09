let TextArray=[
    "Welcome to our Image Gallery feature tour! Explore our collection with ease as we guide you through its functionalities. Discover how to navigate, view, and interact with images effortlessly. Let's embark on this visual journey together!",
    "Enhance your viewing experience with a sleek, eye-friendly interface. Toggle effortlessly between light and dark themes to suit your preference and environment. Whether browsing in low light or simply seeking a stylish change, Dark Mode provides comfort and versatility in your image gallery exploration.",
    "Organize your image gallery seamlessly by creating custom folders. Simply select images and designate them to specific folders for easy access and management. Stay organized and personalize your browsing experience with this convenient and efficient tool.",
    "Easily expand your gallery with this intuitive feature. Upload images from your device or select from existing ones to enrich your collection. Effortlessly customize your gallery with new additions, enhancing its depth and diversity to suit your preferences and needs.",
    "Experience seamless navigation with our 'Preview Image' feature. Effortlessly preview images with the ability to navigate through them using convenient 'Next' and 'Previous' buttons. Explore your gallery with ease, allowing for a fluid and immersive viewing experience tailored to your preferences."
]
let heading=[
    "Welcome to Image Gallery","Dark Mode","Add Folder","Add Image","Preview Image"
]
let imagess=[
    "intro.mp4","darkMode.mp4","addFolder.mp4","addImg.mp4","lightHouse.mp4"
]
let textArea=document.getElementById("Desc");
let headingArea=document.getElementById("headingImageTour");
let topBlock=document.getElementById("TopContainer")
let next=document.getElementById("b1");
let urlImage=document.getElementById("popUpImage");
next.addEventListener("click",()=>{

    let idx=-1;
    for(i=0;i<heading.length;i++){
        
        if(heading[i]===headingArea.innerText){
            idx=i;
        }

    }idx++;
    if(idx!=heading.length){
        headingArea.innerText=heading[idx];
        textArea.innerText=TextArray[idx];
        urlImage.src=imagess[idx]
    }
   
    
})
let prev=document.getElementById("b2");
prev.addEventListener("click",()=>{

    let idx=-1;
    for(i=0;i<heading.length;i++){
        
        if(heading[i]===headingArea.innerText){
            idx=i;
        }

    }idx--;
    if(idx!=-1){
        headingArea.innerText=heading[idx];
        textArea.innerText=TextArray[idx];
        urlImage.src=imagess[idx]
    }
   
    
})

let popUpcloseButton=document.getElementById("popUp");
let TopMostELement=document.getElementById("featureTour");
popUpcloseButton.addEventListener('click',()=>{
    TopMostELement.style.display="none";
})

setTimeout(()=>{
    TopMostELement.style.display="flex";
},1500)