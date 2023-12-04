
function contact(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("topic").value;
    let message = document.getElementById("message").value;

    alert("Contact Details: " 
    + "\nName: " + name
    + "\nE-mail: " + email
    + "\nSubject: " + subject
    + "\nMessage: " + message);
}

function comments(event){
    event.preventDefault();
    let name = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let comment = document.getElementById("comment").value;

    document.getElementById("name").innerHTML = name;
    document.getElementById("comments").innerHTML = comment;

    document.getElementById("userName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comment").value = "";

}