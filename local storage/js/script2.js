
let user_data=[];
user_data=JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

console.log(user_data)

// console.log("user_data",user_data);

let row=document.createElement("tr");
   let firstNameCell = document.createElement("td");
   let lastNameCell = document.createElement("td");
   let mobileNumCell = document.createElement("td");
   let emailCell = document.createElement("td");
   let passwordCell = document.createElement("td");

   firstNameCell.innerHTML=user_data[1].fname;
   lastNameCell.innerHTML=user_data[1].lname;
   mobileNumCell.innerHTML=user_data[1].mobile_no;
   emailCell.innerHTML=user_data[1].email;
   // passwordCell.innerHTML=user_data[1].password;
    
   row.appendChild(firstNameCell);
   row.appendChild(lastNameCell);
   row.appendChild(mobileNumCell);
   row.appendChild(emailCell);
   // row.appendChild(passwordCell);

//     const user= user_data.map((item)=>{
//         let mobileNumCell = document.createElement("td");
//    })
//    console.log(user);
// tr.innerHTML="hello"
let x=document.getElementById("tableselection");

document.body.appendChild(row)
