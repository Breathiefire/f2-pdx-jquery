// Add your JS code here

//
// Example 1: getElementsByTagName()
//
var titleTags = document.getElementsByTagName("title");
var title = titleTags[0]; //titleTags is an array
title.text = "F2: JavaScript | Class Summary";


//
// Example 2: getElementById()
//
// Task: Use getElementById to add a style attribute to the <ul>
//       that removes the bullets to the left of the images.
//
// Resources:
// https://developer.mozilla.org/en-US/docs/Web/API/Element.setAttribute
// https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
//
var picsUl = document.getElementById("lab-images");
picsUl.style.cssText = "list-style-type: none;";

// Alternate:
// picsUl.setAttribute("style", "list-style-type: none;");

//
// Example 3: querySelectorAll()
//
// Task: Make the images all have a maximum width of 200px.
//
var imgTags = document.querySelectorAll("li img");

for(var i = 0; i < imgTags.length; i++) {
  imgTags[i].setAttribute(
    "style",
    "max-width: 200px;"
  );
}

//
// Task: Find another picture to illustrate one of the labs.
//       Use JavaScript to add a new <li> element in your existing <ul>.
//       Then add a new <img> element to the <li> and specify its src.
//       You can use the URL of the image you found as the src,
//       or you can download the new image to your assets/img folder.
//
// You’ll need document.createElement() and element.appendChild()
//

var ulTag = document.querySelector("ul"); // Note: this assumes just one ul on the page
var newLi = document.createElement("li");
var newImg = document.createElement("img");
newImg.setAttribute( "src", "http://www.ex-astris-scientia.org/gallery/30-jahre/st3-klingons.jpg" );
newLi.appendChild(newImg);
ulTag.appendChild(newLi); // Why doesn't it have the styling we applied earlier?
