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
let active = 0;
const carousel = document.querySelector('.items');


for ( let i = 0; i < images.length; i++){
    const element = images[i];

    const template = document.getElementById('carousel-template').content.cloneNode(true);

    template.querySelector('.game-image').src = element.image;

    template.querySelector('.game-title').innerHTML = element.title;
    template.querySelector('.game-description').innerHTML = element.text;

    carousel.append(template);
};

document.querySelector('.next').addEventListener("click" , function(){
    const itemslist = document.querySelectorAll(".item");
    itemslist[active].classList.remove("item-active");
    if(active === images.length -1){
        active = 0;
    }
    else{
        active++;
    }
    itemslist[active].classList.add("item-active");
})

document.querySelector('.prev').addEventListener("click" , function(){
    const itemslist = document.querySelectorAll(".item");
    itemslist[active].classList.remove("item-active");
    if(active === 0){
        active = images.length -1;
    }
    else{
        active--;
    }
    itemslist[active].classList.add("item-active");
})