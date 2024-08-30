let images = document.querySelectorAll('gallery.img');
let popoup = document.querySelector(".popup")
let  popuping = document.querySelector(".popup.img")
for(img of images){
    img.onclick = function(){
        popuping.style.display = "block";
        popuping.src = this.getAttribute('src')
    
    }
}
document.querySelector('.popup span').onclick = function(){
    popuping.style.display = "none";
 
}