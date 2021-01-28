let calcDisplay = document.getElementById("display");

function my_f(num){
    
    switch(num){

        case "=": {
            calc();
            break;
        }

        case "C": {
            calcDisplay.innerHTML = "0"
            break;
        }

        case "Del": {
            calcDisplay.innerHTML = calcDisplay.innerHTML.slice(0, calcDisplay.innerHTML.length - 1);
            break;
        }

        default: {
            if(calcDisplay.innerHTML == "0"){
                calcDisplay.innerHTML = "";
            }
            calcDisplay.innerHTML += num;
            break;
        }
    }
    

}

function calc(){
    let res = eval(calcDisplay.innerHTML);
    calcDisplay.innerHTML = res;
}
 