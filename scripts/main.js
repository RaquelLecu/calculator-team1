function setResult(displayVal) {
    document.getElementById('display').innerHTML = displayVal;
}

function getResult() {
    return (document.getElementById('display').innerHTML);
}

function add(key) {
    var result = getResult();
    
    if (result != '0' || isNaN(key)) /* Comprobar si el valor puesto esta vacio */ setResult(result + key);
    //TODO cambiar a replace para cambiar valor de symbolo
    /*const str = "DelftStacks";
    const str2= str.replace(/.$/, '');
    console.log(str2);
    DelftStack*/
    // if (result.substring(result.length-2, result.length ) == document.getElementsByClassName('symbol')+document.getElementsByClassName('symbol') ) {
    //     result.slice(0,-1)
    // }
    else setResult(key);
}

function clearDisplay() {
    setResult(0);
    // setResult(document.getElementById('display').innerHTML = "");

}

function equals() {
    var result = eval(getResult()); 
    setResult(result);
}