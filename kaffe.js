let personer;
let filter = "alle";
document.addEventListener("DOMContentLoaded", loadJSON);




async function loadJSON() {
    const JSONData = await fetch("https://spreadsheets.google.com/feeds/list/1cusyHmJ0ML-csQjEMGf9hkosvQJtib6zNYnf44xYeA4/od6/public/values?alt=json");
    personer = await JSONData.json();
    addEventListenersToButtons();
    visPersoner();

}

function visPersoner() {
    const templatePointer = document.querySelector("template");
    const listPointer = document.querySelector("#list");
    listPointer.innerHTML = "";

    personer.feed.entry.forEach(person => {
        if (filter == "alle" || filter == person.gsx$kategori.$t) {
            console.log(person);

            const minKlon = templatePointer.cloneNode(true).content;

            minKlon.querySelector("h3").textContent = person.gsx$navn.$t;

            minKlon.querySelector("img").src = `large/${person.gsx$billede.$t}.jpg`;
            minKlon.querySelector(".beskrivelse").textContent = person.gsx$beskrivelse.$t;




            minKlon.querySelector("article").addEventListener("click", () => visDetaljer(person));

            listPointer.appendChild(minKlon);
        }


    })

}



function visDetaljer(person) {
    console.log(person);
    popup.querySelector("h3").textContent = person.gsx$navn.$t;

    popup.querySelector("img").src = `large/${person.gsx$billede.$t}.jpg`;
    popup.querySelector(".beskrivelse").textContent = person.gsx$beskrivelse.$t;


    popup.style.display = "block";
}

document.querySelector("#luk").addEventListener("click", () => popup.style.display = "none");



function addEventListenersToButtons() {
    document.querySelectorAll(".filter").forEach((btn) => {
        btn.addEventListener("click", filterBTNs);
    });
}

function filterBTNs() {
    filter = this.dataset.kategori;
    document.querySelector("h1").textContent = this.textContent;

    document.querySelectorAll(".filter").forEach((btn) => {
        btn.classList.remove("valgt");
    })
    this.classList.add("valgt");
    visPersoner();
}

loadJSON();
