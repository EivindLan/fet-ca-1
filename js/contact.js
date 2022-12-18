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
        $("#contactDetails p:eq(1)").text(Email);
        console.log("Contact: " + PhnNr);
        $("#contactDetails p:first").text(PhnNr);
        console.log("Address: " + Adr);
        $("#contactDetails p:eq(2)").text(Adr);
        }
  }   
  else {
    alert("Your e-mail is not valid, try again.")
    };
  
  });
});
/*  Change the current contact information (email, telephone number, and address) to the input data in these 3 new variables.

This must be done using jQuery selectors, without adding more HTML IDs to the ‘contact’ section. */
    





