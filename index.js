const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwLeftEl = document.getElementById("left-password-txt")
let pwRightEl = document.getElementById("right-password-txt")

let fiveCharEl = document.getElementById("five-chars")
let tenCharEl = document.getElementById("ten-chars")
let fifteenCharEl = document.getElementById("fifteen-chars")

let pwLength = []


function chooseFive() {
    pwLength.pop()
    fiveCharEl.classList.add("is-active")
    
    tenCharEl.classList.remove("is-active")
    fifteenCharEl.classList.remove("is-active")
    pwLength.push(fiveCharEl.textContent)
    console.log(pwLength)
}

function chooseTen() {
    pwLength.pop()
    tenCharEl.classList.add("is-active")
    
    fiveCharEl.classList.remove("is-active")
    fifteenCharEl.classList.remove("is-active")
    pwLength.push(tenCharEl.textContent)
    console.log(pwLength)
}

function chooseFifteen() {
    pwLength.pop()
    fifteenCharEl.classList.add("is-active")
    
    fiveCharEl.classList.remove("is-active")
    tenCharEl.classList.remove("is-active")
    pwLength.push(fifteenCharEl.textContent)
    console.log(pwLength)
}


function generate() {
    let leftPw = characters[Math.floor(Math.random() * characters.length)]
    let rightPw = characters[Math.floor(Math.random() * characters.length)]
    pwLeftEl.textContent = ""
    pwRightEl.textContent = ""
    
    for (let i = 0; i < pwLength[0]; i++) {
        let leftPw = characters[Math.floor(Math.random() * characters.length)]
        let rightPw = characters[Math.floor(Math.random() * characters.length)]
        
        pwLeftEl.textContent += leftPw
        pwRightEl.textContent += rightPw
    }
    pwLength.pop()
}

function copyPwLeft() {
    let copyLeftPw = pwLeftEl.textContent
    let inputElement = document.createElement("input")
    let errorMsg = "No password available"
    
    if (copyLeftPw !== "") {
         // 1. Creates Elements 2. Set it's value 3. will be selected 4. will be copied to clipboard
        document.body.appendChild(inputElement)
        inputElement.setAttribute("value", copyLeftPw)
        inputElement.select()
        document.execCommand("copy")
        
        inputElement.parentNode.removeChild(inputElement)
        alert("Your password has been copied")
    } else {
        return alert(errorMsg)
    } 
}

function copyPwRight() {
    let copyRightPw = pwRightEl.textContent
    let inputElement = document.createElement("input")
    let errorMsg = "No password available"
    
    if (copyRightPw !== "") {
    // 1. Creates Elements 2. Set it's value 3. will be selected 4. will be copied to clipboard
        document.body.appendChild(inputElement)
        inputElement.setAttribute("value", copyRightPw)
        inputElement.select()
        document.execCommand("copy")
        
        inputElement.parentNode.removeChild(inputElement)
        alert("Your password has been copied")
    } else {
        return alert(errorMsg)
    }
}




