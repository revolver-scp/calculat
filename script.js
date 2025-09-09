let result = document.querySelector(".result");
function digit(a) {
    result.value += a;
} function calculateResult() {
    result.value = eval(result.value.replace(/x/g, '*'))
} function clearResult() {
    result.value = "";
} function negativ(){
    result.value = -result.value
}
 document.getElementById("result").innerText = result;