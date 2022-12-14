$("document").ready(function createArray1() {
    let Info1 = new Array("email", "telephone_number", "address");
    console.log(Info1);
    
});

$("document").ready(function InfoBtn() {
    $("#contactBtn").click(function () { 
        
let Email = window.prompt("What is your e-mail?");
  if(Email.includes("@", ".")){
    let PhnNr = prompt("What is your phone number?")
    if(isNaN(PhnNr) || PhnNr < 0){
        //if value is not correct (is non a number, or lower than 0) reprompt value   
        PhnNr = prompt("Please write a valid phone number");
        }
        //check the new re-prompt. 
        if(isNaN(PhnNr) || PhnNr < 0){
            alert("Your phone number is not valid, try again.");
        }
        // as the adress can be delivered in many formats I wont put any restrictions on it.
        else {   
        var Adr = window.prompt("What is your adress?");
        window.alert("thank you, I will be contacting you");
        let Info1 = [Email, PhnNr, Adr];
        console.log(Info1);
        console.log("From: " + Email);
        console.log("Contact: " + PhnNr);
        console.log("Address: " + Adr);
          }
       }
    

else {
    alert("Your e-mail is not valid, try again.")
    };
});
});



