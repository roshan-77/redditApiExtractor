const input_value= document.querySelector(".search-website")
const extract_btn = document.querySelector(".extract")
// const card_text = document.querySelector(".card-text")
const card = document.querySelector(".card");
const toggle_age_under = document.querySelector(".toggle-age-under")
const toggle_age_over = document.querySelector(".toggle-age-over")
var globalData = '';

extract_btn.addEventListener('click',()=>{
    fetch(input_value.value)
    .then(response=>response.json())
    .then(res => {required_text(res,true)})
});


toggle_age_under.addEventListener('click',()=>{
    console.log(globalData)
    card.innerHTML = ''
    let hulu = JSON.parse(JSON.stringify(globalData))
    hulu.data.children = hulu.data.children.filter(function(entry){
        return entry.data.over_18 == false
    })
    required_text(hulu)

})

toggle_age_over.addEventListener('click',()=>{
    console.log(globalData)
    card.innerHTML = ''
    let hulu = JSON.parse(JSON.stringify(globalData))
    hulu.data.children = hulu.data.children.filter(function(entry){
        return entry.data.over_18 == true
    })
    required_text(hulu)
})

function required_text(data,saveGlobal=false){
    if(saveGlobal){
        globalData = data
    }
    
    for(let i=0;i<=data.data.children.length-1; i++){
        if((true) ){

            let card_body = document.createElement("div");
            card_body.classList.add("card-body");

            let card_title= document.createElement("h5");
            card_title.classList.add("card-title");

            let card_subtitle = document.createElement("h6");
            card_subtitle.classList.add("card-subtitle");
            card_subtitle.classList.add("mb-2");
            card_subtitle.classList.add("text-muted");
            card_subtitle.innerText = ('Over 18: ' + data.data.children[i].data.over_18);


            card_body.append(card_title);
            card_body.append(card_subtitle);


            let card_text = document.createElement("p");
            card_text.classList.add("card-text");
            card_text.innerText = (data.data.children[i].data.selftext.slice(0,200)+'...')
            card_body.appendChild(card_text);
            card.append(card_body)
            }else{
            console.log("This should be false")
            }
    }
}