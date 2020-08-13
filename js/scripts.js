

// Interface Logic
$(document).ready(function() {

  $("form#formOne").submit(function(event) {
    event.preventDefault();
    let choice = $(animalSelect).val();
    chooseAnimal(choice);
  });

  function chooseAnimal(input) {
    
    $(".llama, .antEater, .orangutan").hide(500);
    if (input === "1") {
      $(".llama").show(500);
    } else if (input === "2") {
      $(".antEater").show(500);
    } else if (input === "3") {
      $(".orangutan").show(500);
    }    
  }
});