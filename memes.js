console.log("Memes 🔥");

let memeLink = '  https://meme-api.herokuapp.com/gimme';

let getMeme = document.querySelector("#generate");
let memeTitle = document.getElementById('title');
let memeImg = document.getElementById('meme');


getMeme.addEventListener('click',generateMeme);


// Generating-Memes

function generateMeme(){

    xhr = new XMLHttpRequest();
    xhr.open('Get',memeLink,true);

    xhr.onload = function(){
        if(this.status===200){

            let objMeme = JSON.parse(this.responseText);
            memeTitle.innerHTML = objMeme.title;
            memeImg.src = `${objMeme.url}`

        }else{
            
            console.log(`Something went wrong: ${e}`)
        }
    };

    xhr.send()
}