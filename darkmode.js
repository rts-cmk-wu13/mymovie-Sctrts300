let rootElm = document.documentElement;
let switchElm = document.querySelector("#switch")
let isDarkMode = readFromLocalStorage("isDarkMode")
console.log(isDarkMode);

if (isDarkMode) {
    console.log(isDarkMode);
    switchElm.checked = true
    rootElm.setAttribute("data-dark",switchElm.checked)
}

switchElm.addEventListener("change", function(){
    console.log (switchElm.checked)
    saveToLocalStorage("isDarkMode", switchElm.checked)
    
    if (switchElm.checked) {
        rootElm.setAttribute("data-dark",switchElm.checked)
    } else {
        rootElm.setAttribute("data-dark",switchElm.checked) 
    }
})


