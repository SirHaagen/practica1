
const cardButton= document.querySelector(".container__card-main--open_info--button");
const cardContainer= document.querySelector(".container__card");

cardContainer.addEventListener("click", ()=> cardContainer.classList.toggle("display"));

cardButton.addEventListener("click", ()=> alert("hola"))