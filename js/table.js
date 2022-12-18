const fragment = document.createDocumentFragment();

// create <Tr> with id tr1 for easier access later.
const tr1 = fragment
.appendChild(document.createElement("tr"))
tr1.setAttribute("id", "tr1")
document.getElementById("tBody").appendChild(fragment);

// ID, create <Th> tag and text content.
const th1 = fragment
.appendChild(document.createElement("th"));
th1.textContent = "Eivind Langeland";
document.getElementById("tr1").appendChild(fragment);

// Icon, have to create a <Th> tag and also an bootstrap icon inside it.
const th2 = fragment
.appendChild(document.createElement("th"));
th2.setAttribute("class", "bi bi-arrow-through-heart");
th2.setAttribute("id", "Icon1");
document.getElementById("tr1").appendChild(fragment);
  
// Description   
const th3 = fragment
.appendChild(document.createElement("th"))
th3.textContent = "Junior developer"
document.getElementById("tr1").appendChild(fragment);   
  
// Info
const th4 = fragment
.appendChild(document.createElement("th"))
th4.textContent = "Learning"
document.getElementById("tr1").appendChild(fragment); 
  
// Image, I uploaded a new image in the Img folder of me to use. 
const th5 = fragment
.appendChild(document.createElement("th"))
.appendChild(document.createElement("IMG"));
th5.setAttribute("src", "./img/BildeEivind.png");
th5.setAttribute("id", "Pic1");
th5.setAttribute("alt", "me");
th5.setAttribute("width", "50px");
th5.setAttribute("Height", "50px");
document.getElementById("tr1").appendChild(fragment);    

// Image and Icon opened in new window:
$(document).ready(function newWindow() {
 $("#Pic1").click(function () { 
    window.open("./img/BildeEivind.png");
    });
    
    // I did not figure out how to show the bootstrap icon in a new window, 
    // I wanted to change to a picture as it would work 100% then, but if you know how please tell me :)
    $("#Icon1").click(function () { 
      window.open("https://icons.getbootstrap.com/icons/arrow-through-heart/");
      });
});

// changing font color of table odd rows.
$(document).ready(function fontChange() {
   $("#tr1 th:odd").hover(function () {
    $(this).css("color", "blue");
  
    }, function () {
    $(this).css("color", "black");
    
  });
});






     

  

