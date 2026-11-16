// 1. Mengubah teks judul (h1)
var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world!';

// 2. Fitur pengubah gambar saat diklik
var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
};

// 3. Fitur pesan selamat datang dinamis & LocalStorage
var myButton = document.querySelector('button');

function setUserName() {
    var myName = prompt('Please enter your name.');
    if(myName) {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

// Cek apakah nama sudah tersimpan di localStorage saat pertama dimuat
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

// Event handler tombol 'Change user'
myButton.onclick = function() {
    setUserName();
};

