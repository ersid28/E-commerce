const productImages= document.querySelectorAll(".product-images img");
const productImageSlide=document.querySelectorAll(".image-slider");

let activeImageSlide=0;

productImages.forEach((item,i)=>{
    item.addEventListener('click',()=>{
        productImages[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        productImageSlide.style.backgroundImage = `url('${item.src}')`;
        activeImageSlide = i;
    })
})

//  toogle size button

const sizeBtns= document.querySelectorAll('.size-radio-btn');
let checkBtn=0;

sizeBtns.forEach((item,i)=>{
    item.addEventListener('click',()=>{
        sizeBtns[checkBtn].classList.remove('check');
        item.classList.add('check');
        checkBtn=i
    })
})