
alert("Hello World!");
// let result = prompt("What's your name?", '');
// let letres = confirm(`Is this your name? - ${result}`)


let log = prompt("Enter your login", '');
if (log === "admin") {
        let pas = prompt("Enter your password: ", '')
        if (pas === "head") {
                alert("Hello!");
        }
        else if (pas === null) {
                alert("Cancel");
        }
        else {
                alert("Wrong password");
        }
}
else if (log === "" || log === null) {
        alert("Cancel");
}
else {
        alert("I don't know you");
}