// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", (function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  })
  e.stopPropagation();
}))

$("input[type='text']").keypress(function(e){
  if(e.which === 13){
    //grab text entered in input field
      var todoText = ($(this).val()); 
    //clear out input field
      $(this).val("");
    //create a mew li and add to ul
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    }    
  });
  



