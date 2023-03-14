//declearing html elements

const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

//if user hover on img div 

imgDiv.addEventListener('mouseenter', function(){
    uploadBtn.style.display = "block";
});

//if we hover out from img div

imgDiv.addEventListener('mouseleave', function(){
    uploadBtn.style.display = "none";
});

//lets work for image showing functionality when we choose an image to upload

//when we choose a foto to upload

file.addEventListener('change', function(){
    //this refers to file
    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader(); //FileReader is a predefined function of JS

        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);

        //Allright is done

        //please like the video
        //comment if have any issue related to vide & also rate my work in comment section

        //And aslo please subscribe for more tutorial like this

        //thanks for watching
    }
});


const tabBtn = document.querySelectorAll(".tab");
const tab = document.querySelectorAll(".tabShow");

function tabs(panelIndex){
    tab.forEach(function(node){
        node.style.display = "none";
    });

    tab[panelIndex].style.display = "block";
}
tabs(0);

$(".tab").click(function() {
    $(".tab").removeClass("active");
    $(this).addClass("active");
})

let onofftoggle = document.querySelector(".onofftoggle");
let onofftext = document.querySelector(".onofftext");

function Animatedtoggle(){
    onofftoggle.classList.toggle("active");

    if(onofftoggle.classList.contains("active")){
        onofftext.innerHTML = "ON";
    }
    else{
        onofftext.innerHTML = "OFF";
    }
}