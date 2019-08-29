let index = 1;

let url = "https://led6jnh0vc.execute-api.eu-west-1.amazonaws.com/prod?url=https://xkcd.com/" + window.location.search.replace("?","") + "/info.0.json"

const comic = document.getElementById("comic")

const data = fetch(url).then(x => x.json()).then(y=> {
    comic.src = y.img
    console.log(y)
});