let mid_block = document.getElementById("midBlock");
let el = document.getElementById("LightBox");

mid_block.addEventListener('click', (e) => {
    console.log(e.target.classList);
    if (e.target.classList.contains("listItem") || e.target.classList.contains("contentName") || e.target.classList.contains("listItemImage")) {
        el.classList.add("lightbox2");

        let newimgtag = document.createElement('img');
        newimgtag.classList.add("lightBoXImage");

        if (e.target.classList.contains("listItem")) {
            newimgtag.src = e.target.lastChild.src;
        } else if (e.target.classList.contains("contentName")) {
            newimgtag.src = e.target.parentElement.lastChild.src;
        }else{
            newimgtag.src = e.target.src;
        }

        // Remove any existing images
        let existingImg = el.querySelector('.lightBoXImage');
        if (existingImg) {
            existingImg.remove();
        }

        el.childNodes[1].appendChild(newimgtag);
    }


    


});

let closeButtonLightHourse = el.children[1];
closeButtonLightHourse.addEventListener('click', () => {
    el.classList.remove("lightbox2");
});
