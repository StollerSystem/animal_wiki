

// Interface Logic
$(document).ready(function() {

  $("form#formOne").submit(function(event) {
    event.preventDefault();
    let choice = $(animalSelect).val();
    chooseAnimal(choice);
  });

  function chooseAnimal(input) {
    //let choice = input 
    if (input === "1") {
      $(".llama").show();
    } else if (input === "2") {
      $(".andEater").show();
    } else if (input === "3") {
      $(".oranguntan").show();
    }    

});




  