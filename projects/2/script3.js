var BtnClose = document.getElementById("close"); 
var nextBtn = document.getElementById("next"); 
var prevBtn = document.getElementById("prev"); 
var BoxContainer = document.getElementById("boxContainer"); 
var boxItem = document.getElementById("boxItem"); 
var images = document.querySelectorAll(".img-gallery img"); 

var imagesArr = []; 
for (var i = 0; i < images.length; i++) { 
imagesArr.push(images[i]); 
} 
var currentIndex = 0; 

function showImage(index) { 
boxItem.style.backgroundImage = "url(" + imagesArr[index].src + ")"; 
}

for (var j = 0; j < imagesArr.length; j++) { 
(function (j) { 
imagesArr[j].addEventListener("click", function () { 
BoxContainer.style.display = "flex"; 
currentIndex = j; 
showImage(currentIndex); 
}); 
})(j); 
}

BtnClose.addEventListener("click", function () { 
BoxContainer.style.display = "none"; 
});

nextBtn.addEventListener("click", function () { 
currentIndex++; 
if (currentIndex === imagesArr.length) { 
currentIndex = 0; 
} 
showImage(currentIndex); 
});

prevBtn.addEventListener("click", function () { 
currentIndex--; 
if (currentIndex < 0) { 
currentIndex = imagesArr.length - 1; 
} 
showImage(currentIndex); 
});

BoxContainer.addEventListener("click", function (event) { 
if (event.target === BoxContainer) { 
BoxContainer.style.display = "none"; 
} 
});