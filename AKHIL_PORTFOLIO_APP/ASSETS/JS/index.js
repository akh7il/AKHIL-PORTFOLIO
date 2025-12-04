if ( window.innerWidth <=768 ){
    
    let mainPageText = document.getElementById("main-page-text")

    mainPageText.innerHTML= `
        <span class="name"> hi i'am <span> akhil </span> </span>
        <span class="role"> python <span> full stack </span> developer </span>
        <span class="description"> Python Full Stack Developer blending clean code with creative design. <br> Clean code and strong coffee fueling full-stack creativity. </span> 
    `
}

(function () {
    emailjs.init("9s3zLNzSMRENJ87VD");
})();

let emailForm = document.getElementById("form-email")

emailForm.addEventListener( "submit", (e)=>{

    e.preventDefault();

    let message = document.getElementById("status")

    message.textContent = "sending..."

    emailjs.send("service_01dkywp", "template_889qpbr",{
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    })
    .then(()=>{
        message.innerText= "email sended successfully!"
        emailForm.reset();
    })    
    .catch(()=>{
        console.error("EmailJS Error:", err);
        message.innerHTML= "failed to send email. try again!"
    })

})

function isText(event){
    let char = event.key
    let regexp = /^[a-zA-Z]+$/

    if( !regexp.test(char) ){
        event.preventDefault()
        return false
    }
    else{
        return true
    }
}

function isNumber(event){
    let number = event.key
    let regexp = /^[0-9]+$/

    if( !regexp.test(number) ){
        event.preventDefault()
        return false
    }
    else{
        return true
    }
}

function isEmail(event){
    let email = event.key
    let regexp = /^[a-zA-Z0-9@._-]+$/

    if( !regexp.test(email)){
        event.preventDefault()
        return false
    }
    else{
        return true
    }
}