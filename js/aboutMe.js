// document.getElementById("about").

$(document).ready(function () {

// first I wanted to find a point to easily traverse to the next siblings.    
AboutStart = $("#about").find("h2");
AboutStart.siblings().prop("class", "AboutMe"); // create class for everything. 
AboutStart.next().text("I am | Eivind | The code master");
AboutStart.next().next().text("I like to work out");
AboutStart.next().next().next().text("I also like to learn new things");
// I feel if i do more than three .next it becomes hard to read. therefore I create an id.
AboutStart.next().next().next().prop("id", "Lastpara");
$("#Lastpara").next().prop("href", "https://www.facebook.com/eivind.langeland/");
$("#Lastpara").next().next().prop("href", "https://www.instagram.com/3iwin/");
$("#Lastpara").next().next().next().prop("href", "http://www.youtube.com/@eivindgrimstvedt.langeland9766");
// I dont have a twitter account, so i wont link to that.
$(".AboutMe").click(function () { 
    $(".AboutMe").css("background-color", "powderblue")
    $(".AboutMe").css("color", "white");
    
});
})

/* var DivMain = $("#aboutMe1");

Head1 = DivMain.nextChild();

Head1.textContent = "Learning" */