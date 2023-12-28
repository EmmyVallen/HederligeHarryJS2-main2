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

//VG DELEN:

var swedishPostalCodeField = document.getElementById('swedishpostalcode')

 // Lägger till eventlyssnare på e-postfältet
emailInput.addEventListener('input', function(){
    // Hämtar värdet från e-postfältet
    var emailValue = emailInput.value;
    // Kontrollerar om e-post innehåller ".se" eller ej
    var containSE = emailValue.includes('.se')
    /* Här visar / döljer vi fältet med swedishpostalcode 
    baserat på vad användaren skriver i e-post fältet */
    if (containSE) {
        swedishPostalCodeField.style.display = 'block'
    }
    else {
        swedishPostalCodeField.style.display ='none'
    }
})


// Skapa en array med information om 10 bilar
/* Varje bil har ett unikt Id. Type = modell av bil
year: år för bilen
price: priset
imageUrl: url till bilden av bilen. */

var carList = document.getElementById('carList');


var cars = [
    { id: 11, type: 'Volvo', year: 1989, price:870000 , imageUrl: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F11.png'},
    { id: 34, type: 'Hatchback', year: 1964, price:60000,  imageUrl: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F34.png' },
    {id: 56, type: 'Volvo', year: 2013, price:45000,  imageUrl: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F56.png'},
    {id: 78, type: 'Saab', year: 2009, price:30000 ,  imageUrl: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F78.png' },
    {id: 89, type: 'Volkswagen', year: 2003, price: 45000, imageUrl: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F89.png' },
    {id: 45, type: 'Hatchback', year: 1967, price: 67000, imageUrl: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F45.png' },
    {id: 33, type: 'Ford', year: 1978, price: 34000, imageUrl: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F33.png' },
    {id: 42, type: 'Kia', year: 1976, price:56000 , imageUrl: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F42.png' },
    {id: 22, type: 'Toyota', year: 1987, price: 90000 , imageUrl: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F22.png' },
    {id: 57, type: 'Mercedes', year: 1956, price: 15000 , imageUrl: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F57.png' },
    
];

// Uppdaterar med information om bilarna
/* Här använder vi en forEach-loop, går igenom varje bil i arrayen 'cars'
Hämtar det befintliga productcard-elementet som matchar det aktuella indexet.
getElementByClassName returnerar en lista av element med klassen productcard och vi använder
index för att hämta det specidika elementet för den aktuella bilen.
Genom att använda querySelector-anropet hittar koden de specifika elementen inom productcard-elementet
och uppdaterar deras innehåll med information. */
cars.forEach(function(car, index) {
    var existingCard = carList.getElementsByClassName('productcard')[index];
    existingCard.querySelector('img').src = car.imageUrl;
    existingCard.querySelector('.name').textContent = car.type;
    existingCard.querySelector('.description').textContent = car.year;
    existingCard.querySelector('.ctabutton').textContent = car.price + ' kr';
});

});