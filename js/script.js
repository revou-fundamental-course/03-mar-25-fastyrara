// ini js
console.log("Javascript is working")

// Function to validate form kak yama
// function validateForm(){
//     // Get value from input
//     const nameInput=document.getElementById("name-input");
//     console.log(nameInput.value);
    
//     // Check if input is empty
//     if(nameInput.value==""){
//         alert("Name must be filled out")
//     } else {
//         // Write value to the page
//     }
// }

// Ganti nama sambutan
function replaceName(){
    let user=prompt("Please enter your name","");
    document.getElementById("user").innerHTML=user;
}

replaceName();

// Banner autoslide
let bannerIndex=0;
showBanner();

// Function to change banner
function nextBanner(){
    bannerIndex+=1;
    showBanner();
}

// Function to show banner
function showBanner(){
    // Get all banner elements
    const banners=document.getElementsByClassName("banner-img");
    console.log(banners);

    if(bannerIndex>=banners.length){
        bannerIndex=0;
    }

    // Loop through all banner elements
    for (let i=0; i<banners.length; i++){
        banners[i].style.display="none";
    }

    // Show first banner
    banners[bannerIndex].style.display="block";
}

// Set interval to change banner
setInterval(nextBanner,3000);

// Function untuk validate form baru
function validateForm(){
    const name=document.forms["message-form"]["full-name"].value;
    const birthDate=document.forms["message-form"]["birth-date"].value;
    const gender=document.forms["message-form"]["gender"].value;
    const messages=document.forms["message-form"]["messages"].value;

    // Check if input is empty
    if(name==""||birthDate==""||gender==""||messages==""){
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(name,birthDate,gender,messages);

    return false;
}

function setSenderUI(name,birthDate,gender,messages){
    document.getElementById("sender-full-name").innerHTML=name;
    document.getElementById("sender-birth-date").innerHTML=birthDate;
    document.getElementById("sender-gender").innerHTML=gender;
    document.getElementById("sender-messages").innerHTML=messages;
}