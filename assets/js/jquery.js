// ---------------------------------------------
// jQuery
// A commonly used JavaScript library — the preferred way of querying and manipulating the DOM.
//
// Why jQuery?
// * Cross browser support.
//   (document.querySelector() isn’t in older versions of IE, etc).
// * Simpler syntax (no looping needed).
// * Extra functionality built-in for common needs (animation, fading).
// * Ecosystem of plugins available.
//   http://plugins.jquery.com/
//
// Include your main.js file in your HTML file.
// > Why does it have to be after including jQuery?
// > Verify that both files loaded in your browser tools.


//
// Example 5: window.addEventListener("load")
//
// Task: Open an alert dialog on page load to welcome the user to the page.
//

// function welcomeUserToPage () {
//   alert("Welcome to Foundations 2!");
// }
// window.addEventListener("load", welcomeUserToPage);

$(window).on("load", function() {
  alert("Welcome to Foundations 2!");
});

// $(window).on("load", welcomeUserToPage);

// $(document).ready(function() {
//   alert("Welcome to Foundations 2!");
// });

// $(function() {
//   alert("Welcome to Foundations 2!");
// });

// KEY CONCEPT:
//
// $(document).ready()
// Register a handler for when the DOM is available.
// This is much more common than waiting for the "load" event.
// Synchronizes and creates a new scope.

//
// Example 6: Handling the resize event
//
//            resize = An event on the window object.
//            Signifies the user changed the viewing dimensions.
//            Use it to implement "responsive design": adjust layout, styling, and element visibility.
//
// jQuery version:
// You'll need: $(window).on()
//              $(window).width()
//              $(element).height(desiredHeight)

// window.addEventListener("resize", function () {
//   var imgTags = document.getElementsByTagName("img");
//   var previousStyle;
//   var imgWidth = window.innerWidth / 2;
//   var imgHeight = imgWidth * 0.8;
//   for(var i = 0; i < imgTags.length; i++) {
//     previousStyle = imgTags[i].getAttribute("style") || "";
//     var newStyle = previousStyle + " height:" + imgHeight + "px;width:" + imgWidth + "px;";
//     imgTags[i].setAttribute("style", newStyle);
//   }
// });

$(window).on("resize", function() {
  var imgWidth = $(window).width() / 2.0;
  var imgHeight = imgWidth * 0.8;
  $("li img").width(imgWidth)
             .height(imgHeight);
});

//
// $(selector).click(handler) = $(selector).on('click', handler);
//
// $(this)
//
// Inside an event handler, this is the element the event targeted. It’s the same as event.target.
//
// $(this) creates a jQuery object that wraps event.target.


//
// Example 6: Handling the resize event
//
//            resize = An event on the window object.
//            Signifies the user changed the viewing dimensions.
//            Use it to implement "responsive design": adjust layout, styling, and element visibility.
//
// Task: Make the images half the window width each time the resize event triggers.
//
// You’ll need: window.innerWidth and window.innerHeight
//

// window.addEventListener("resize", function () {
//   var imgTags = document.getElementsByTagName("img");
//   var previousStyle;
//   var imgWidth = window.innerWidth / 2;
//   var imgHeight = imgWidth * 0.8;
//   for(var i = 0; i < imgTags.length; i++) {
//     previousStyle = imgTags[i].getAttribute("style") || "";
//     var newStyle = previousStyle + " height:" + imgHeight + "px;width:" + imgWidth + "px;";
//     imgTags[i].setAttribute("style", newStyle);
//   }
// });

$(window).on("resize", function() {
  var imgWidth = $(window).width() / 4.0;
  var imgHeight = imgWidth * 0.8;
  $("li img").width(imgWidth)
             .height(imgHeight);
});

//
// Example 7: Handling a click event
//
//            click = An event on a DOM element.
//            Signifies the user clicked that element with a mouse or trackpad.
//            Use it to interact with the user: open a menu,respond to a button-click, etc.
//
// Task: Every time an image is clicked, move it to the end of the <ul>.
//
// You’ll need: event.target.parentNode
//              element.remove()
//              element.appendChild()
//

// var imgTags = document.getElementsByTagName("img");
// var labsUl = document.getElementsByTagName("ul")[1];

// for(var i = 0; i < imgTags.length; i++) {
//   imgTags[i].addEventListener("click", function (evt){
//     var liToMove = event.target.parentNode;
//     liToMove.remove();
//     labsUl.appendChild(liToMove);
//   });
// }

$("img").click(function() {
  var $li = $(this).parent();
  var $ul = $li.parent();
  $li.remove().appendTo($ul);
});

// on()
//
// Register a handler on an ancestor of the elements you’re targeting.
//
// Usage: $(ancestor).on(event, decendentSelector, handler);
//
// Task: Hide all the lab images on page load.
//       When a button is clicked, show the corresponding list item (and only that list item)
//

$("ul").on("click", "li", function() {
  $ul = $(this).parent();
  $(this).remove()
         .appendTo($ul);
});

