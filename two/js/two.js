const knopka = document.getElementById(`help`);
console.log(knopka)
const save = document.querySelector(`.modal-content`)
console.log(save)
knopka.onclick = function () {
    save.style.display  = "none";
    console.log(`Hello,i saved the changes`)

};