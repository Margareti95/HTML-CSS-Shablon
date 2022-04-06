// Основные переменные - элементы управления
const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');


let index = 0;

const activeSlide = n => {   
    for(slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for(dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if(index == slides.length - 1){ // "slides.length - 1" - запись дает понять, какой элемент массива является последним
        index = 0; // Вовзращаемся к началу слайдера
        prepareCurrentSlide(index);
    } else{
        index++;    // Перелистываем изображения
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if(index == 0){ // Проверяем, нулевой ли слайд
        index = slides.length - 1; // Передаем последний элемент массива
        prepareCurrentSlide(index);
    } else{
        index--;    // Перелистываем изображения
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    });
})

next.addEventListener('click', nextSlide); // Событие при нажатии на кнопку 'next'
prev.addEventListener('click', prevSlide); // Событие при нажатии на кнопку 'prev'

setInterval(nextSlide, 8500);   // Автоматическое переключение слайдов через 8,5 сек.