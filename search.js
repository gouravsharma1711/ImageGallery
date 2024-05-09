
let searchButton=document.getElementById("search");
searchButton.addEventListener('click',()=>{
    let EnteredTextInSearchBar=document.getElementById("seacrhTextBar");
    let Isnot=document.querySelectorAll(".All");
    

        let SearchedElement=document.querySelector(`#${EnteredTextInSearchBar.value}`);
    
        if(SearchedElement==null){
            alert("Not Found");
        }
        else{
            Isnot.forEach((element)=>{
                element.style.display="none";
            })
            SearchedElement.style.display="flex";
        }

        EnteredTextInSearchBar.value="";
    
})
    