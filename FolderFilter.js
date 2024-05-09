let folerBlock=document.getElementById("ALLFOLDER");
let main=document.getElementById("midBlock")
folerBlock.addEventListener('click',(e)=>{
    let str=e.target.innerText;
    if(e.target.id==="ALLFOLDER" || str==="Folders"){
        return;
    }
    let newstr=`.${str}`;
    let files=document.querySelectorAll(newstr);
    let isnot=document.querySelectorAll(".All:not(newstr)");
    isnot.forEach((element)=>{
        element.style.display="none";
    })
    files.forEach((element)=>{
        element.style.display="flex";
    })
})