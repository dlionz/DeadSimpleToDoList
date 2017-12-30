

//create list items based on uesr input
$("#submit").on("click", function(){
    //stop the button from clicking on load
    event.preventDefault();
    var newValue =  $("#todo-item").val();
    $("#todo").append("<li id='item'>" + newValue + " <button type='button' id='remove'> Delete </button></li>");
    clear();
});

//deltes list item user choses 
$("body").on("click", "#remove", function() {
  $(this).parents("#item").remove();
});

function clear(){
  $("#todo-item").val("");
}
