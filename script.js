document.getElementById('convertBtn').addEventListener('click', convertTemperature);

function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;
    
    let result;

    if (unitFrom === 'celsius' && unitTo === 'fahrenheit') {
        result = (inputTemp * 9/5) + 32;
    } else if (unitFrom === 'fahrenheit' && unitTo === 'celsius') {
        result = (inputTemp - 32) * 5/9;
    } else {
        result = inputTemp; // Conversion between the same units, no change
    }

    document.getElementById('result').textContent = `Converted Temperature: ${result.toFixed(2)} ${unitTo}`;
}