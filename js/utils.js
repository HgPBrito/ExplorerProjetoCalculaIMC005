export function notANumber(value) {
    return isNaN(value) || value == "" || value.length === 0 || !value.trim();
}

export function calculateIMC (weight, height){
    return (weight / (height / 100)** 2).toFixed(2);
}