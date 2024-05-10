
let button=document.getElementById("toggleButton");
let DarkMode=button.children[0];
let addImageButtonDarkAndLight=document.getElementById("AdddImgButton");
let addFolderBlockDarkAndLight=document.getElementById("AdddFolderButton");
let AllInputs=document.querySelectorAll("input");
let searchbarOuterDiv=document.querySelector("#searchBar");


button.addEventListener('click',()=>{
    let listItemDarkAndLight=document.querySelectorAll(".listItem");
    let AllFoldersDarkAndLight=document.querySelectorAll(".folder");
    console.log(AllFoldersDarkAndLight);
    if(button.classList.contains("modeToggleButton2")===true){
        button.children[1].style.display="inline";
        button.children[2].style.display="none";
        AllInputs.forEach((element)=>{
            element.style.backgroundColor="white";
            element.style.color="black";
        })

        listItemDarkAndLight.forEach((element)=>{
            element.style.backgroundColor="white";
        })
        AllFoldersDarkAndLight.forEach((element)=>{
            element.style.backgroundColor="white";
            element.style.color="black";
        })
        searchbarOuterDiv.style.backgroundColor="white";

    }
    else{
        button.children[1].style.display="none";
        button.children[2].style.display="inline";
        AllInputs.forEach((element)=>{
            element.style.backgroundColor="black";
            element.style.color="white";
        })

        listItemDarkAndLight.forEach((element)=>{
            element.style.backgroundColor="black";
        })

        AllFoldersDarkAndLight.forEach((element)=>{
            element.style.backgroundColor="black";
            element.style.color="white";
        })
        searchbarOuterDiv.style.backgroundColor="black";
    }
    button.classList.toggle("modeToggleButton2");
    DarkMode.classList.toggle("lightMode");
    addImageButtonDarkAndLight.classList.toggle("newaddImageButtonBlock")
    document.querySelector("body").classList.toggle("darkModeBodyColor");
    addFolderBlockDarkAndLight.classList.toggle("newaddFolderButtonBlock");
    
})