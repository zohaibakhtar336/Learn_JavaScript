function SetUsername(username){
    // Complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const myVar = new createUser("zohaib", "zohaib@example.com", "123")
console.log(myVar);