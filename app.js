
let screen = document.querySelector('.screen')

const uploadtoscreen = (number)=>{
    if (screen.innerHTML === '0'){
        screen.innerHTML = number;
    }else{
    screen.append(number)
    }
}

const clearScreen =()=>{
    screen.innerHTML = '0';
}



const calculateTerms = (x, y, sign)=>{
    if (sign === "+"){
        screen.innerHTML = parseInt(x) + parseInt(y);
    } else if  (sign === "-"){
        screen.innerHTML = parseInt(x) - parseInt(y);
    } else if  (sign === "X"){
        screen.innerHTML = parseInt(x) * parseInt(y);
    } else if  (sign === "%"){
        screen.innerHTML = parseInt(x) / parseInt(y);
    } else{
        alert("ERROR");
    }
};

const splitInput = ()=>{
let nput = screen.textContent;
console.log(nput)

if (nput.includes("+")) {
    let solve = nput.split("+");
    console.log("input:", solve);
    calculateTerms(solve[0], solve[1], "+");
} else if (nput.includes("-")){
    let solve  = nput.split("-")
    console.log("input:", solve)
    calculateTerms(solve[0], solve[1], "-");
} else if (nput.includes("X")){
    let solve  = nput.split("X")
    console.log("input:", solve)
    calculateTerms(solve[0], solve[1], "X");
} else if (nput.includes("%")){
    let solve  = nput.split("%")
    console.log("input:", solve)
    calculateTerms(solve[0], solve[1], "%");
}
else{
    alert("Add Symbol to Calculate")
}

}

