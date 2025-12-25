const gallery = [ 
{ src: "thebelljar.png", caption: "THE BELL JAR BY SYLVIA PALTH" }, 
{ src: "crimeand.png", caption: "CRIME AND PUNISHMENT BY FYODOR DOSTOEVSKY" }, 
{ src: "letterstomilenia.png", caption: "LETTERS TO MILLENEA BY FRANZ KAFKA" }, 
{ src: "prideand.png", caption: "PRIDE AND PREJUDUCE BY JANE AUSTEN" } 
]; 
let index = 0;

function updateGallery() {
    document.getElementById("galleryImage").src = gallery[index].src;
    document.getElementById("caption").textContent = gallery[index].caption;
}

function nextImage() {
    index++;
    if (index >= gallery.length) {
        index = 0;
    }
    updateGallery();
}

function prevImage() {
    index--;
    if (index < 0) {
        index = gallery.length - 1;
    }
    updateGallery();
}