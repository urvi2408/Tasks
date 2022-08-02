function addition(){
    var a,b;
    a=Number(document.getElementById("num1").value);
    b=Number(document.getElementById("num2").value);
    document.getElementById("add_answer").innerHTML= a+b;
}
function subtraction(){
    var a,b;
    a=Number(document.getElementById("num1").value);
    b=Number(document.getElementById("num2").value);
    if(a>=b){
        document.getElementById("sub_answer").innerHTML= a-b;
    }else{
        document.getElementById("sub_answer").innerHTML= b-a;
    }
}
function multiplication(){
    var a,b;
    a=Number(document.getElementById("num1").value);
    b=Number(document.getElementById("num2").value);
    document.getElementById("mul_answer").innerHTML= a*b;
}
function division(){
    var a,b;
    a=Number(document.getElementById("num1").value);
    b=Number(document.getElementById("num2").value);
    document.getElementById("div_answer").innerHTML= a/b;
}
