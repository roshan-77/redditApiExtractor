const input_value= document.querySelector(".search-website")
const extract_btn = document.querySelector(".extract")
// const card_text = document.querySelector(".card-text")
const card = document.querySelector(".card");
const toggle_age_under = document.querySelector(".toggle-age-under")
const toggle_age_over = document.querySelector(".toggle-age-over")
var data1 = '';

extract_btn.addEventListener('click',()=>{
    
    var sth = fetching_api();
    required_text();
});

function fetching_api(){
    alert("hello")
    var data1='hello';
    fetch(input_value.value)
    .then(response=>response.json())
    .then(res => data1=res)
    console.log(data1)
}

// toggle_age_under.addEventListener('click',()=>{
//     required_text()

// })

// toggle_age_over.addEventListener('click',()=>{
//     console.log(data)
//     required_text()
// })

function required_text(){
    // console.log(data)
    for(let i=0;i<=data1.data.children.length-1; i++){
        if((data1.data.children[i].data.selftext != "") ){

            let card_body = document.createElement("div");
            card_body.classList.add("card-body");

            let card_title= document.createElement("h5");
            card_title.classList.add("card-title");

            let card_subtitle = document.createElement("h6");
            card_subtitle.classList.add("card-subtitle");
            card_subtitle.classList.add("mb-2");
            card_subtitle.classList.add("text-muted");
            card_subtitle.innerText = ('Over 18: ' + data1.data.children[i].data.over_18);


            card_body.append(card_title);
            card_body.append(card_subtitle);


            let card_text = document.createElement("p");
            card_text.classList.add("card-text");
            card_text.innerText = (data1.data.children[i].data.selftext.slice(0,200)+'...')
            card_body.appendChild(card_text);
            card.append(card_body)
            }else{
            console.log("This should be false")
            }
    }
}