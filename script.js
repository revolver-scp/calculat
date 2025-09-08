let result = document.querySelector(".result");
function digit(a) {
    if(a.includes('+-/x') &&  result.value.includes('+-/x')){
    result.value != a;
    } else{
    result.value += a;
    }
}
function calculateResult() {
    result.value = eval(result.value.replace(/x/g, '*'))
}
function clearResult() {
    result.value = "";
} document.getElementById("result").innerText = result;