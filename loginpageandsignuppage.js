
        function showSignup() {
            document.getElementById('login-box').style.display = 'none';
            document.getElementById('signup-box').style.display = 'block';
        }
        function showLogin() {
            document.getElementById('signup-box').style.display = 'none';
            document.getElementById('login-box').style.display = 'block';
        }

        function loginUser(event) {
            event.preventDefault();
            let email = document.getElementById("login-email").value;
            let password = document.getElementById("login-password").value;
            
            if(email && password) {
                alert("Login Successful!");
                window.location.href = "dashboard.html"; // Redirect to dashboard or landing page
            } else {
                alert("Invalid credentials!");
            }
        }
        
        function signupUser(event) {
            event.preventDefault();
            let name = document.getElementById("signup-name").value;
            let email = document.getElementById("signup-email").value;
            let password = document.getElementById("signup-password").value;
            let confirmPassword = document.getElementById("signup-confirm-password").value;
            
            if(password === confirmPassword) {
                alert("Signup Successful! You can now log in.");
                showLogin();
            } else {
                alert("Passwords do not match!");
            }
        }
