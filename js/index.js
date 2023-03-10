
document.getElementById("pin-generator").addEventListener("click",()=>{
    document.getElementById("form-inp").value = getPin()
})

document.getElementById("calculator").addEventListener("click",(e)=>{
    const number = e.target.innerText;
    const proviousNum = document.getElementById("calculator-inp").value;
    if(isNaN(number)){
        if(number === "C"){
            document.getElementById("calculator-inp").value = ""
        }
        else if(number === "<"){
            let split = proviousNum.split("");
            split.pop()
           
            document.getElementById("calculator-inp").value = split.join("")
            
        }
    }else{
        const newNumber = proviousNum + number;
        document.getElementById("calculator-inp").value = newNumber
    }
})
document.getElementById("submit-btn").addEventListener("click",()=>{
    const pinGenerateInp = document.getElementById("form-inp").value;
    const calculatPinInp = document.getElementById("calculator-inp").value;
    if(pinGenerateInp !== ""){
        if(pinGenerateInp === calculatPinInp){
            document.getElementById("match").style.display = "block"
            document.getElementById("not-match").style.display = "none"
        }else{
            document.getElementById("match").style.display = "none"
            document.getElementById("not-match").style.display = "block"
        }
    }else{
        alert("Plz Generate a Pin")
    }
})


function generatePin(){
    const pin = Math.floor(Math.random()*10000);

    return pin
}


function getPin(){
    const pin = generatePin()
    const pinStr = pin + ''
    if(pinStr.length ===4 ){
        
        return pinStr
    }else if(pinStr.length ===3) {
        return `1${pinStr}`
    }else if(pinStr.length ===2){
        return `12${pinStr}`
    }
}

