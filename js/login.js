function login(user, pass) {
    const IS_VALID = (user.trim() === "admin" && pass.trim() === "admin"); 
    return IS_VALID;
}

function checkLogin(){
    const USER_VALUE = document.getElementById("username").value;
    const PASSWORD_VALUE = document.getElementById("password").value;
    const RESULT = login(USER_VALUE, PASSWORD_VALUE);
    RESULT? alert("Uspešno ste se prijavili! Dobrodošli, admin.") : alert("Neuspešna prijava! Proverite korisničko ime i lozinku.");  
    console.log(RESULT);
}