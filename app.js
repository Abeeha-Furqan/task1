
        function myfunc() {
            var user = /^[A-z ._]{3,20}$/gm;
            var name = document.getElementById("fname").value;
            var result = user.test(name);
            var email = /^[A-Za-z._]{3,}@[A-Za-z]{3,}[A-Za-z.]{2,6}$/gm
            var id = document.getElementById("Email").value
            var result1 = email.test(id)
            var word =  /^(?=.*[]0-9)(?=.*[!@#$%^&*])[a-zA-z0-9!@#$%^&*]{8,16}$/gm; 
            var Password = document.getElementById("pass").value;
            var result2 = word.test(Password)

            if(result){
                text = "Valid"

            }else{
                text = "Invalid"
            }
            document.getElementById("demo").innerHTML = text;
            document.getElementById("demo").style.color = "red"

            if(result1){
                text1 = "Valid"

            }else{
                text1 ="Invalid"
            }
            document.getElementById("demo1").innerHTML = text1;
            document.getElementById("demo1").style.color = "red"

            if(result2){
                text1 = "Valid"

            }else{
                text1 ="Invalid"
            }
            document.getElementById("demo2").innerHTML = text1;
            document.getElementById("demo2").style.color = "red"



        }
    
