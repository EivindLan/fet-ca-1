$("document").ready(function createArray1() {
    let Info1 = new Array("email", "telephone_number", "address");
});

$("document").ready(function InfoBtn() {
    $("#contactBtn").click(function () { 
        
let Email = window.prompt("What is your e-mail?");
  if(Email.includes("@", ".")){
    let PhnNr = prompt("What is your phone number?")
    if(isNaN(PhnNr) || PhnNr < 0){  
        PhnNr = prompt("Please write a valid phone number");
    }   
        //since this is in the middle of several prompts it would be annoying to start over
        if(isNaN(PhnNr) || PhnNr < 0){
            alert("Your phone number is not valid, try again.");
        }
        // as the address can be delivered in many formats I wont put any restrictions on it.
        else  {   
        var Adr = window.prompt("What is your address?");
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



