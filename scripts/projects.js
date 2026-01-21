// Tristan Hertzog

function openModal(){
const modal = document.getElementById("emptyModal");
modal.classList.add("is-open");
document.body.style.overflow = "hidden";
}

function closeModal(){
const modal = document.getElementById("emptyModal");
modal.classList.remove("is-open");
document.body.style.overflow = "";
}

function handleBackdropClick(e){
if (e.target.id === "emptyModal") closeModal();
}

// ESC closes modal
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  }, true);