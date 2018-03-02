console.log("converter.js");

/* Write a program that will convert a temperature from fahrenheit to celsius, or from celsius to fahrenheit.

- [ ] In the HTML, have one input field where someone can enter in a temperature.
- [ ] Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
- [ ] Create a block level element that will hold the text of the converted temperature.
- [ ] Create a button that, when clicked, displays the converted temperature.
- [ ] Create another button that, when clicked, clears any text in the input field.
- [ ] Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
- [ ] If the temperature is greater than 90F/32C the color of the converted temperature should be red.
- [ ] If the temperature is less than 32F/0C the color of the converted temperature should be blue.
- [ ] For any other temperature, the color should be green.*/

function toCelsius() {
    var input = document.getElementById('temperature').value;
    input = parseFloat(input);
    document.getElementById("converted").innerHTML = ((input-32)/1.8).toFixed(2);
    var fahTemp = (document.getElementById("converted").innerHTML);
    console.log(fahTemp);
    }
  
function toFahrenheit() {
  input = document.getElementById('temperature').value;
  input = parseFloat(input);
  document.getElementById("converted").innerHTML = (1.8 * input) + 32;
  var celTemp = (document.getElementById("converted").innerHTML).value;
}

// Get a reference to the button element in the DOM
let button = document.getElementById("conversionbtn").addEventListener("click", determineConverter);
// Assign a function to be executed when the button is clicked
//button.addEventListener("click", determineConverter);

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  if(document.getElementById('celTofah').checked) {
    //celTofah radio button is checked
    return toFahrenheit();
  }else if(document.getElementById('fahTocel').checked) {
    //fahTocel radio button is checked
    return toCelsius();
  }
}

      const changeInputColor = () => {
        let fahTemp = document.getElementById("converted").innerHTML;
        console.log(fahTemp);
        let celTemp = document.getElementById("converted").innerHTML;
              if (fahTemp > 90 || celTemp > 32){
            //If the temperature is greater than 90F/32C the color of the converted temperature should be red.
              document.getElementById("converted").style.color = "red";
           } else if(fahTemp < 32 || celTemp === 0){
             //If the temperature is less than 32F/0C the color of the converted temperature should be blue.
              document.getElementById("converted").style.color = "blue";
           } else if (fahTemp < 0 || celTemp < 0){
             // For any other temperature, the color should be green.*/
              document.getElementById("converted").style.color = "green";
          }
          }
          changeInputColor();

          //Create another button that, when clicked, clears any text in the input field.
          let resetBtn = document.getElementById("reset").addEventListener("click", resetAllField);

         const resetAllFields = () => {
            document.getElementById("resetAll").reset();
        }

        resetAllFields();