'use strict';

const imageArray = [
    {
        id: 1,
        caption: "A scenic view of mountains under a golden sunrise",
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=crop&w=1920&h=1080"
    },
    {
        id: 2,
        caption: "Waves crashing on a serene beach at sunset",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=crop&w=1920&h=1080"
    },
    {
        id: 3,
        caption: "A city skyline illuminated at night with stars above",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?crop=entropy&cs=tinysrgb&fit=crop&w=1920&h=1080"
    },
    {
        id: 4,
        caption: "A peaceful forest with a winding stream",
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?crop=entropy&cs=tinysrgb&fit=crop&w=1920&h=1080"
    }
];


let sliderContainer = document.querySelector('#slider-container');
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let ct = 0;

imageArray.forEach(element => {

    let div = document.createElement('div');
    div.classList.add('sliderCard', 'hidden');

    let img = document.createElement('img');
    img.src = element.image;

    let p = document.createElement('p');
    p.innerText = element.caption;

    div.appendChild(img);
    div.appendChild(p);
    sliderContainer.appendChild(div);

})

let check = (direction) => {

    cards.forEach(ele => {
        ele.classList.add('hidden');
    });

    if (direction == 'next') {
        ct++;
        if (ct >= imageArray.length) {
            ct = 0;
        }
    } else if (direction == 'prev') {
        ct--;
        if (ct <= 0) {
            ct = imageArray.length - 1
        }
    }

    cards[ct].classList.remove('hidden');
}


let cards = document.querySelectorAll('.sliderCard');

cards[0].classList.remove('hidden');


nextBtn.addEventListener('click', () => { check('next') });
prevBtn.addEventListener('click', () => { check('prev') });