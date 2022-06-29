document.querySelector("#form").addEventListener("submit", task => {
    // Stops default event behaviour //
    task.preventDefault();

    // Use formData object to retrive name and e-mail //
    let formData = new FormData(task.target);
    
    // Assign name and e-mail to variable //
    let fullName = formData.get("full-name");
    let email = formData.get("e-mail");

    // set content to webpage using template literal //
    let content = `
        <h2>Congratulations, ${fullName}!</h2>
        <p>You're on your way to becoming a BBQ Master!</p>      
        <p class="fine-print">You will get weekly BBQ tips sent to: ${email}</p>`

    // Overwrite login-page with content //
   document.querySelector(".login-page").innerHTML = content;
});