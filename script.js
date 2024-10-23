function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const popup = document.getElementById("popup");
const close = document.getElementById("close");
const videoPopup1 = document.getElementById("videoPopup");
const videoElement = document.getElementById("videoElement");

popup.addEventListener("click", () => {
    videoPopup1.style.display = "block";
    videoElement.play(); 
});

close.addEventListener("click", () => {
    videoPopup1.style.display = "none";
    videoElement.pause(); 
    videoElement.currentTime = 0; 
});
