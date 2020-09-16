let kaffer;
let filter = "alle";
document.addEventListener("DOMContentLoaded", loadJSON);




async function loadJSON() {
    const JSONData = await fetch("https://spreadsheets.google.com/feeds/list/1cusyHmJ0ML-csQjEMGf9hkosvQJtib6zNYnf44xYeA4/od6/public/values?alt=json");
    kaffer = await JSONData.json();
    addEventListenersToButtons();
    visKaffer();

    document.querySelector("#burgermenu").addEventListener("click", toggleMenu);

}



function toggleMenu() {
    console.log("toggleMenu");

    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#burgermenu").innerHTML = "<img src = \"images_coffee/burger.svg\" alt=\"burger\">";
    } else {
        document.querySelector("#burgermenu").innerHTML = "<img src=\"images_coffee/kryds.svg\" alt = \"kryds\">";
    }
}




function visKaffer() {
    const templatePointer = document.querySelector("template");
    const listPointer = document.querySelector("#list");
    listPointer.innerHTML = "";

    kaffer.feed.entry.forEach(kaffe => {
        if (filter == "alle" || filter == kaffe.gsx$kategori.$t) {
            console.log(kaffe);

            const minKlon = templatePointer.cloneNode(true).content;

            minKlon.querySelector("h2").textContent = kaffe.gsx$navn.$t;


            minKlon.querySelector("img").src = `images_coffee/${kaffe.gsx$billede.$t}.jpg`;
            minKlon.querySelector("img").src = `images_coffee/${kaffe.gsx$billede.$t}.jpg`;


            minKlon.querySelector(".beskrivelse").textContent = kaffe.gsx$beskrivelse.$t;





            minKlon.querySelector("article").addEventListener("click", () => visDetaljer(kaffe));

            listPointer.appendChild(minKlon);
        }


    })

}



function visDetaljer(kaffe) {
    console.log(kaffe);

    location.href = `detalje.html?id=${kaffe.gsx$id.$t}`
}

document.querySelector("#luk").addEventListener("click", () => popup.style.display = "none");



function addEventListenersToButtons() {
    document.querySelectorAll(".filter").forEach((btn) => {
        btn.addEventListener("click", filterBTNs);
    });
}

function filterBTNs() {
    filter = this.dataset.kategori;
    document.querySelector("h3").textContent = this.textContent;

    document.querySelectorAll(".filter").forEach((btn) => {
        btn.classList.remove("valgt");
    })
    this.classList.add("valgt");
    visKaffer();
}

loadJSON();
