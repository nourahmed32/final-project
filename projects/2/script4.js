document.getElementById("contactForm").addEventListener("submit", function (e) { 
    e.preventDefault(); 
    
    var name = document.getElementById("name").value.trim(); 
    var email = document.getElementById("email").value.trim(); 
    var subject = document.getElementById("subject").value.trim(); 
    var message = document.getElementById("message").value.trim(); 
    
    var nameError = document.getElementById("name-error"); 
    var emailError = document.getElementById("email-error"); 
    var subjectError = document.getElementById("subject-error"); 
    var messageError = document.getElementById("message-error");

    nameError.textContent = ""; 
    emailError.textContent = ""; 
    subjectError.textContent = ""; 
    messageError.textContent = ""; 
 
    var valid = true; 
 

    if (name === "") { 
        nameError.textContent = "Please enter your name."; 
        valid = false; 
    } else if (name.length < 3 || name.length > 15) { 
        nameError.textContent = "Name must be 3–15 characters."; 
        valid = false; 
    } 
    
    if (email === "") { 
        emailError.textContent = "Please enter your email."; 
        valid = false; 
    } 
    
    if (subject !== "" && subject.length < 3) { 
        subjectError.textContent = "Subject must be at least 3 characters."; 
        valid = false; 
    }
    if (message !== "" && message.length < 5) { 
    messageError.textContent = "Message must be at least 5 characters."; 
    valid = false; 
    } 

    if (valid) { 
    alert("Form submitted successfully!"); 
    } 
});