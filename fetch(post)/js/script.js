function validateForm() {
    
    var firstname = document.customerform.firstname.value;
    var lastname = document.customerform.lastname.value;
    var email = document.customerform.email.value;
    var password = document.customerform.password.value;

if( firstname === "" ) {
    alert('Please enter your first name')
    return false;
} 
else {
    let regex = /^[a-zA-Z\s]+$/;            
    if(regex.test(firstname) === false) {
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
    if(regex.test(lastname) === false) {
        alert('Please enter valid name')
        return false;
    }
}

if(password === ""){
    alert("please enter password")
}
else{
     let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/; 
    if(regex.test(password) === false) {
        alert('Please enter valid password')
        return false;
    }
}


fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  body: JSON.stringify({
    firstname:firstname,
    lastname:lastname,
    email:email,
    password:password,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  })
  .then(
    (user_data) => { return user_data.json(); })
  .then(
    (final_data) => { console.log( final_data); })
    

fetch('https://jsonplaceholder.typicode.com/users')
    .then(
        (user_data) => { return user_data.json(); })
    .then(
        (final_data) => { console.log(final_data);});



}