$(document).ready( function() {
  $(".card-body").attr({ "data-toggle": "popover", "data-placement": "bottom", 
    "data-title": "Answer:" }).popover().click( () => $(this).popover()) 
})