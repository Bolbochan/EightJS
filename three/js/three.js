const list = document.getElementsByClassName(`nav-link`)
console.log(list)

list.onclick = function () {
    list.classList.add("text-success");
}
