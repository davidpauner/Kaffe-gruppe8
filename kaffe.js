let kaffer;
let filter = "navn";
document.addEventListener("DOMContentLoaded", loadJSON)

async function loadJSON() {
    const JSONData = await
    fetch("https://spreadsheets.google.com/feeds/list/1cusyHmJ0ML-csQjEMGf9hkosvQJtib6zNYnf44xYeA4/od6/public/values?alt=json");
    kaffe = await JSONData.json();
    visKaffer();
}

function visKaffer() {
    const templatePointer = document.querySelector("template");
    const listpointer = document.querySelector("#list");
    listpointer.innerHTML = "";
    kaffer.feed.entry.forEach(kaffe => {
        if (filter == "alle" || filter == kaffe.gsx$navn.$t) {
            console.log(kaffe);
            const minKlon = templatePointer.cloneNode(true).content;
            minKlon.querySelector("h3").textContent = kaffe.gsx$navn.$t;
            minKlon.querySelector("img").scr = `images_coffee/${kaffe.gsx$billede.$t}.jpg`;
            minKlon.querySelector("p").textContent = kaffe.gsx$beskrivelse.$t;
            listpointer.appendChild(minKlon);
        }
    })

}

function addEventlistenersToButtons() {
    document.querySelectorAll(".filter").forEach((btn) => {
        btn.addEventListener("click", filterBTNs);
    })
}

function filterBTNs() {
    filter = this.dataset.kategori;
    visKaffer();
}
