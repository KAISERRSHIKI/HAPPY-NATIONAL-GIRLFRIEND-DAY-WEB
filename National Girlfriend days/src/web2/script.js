const wrapper = document.querySelector(".wrapper");
const container = document.querySelector(".container");
const caption = document.querySelector(".caption");
const gifs = document.querySelector(".gifs");
const yesBtn = document.querySelector(".yes-btn");
const noBtn= document.querySelector(".no-btn");
const gif = document.querySelector(".gif");

noBtn.addEventListener("mouseover", ()=> {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
