let kaffer;
let filter = "bønne";
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
    kaffer.feed.entry.forEach(kaffe => {
        if (filter == kaffe.gsx$bønne.$t) {
            console.log(kaffe);
            const minKlon = templatePointer.cloneNode(true).content;
            minKlon.querySelector("h3").textContent = kaffe.gsx$bønne.$t;
            minKlon.querySelector("img").scr = `images_coffee/${kaffe.gsx$billede.$t}.jpg`;
            minKlon.querySelector("p").textContent = kaffe.gsx$beskrivelse.$t;
            listpointer.appendChild(minKlon);
        }
    })

}
