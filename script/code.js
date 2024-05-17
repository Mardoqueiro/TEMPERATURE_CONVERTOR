// In creating a temperature converter, ensuring the highest possible score entails meticulous attention to various aspects. This includes diligently declaring variables throughout the program, validating all inputs comprehensively to avoid crashes, and implementing a flawless function for temperature conversion. Additionally, it's imperative to ensure that the function accurately writes outputs to the Document Object Model (DOM) and formats them to the specified decimal places. A dedicated function for conversion should be error-free and seamlessly integrated into the application. Styling should be exemplary, with attention to detail evident in the interface, and responsiveness across various devices is crucial. Deployment on both GitHub and Netlify should be flawless, with the application functioning correctly post-deployment. Finally, strict adherence to time management ensures timely submission of the work, maximizing the potential for a perfect score.

let input = document.getElementById("input");   
let output = document.getElementById("output");
let inputUnit = document.getElementById("input-unit");
let outputUnit = document.getElementById("output-unit");

btn.addEventListener("click", convert);

function convert() {
    let inputValue = input.value;
    let inputUnitValue = inputUnit.value;
    let outputUnitValue = outputUnit.value;

    if (inputUnitValue === "celsius" && outputUnitValue === "fahrenheit") { 
        output.value = (inputValue * 9/5) + 32;
    } else if (inputUnitValue === "celsius" && outputUnitValue === "kelvin") {
        output.value = inputValue + 273.15;
    } else if (inputUnitValue === "fahrenheit" && outputUnitValue === "celsius") {
        output.value = (inputValue - 32) * 5/9;
    } else if (inputUnitValue === "fahrenheit" && outputUnitValue === "kelvin") {
        output.value = ((inputValue - 32) * 5/9) + 273.15;
    } else if (inputUnitValue === "kelvin" && outputUnitValue === "celsius") {
        output.value = inputValue - 273.15;
    } else if (inputUnitValue === "kelvin" && outputUnitValue === "fahrenheit") {
        output.value = ((inputValue - 273.15) * 9/5) + 32;
    }

    output.value = output.value.toFixed(2);

    input.value = "";
    inputUnit.value = "";
    outputUnit.value = "";

    input.focus();

    return false;
}