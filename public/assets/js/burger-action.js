$(function() {
  
    $(".change-devour").on("click", function(event) {

        //event.
        var id = $(this).data("id");
        console.log("inside",id);
        //var devour = true;
    
        var newdevour = {
          devoured: true
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newdevour
        }).then(
          function() {
            //console.log("changed denvoured to", devour);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    
    


})