// Wrap your code in an immediately-invoked function expression to avoid polluting the global scope
(function() {
  // Cache frequently used elements to avoid repeatedly querying the DOM
  var mainElement = document.getElementById("main");
  var content1Element = document.getElementById("content1");
  var content2Element = document.getElementById("content2");

  // Set initial style for the main element
  mainElement.style.display = "none";

  // Event listener for messages
  window.addEventListener("message", function(event) {
      if (event.data.action === "open") {
          // Update main element style
          mainElement.style.display = "block";

          // Check if content is undefined and update content2 element style accordingly
          content2Element.style.display = (event.data.content === undefined) ? "none" : "block";

          // Update content elements
          content1Element.innerHTML = event.data.title;
          content2Element.innerHTML = event.data.content;

          // Use jQuery to animate the main element
          $('#main').animate({
              'margin-left': '-8%'
          });
      } else if (event.data.action === "close") {
          // Use jQuery to animate the main element
          $('#main').animate({
              'margin-left': '-30%'
          });

          // Set a timeout to hide the main element and clear content after animation
          setTimeout(function() {
              mainElement.style.display = "none";
              content1Element.innerHTML = "";
              content2Element.innerHTML = "";
          }, 1000);
      }
  });
})();
