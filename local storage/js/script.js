
function validateForm() {
    
    var firstname = document.customerform.firstname.value;
    var lastname = document.customerform.lastname.value;
    // var address = document.customerform.address.value;
    // var city = document.customerform.city.value;
    // var state = document.customerform.state.value;
    // var zipcode = document.customerform.zipcode.value;
    var mobile = document.customerform.mobile.value;
    var email = document.customerform.email.value;
    // var dropdown = document.customerform.dropdown.value;
    // var checkbox = document.customerform.checkbox.value;
    var Gender = document.customerform.Gender.value;
    var password = document.customerform.password.value;


// console.log('Gender,',Gender);



if( firstname === "" ) {
    // printError("nameErr", "Please enter your name");
    alert('Please enter your first name')
    return false;
} 
else {
    let regex = /^[a-zA-Z\s]+$/; 
    // console.log('regex', firstname.match(/^[a-zA-Z\s]+$/));             
    if(regex.test(firstname) === false) {
        // printError("nameErr", "Please enter a valid name");
        alert('Please enter valid name')
        return false;
    }
}




if( lastname === ""){
    alert("please enter your last name")
    return false;
}
else{
    let regex = /^[a-zA-Z\s]+$/; 
    // console.log('regex', lastname.match(/^[a-zA-Z\s]+$/));              
    if(regex.test(lastname) === false) {
        // printError("nameErr", "Please enter a valid name");
        alert('Please enter valid name')
        return false;
    }
}







// if( address === "" ){
//     alert("please enter your address")
//     return false;
// }



// if( state === ""){
//     alert("please enter any state name")
//     return false;
// }
// else{
//     let regex = /^[a-zA-Z\s]+$/; 
//     // console.log('regex', state.match(/^[a-zA-Z\s]+$/));             
//     if(regex.test(state) === false) {
//         // printError("nameErr", "Please enter a valid name");
//         alert('Please enter valid statename')
//         return false;
//     }
// }



// if( city === ""){
//     alert("please enter any city name")
//     return false;
// }
// else{
//     let regex = /^[a-zA-Z\s]+$/; 
//     // console.log('regex', city.match(/^[a-zA-Z\s]+$/));               
//     if(regex.test(city) === false) {
//         // printError("nameErr", "Please enter a valid name");
//         alert('Please enter valid cityname')
//         return false;
//     }
// }



// if( zipcode === ""){
//     alert("please enter any code")
//     return false;
// }
// else{
//     let regex = /^[1-9][0-9]{5}$/;
//     // console.log('regex', pincode.match(/^[0-9\s]+$/));               
//     if(regex.test(zipcode) === false) {
//         // printError("nameErr", "Please enter a valid name");
//         alert('Please enter valid code')
//         return false;
//     }
// }



if( mobile === "" ){
    alert("please enter your phone number")
    return false;
}
else{
    let regex = /^[7-9]\d{9}$/;
    // console.log("regex",mobile.match(/^[1-9]\d{9}$/));
    if(regex.test(mobile) === false){
        alert('please enter valid number')
        return false;
    }
}



if( email === ''){
    alert('please enter email address')
    return false;
}
else{
    let regex = /^\S+@\S+\.\S+$/;
    if(regex.test(email) === false){
        alert('please enter valid email address')
        return false;
    }
}



// if( dropdown  === 'select'){
//     alert('please select the option')
//     return false;
// }



// if( customerform.checkbox.checked === false){
//     alert('please choose checkbox')
//     return false;
// }



if( Gender === null){
        alert('please choose your gender')
        return false;
}
    


if(password === ""){
    alert("please enter password")
}
else{
     let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/; 
    // console.log('regex', lastname.match(/^[a-zA-Z\s]+$/));     
    if(regex.test(password) === false) {
        // printError("nameErr", "Please enter a valid name");
        alert('Please enter valid password')
        return false;
    }
}

// localStorage.firstname=("firstname").value();

let user_data=new Array();
user_data=JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

user_data.push({
    fname:firstname,
    lname:lastname,
    mobile_no:mobile,
    email:email,
    password:password,
    gender:Gender
})


localStorage.setItem("users",JSON.stringify(user_data));

window.location.replace("index2.html");
}

// function replace(){
// }


function deleteitems() {
    localStorage.clear();
}
