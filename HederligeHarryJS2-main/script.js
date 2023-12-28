document.addEventListener('DOMContentLoaded', function() {
    // Hämta knapp och mailfältet
    var buttonContact = document.getElementById('button-contact');
    var emailInput = document.getElementsByName('email')[0]; // Hämta e-postinput baserat på namn
  
    // Lägg till eventlyssnare på contact-button
    buttonContact.addEventListener('click', function(event) {

      // Hämta texten från epost-input
      var emailText = emailInput.value
  
      // Logga texten i konsolen
      console.log('E-post: ' + emailText)
    });

function createParagraph (text){

    // Skapar en ny p-tag
var paragraph = document.createElement('p')

// Sätter texten för p-taggen
paragraph.textContent = text
// Returnerar den skapade p-taggen
return paragraph
}

// Använd functionen och lägga till den skapade p-taggen i body
var myText ="Detta är min egen text"
var myParagraph = createParagraph(myText)

// Lägger till p-taggen i body-elementet.
document.body.appendChild(myParagraph)

});