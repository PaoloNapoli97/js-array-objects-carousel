"use strict"

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// FUNCTION

function changeSlide(direction){

    itemslist[active].classList.remove("item-active");
    if(direction === 'next'){
        if(active === images.length -1){
            active = 0;
        }
        else{
            active++;
        }
    }
    else if( direction === 'prev') {
        if(active === 0){
            active = images.length -1;
        }
        else{
            active--;
        }
    }
    itemslist[active].classList.add("item-active");
}

// 

let active = 0;
const carousel = document.querySelector('.items');
const carouselGallery = document.querySelector('.image-gallery');


// MAIN

// Metodo col classico ciclo for

for ( let i = 0; i < images.length; i++){
    const element = images[i];

    const templateGallery = document.getElementById('gallery-template').content.cloneNode(true);
    const template = document.getElementById('carousel-template').content.cloneNode(true);
    if ( i === active) {
        template.querySelector('.item').classList.add('item-active')
    }

    template.querySelector('.game-image').src = element.image;
    templateGallery.querySelector('.gallery-image').src = element.image;

    template.querySelector('.game-title').innerHTML = element.title;
    template.querySelector('.game-description').innerHTML = element.text;

    carouselGallery.append(templateGallery);
    carousel.append(template);
};

// Ciclo forEach fatto in classe e modificato

// images.forEach((elm, index) => {
//     // Clono il template delle thumb
//     const templateGallery = document.getElementById('gallery-template').content.cloneNode(true);
//     const template = document.getElementById('carousel-template').content.cloneNode(true);
//     // Compilo l'html del template appena clonato
//     // SE l'elemento su cui sto ciclando ha l'indice === currentImageIndex gli applica la classe active
//     if( index === active ) {
//         template.querySelector('.item').classList.add('item-active');
//     }
//     templateGallery.querySelector('img').src = elm.image;
//     templateGallery.querySelector('img').alt = elm.title;

//     template.querySelector('img').src = elm.image;

//     template.querySelector('.game-title').innerHTML = elm.title;
//     template.querySelector('.game-description').innerHTML = elm.text;
//     // Appendo il template nel thumbs container
//     carouselGallery.append(templateGallery);
//     carousel.append(template);
// });

const itemslist = document.querySelectorAll(".item");

const prev = document.querySelector('.prev');
prev.addEventListener("click" , function(){
    changeSlide('prev');
})

const next = document.querySelector('.next');
next.addEventListener("click" , function(){
    changeSlide('next');
})