var images = ["/Users/altamashmomin/Desktop/AGL-Sounds/assets/images/images copy/workspace.jpg", 
                "/Users/altamashmomin/Desktop/AGL-Sounds/assets/images/images copy/workspace2.jpg",
                "/Users/altamashmomin/Desktop/AGL-Sounds/assets/images/images copy/workspace3.jpg",
                "/Users/altamashmomin/Desktop/AGL-Sounds/assets/images/images copy/workspace4.jpg"]

var showimages;
var count = 0;

function displayImage() {
    $("#workspace").html("<img src=" + images[count] + " width='auto'>");
}

function nextImage() {
    count +=1;

setTimeout(displayImage, 5000);
 if (count === images.length) {
     count = 0;
}

function startSlideshow() {
    showImages = setInterval(nextImage, 3000);
  }
}

displayImage();
console.log(displayImage());

