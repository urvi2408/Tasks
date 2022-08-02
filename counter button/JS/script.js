function increment(){
    var a = Number(document.getElementById("counter").value);
    a++;
    document.getElementById("counter").value=a;
}

function decrement(){
    var a = Number(document.getElementById("counter").value);
    a--;
    document.getElementById("counter").value=a;
}

function Reset(){
    var a = 0;
    document.getElementById("counter").value=a;
}
