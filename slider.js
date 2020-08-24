'use strict';
document.head.insertAdjacentHTML("afterbegin",'<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />');

let slider=document.querySelector('.slider');

//Создаем иконку загрузки
let loadIcon =document.createElement('i');
loadIcon.classList.add('fas','fa-spinner','fa-spin');
slider.insertAdjacentElement("afterbegin",loadIcon);

//Создаем левую стрелку
let leftArrow = document.createElement('i');
leftArrow.classList.add('fas','fa-chevron-circle-left','slider-leftArrow');
slider.insertAdjacentElement("beforeend",leftArrow);

//Создаем правую стрелку
let rightArrow = document.createElement('i');
rightArrow.classList.add('fas','fa-chevron-circle-right','slider-rightArrow');
slider.insertAdjacentElement("beforeend",rightArrow);

window.addEventListener('load',function(){
     loadIcon.style.display="none";
     images.init();

     leftArrow.addEventListener('click',function(){
       images.setNextLeftImage();
     });

     rightArrow.addEventListener('click',function(){
       images.setNextRightImage();
     });

     
});



let images ={
    /*{int} Номер текущего изображения */
    currentIdx:0,
    /*{HTMLDivElement[]} slides элементы слайдов */
    slides: [],

    /*Получаем все слайды и показываем первый слайд. */
    init(){
        this.slides = document.querySelectorAll('.slider-item');
        this.showImageWithCurrentIdx();
    }, 

    /*Берем слайд с текущим индексом и убираем у него класс
     hidden-slide
    */

    showImageWithCurrentIdx(){
        this.slides[this.currentIdx].classList.remove('hidden-slide');
    },

    /*Всем слайдам добавляем класс hidden-slide */

    hideVisibleImage(){
        document.querySelector('.slider-item:not(.hidden-slide)').classList.add('hidden-slide')
        //this.slides.forEach(function(slide){
           // slide.classList.add('hidden-slide');
        //});
    },

    /*Переключиться на предыдущее изображение. */
    setNextLeftImage(){
        this.hideVisibleImage();
        if(this.currentIdx == 0){
            this.currentIdx = this.slides.length -1;
        }else{
            this.currentIdx--;
        }
        const currentSlide = this.slides[this.currentIdx];
        currentSlide.classList.add('slider-rightToLeftAnimation');
        currentSlide.classList.remove('hidden-slide');
        setTimeout(()=>{
            currentSlide.classList.remove('slider-rightToLeftAnimation');
        },500);
    },

    /*Переключиться на предыдущее изображение. */
    setNextRightImage(){
        this.hideVisibleImage();
        if(this.currentIdx == 2){
            this.currentIdx = this.slides.length -1;
            this.currentIdx = 0;
        }else{
            this.currentIdx++;
        }
        const currentSlide = this.slides[this.currentIdx];
        currentSlide.classList.add('slider-leftToRightAnimation');
        currentSlide.classList.remove('hidden-slide');
        setTimeout(()=>{
            currentSlide.classList.remove('slider-leftToRightAnimathon');
        },500);
        
    },

    setSize(slider){
        let width=slider.getAttribute('data-width');
        let height = slider.getAttribute('data-height');
        if(width !==null && width !==""){
            slider.style.width=width;
        }
        if(height !==null && height !==""){
            slider.style.height=height;
        }
    }

};

images.setSize(slider);