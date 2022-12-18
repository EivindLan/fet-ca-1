$(document).ready(function () {
    ParentDiv = $("#accessToggle").parent();
    
    
    ParentDiv.on("click", function() {
        if ($(ParentDiv).hasClass("off")){
        $("p").css("font-size", "120%");
    }
    else {
        $("p").css("font-size", "100%");
    }
    
    });
}); 



          
 
   /* $("#accessToggle").change(function() {
        if ($("p").css("font-size")) === ($("p").css("font-size", "120%")){    
        $("p").css("font-size", "100%");
        }

        else {
            $("p").css("font-size", "120%")
        }
   
         });    */
  


   





/* $("#accessToggle").change(function() {
    $("p").css("font-size", "120%");    
});
$("#accessToggle").change("off" , function() {
    $("p").css("font-size", "100%");    
}); */

/* $("#accessToggle").change(function() {
    $("p").css("font-size", "120%");    
}); */


    

 //   $('#toggle-demo').bootstrapToggle('on')

  

        
        
    
 





