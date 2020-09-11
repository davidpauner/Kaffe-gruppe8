let kaffe;
let filter = "bønne";
document.addEventListener("DOMContentLoaded", loadJSON)

async function loadJSON() {
    const JSONData = await
    fetch("https://spreadsheets.google.com/feeds/list/1cusyHmJ0ML-csQjEMGf9hkosvQJtib6zNYnf44xYeA4/od6/public/values?alt=json");
    kaffe = await JSONData.json();
    visKaffe();
}

function visKaffe() {
    const templatePointer = document.querySelector("template");
    const listpointer = document.querySelector("#list");
}
