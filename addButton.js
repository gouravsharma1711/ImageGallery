const midBlock=document.querySelector("#midBlock");
const AddButton=document.querySelector("#AddImageButton");
const displayblock=document.getElementById("AdddImgButton");
const cancelButton=document.getElementById("cancelButton");
const adddbutton2=document.getElementById("ADDImageButton");
const mainblock=document.getElementById("midBlock");
AddButton.addEventListener('click',()=>{
    displayblock.style.display="flex";
})


cancelButton.addEventListener("click",()=>{
    displayblock.style.display="none";
})


adddbutton2.addEventListener('click',()=>{
    let FileName=document.getElementById("Name");
    let url=document.getElementById("url");
    let folderName=document.getElementById("FolderName");
    let DeletButton=document.createElement('button');
    
    if(url.value==="" || folderName.value===""){
        alert("either Url or File Name block or folder block is empty. please Enter Valid Values!! ")
    }
    else{
        let newDIv=document.createElement("div");
        if(document.querySelector("body").classList.contains("darkModeBodyColor")){
            newDIv.style.backgroundColor="black"
        }
        newDIv.id=FileName.value;
        newDIv.classList.add("listItem");
        newDIv.classList.add(folderName.value);
        newDIv.classList.add("All");
        
        
        
        DeletButton.classList.add("DeleteButtonClass");
        DeletButton.id="DeleteButtonId";
        
        let head=document.createElement("h4");
        head.classList.add("HiddenText");
        head.innerHTML=`File Name : ${FileName.value} <br> Folder Name : ${folderName.value}`;
        
        let element=document.createElement("div");
        element.classList.add("contentName");
        element.appendChild(head);
        element.appendChild(DeletButton);
        
        let imgblock=document.createElement("img");
        imgblock.classList.add("listItemImage");
        imgblock.src=url.value;
        newDIv.appendChild(element)
        newDIv.appendChild(imgblock);

        mainblock.appendChild(newDIv);

        
    
    }
    url.value="";
    folderName.value="";
    FileName.value=""
    DeletButton.addEventListener('click',(e)=>{
       midBlock.removeChild(e.target.parentElement.parentElement)
    })
    
})


const clickFolderButton=document.getElementById("AddIFolderButton");
const selectedBlock=document.getElementById("AdddFolderButton");
clickFolderButton.addEventListener('click',(e)=>{
    selectedBlock.style.display="flex";
})

const FolderCancelButton=document.getElementById("CancelButton2");
FolderCancelButton.addEventListener("click",()=>{
    selectedBlock.style.display="none";
})

const addFolderButton=document.getElementById("ADDFolderButton");
const mainFolder=document.getElementById("ALLFOLDER");
addFolderButton.addEventListener('click',()=>{
    const folderNameText=document.getElementById("FOLDERNAME");
    if(folderNameText.value===""){
        alert(" please Enter The Name of folder!!")
    }else{
        
    let topContainerDiv=document.createElement('div');
    if(document.querySelector("body").classList.contains("darkModeBodyColor")){
        topContainerDiv.style.backgroundColor="black";
        topContainerDiv.style.color="white";
    }
    topContainerDiv.classList.add("folder");
    topContainerDiv.id=folderNameText.value;
    let heading=document.createElement('h3');
    heading.innerHTML=folderNameText.value;

    
    topContainerDiv.appendChild(heading)
    
    mainFolder.appendChild(topContainerDiv);
    folderNameText.value="";
    }
})

let imageContainerMain=document.getElementById('midBlock');
let mainMenuButton=document.getElementById("mainMenuId");
let menuButtonOne=document.getElementById("menu1");
menuButtonOne.addEventListener('click',()=>{
    mainMenuButton.classList.toggle('active')
    imageContainerMain.classList.toggle('active')
})


