function addToLocal(){
    let name = document.getElementById('name').value;
   let phone = document.getElementById('phone').value;
   let email = document.getElementById('email').value;
   let password = document.getElementById('password').value; 
    var  exsit = JSON.parse(localStorage.getItem('users')) || [];
    var users= [{
        "name":name,
        "phone":phone,
        "email":email,
        "password":password,
    }];
    exsit.push(users);
    let json = JSON.stringify(exsit)
     localStorage.setItem('users',json);
     window.location.href = 'http://127.0.0.1:5500/login_page.html';
}

let name = document.getElementById("name");
let telephone = document.getElementById("phone");
let email = document.getElementById("email");
let password = document.getElementById("password");

function validation(){
    if(name.value ==""){
        document.getElementById("errorName").innerHTML = "fname name empty";
        return false;
    }else{
        document.getElementById("errorName").innerHTML = "";
    }

    if(telephone.value==""){
        document.getElementById("errorPhone").innerHTML = "telephone empty";
        return false;
     }else if(telephone.value.length !== 10 ){
        document.getElementById("errorPhone").innerHTML = "required 10 digits";
        return false;
    }else{
        document.getElementById("errorPhone").innerHTML = "";
        // return tr
    }

      
    if(email.value==""){
        document.getElementById("errorEmail").innerHTML = "email empty";
        return false;
     }else{
        document.getElementById("errorEmail").innerHTML = "";
    }


    if(password.value==""){
        document.getElementById("errorPassword").innerHTML = "password empty";
        return false;
     }else if(password.value.length < 5){
        document.getElementById("errorPassword").innerHTML = "required minimun 5 characters";
        return false;
    }else{
        document.getElementById("errorPassword").innerHTML = "";              
       alert("success");
     //  window.location.href = 'http://127.0.0.1:5500/login_page.html';
    }
}
