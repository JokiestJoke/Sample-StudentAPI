export var userAPI = (() => {

    
    var createUser = async (event) => {
        event.preventDefault();
        var user = {
            //userID: 0, // need mechanism to add user ID
            username: document.getElementById("userName").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            //need mechanism to set these properties.
            
            //isStudent: false,
            //isInstructor: false,
            //isAdministrator: false,
        }
        
        alert("Attemtping to create Username: " + user.username + ", Password:" + user.password + ", Email: " + user.email);

        try {
            const response = await fetch('http://localhost:3001/api/students', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                    username: user.username,
                    email: user.email,
                    password: user.password
              })
            }); 
            if (response.status === 200) {
              alert('Student added successfully!');
            
            } else {
              alert("Failed to add student. Please try again. " + response.statusText + ", response code: " + response.status);
            }
          } catch (error) {
            console.error("There was an error adding the student:", error);
          }

        /*
        try {
            fetch("http://localhost:3001/api/students", {
                method: "POST",
                body: JSON.stringify({ 
                    username: user.username,
                    email: user.email,
                    password: user.password
                }),
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            }).then(resp => {
                setTimeout(function () {
                    if (resp.status == 200){
                        alert("User Succesfully Created");
                    } else {
                        alert("User Failed Creation Failed: " + resp.statusText + ", Code: " + resp.status);
                    }
                }, 0);
            });
        } catch(error) {
            console.log("------------------------");
            alert("Creating User-> User: " + user.username);
        }
        */
        return false;
    }

    var authenticateUser = () => {
        return false;
    }

    var authorizeUser = () => {
        return false;
    }
    


    return {
        createUser,
        
    }

})();