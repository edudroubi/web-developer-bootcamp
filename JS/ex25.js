var div = $("div");
var highlight = $(".highlight");
var third = $("#third");
var firstDiv = $("div:first-of-type"); // use css
// var firstDiv = $("div").first(); use jQuery


div.css("background", "purple");

highlight.css({
  width: "200px"
});

third.css({
  border: "2px solid orange"
});

firstDiv.css({
  color: "pink"
});