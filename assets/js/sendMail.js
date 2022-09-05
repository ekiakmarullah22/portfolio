let form = document.querySelector('#contactForm');

function sendMsg(e) {
    e.preventDefault();

          const name = document.querySelector('#name'),
                userEmail = document.querySelector('#email'),
                msg = document.querySelector('#msg'),
                token = "b2e2f9e9-d1f5-4411-b76d-966bf0f32d19",
                authorEmail = "ekiakmarullah.id@gmail.com";

                // function for sent email
                Email.send({
                    SecureToken : token,
                    To : authorEmail,
                    From : userEmail.value,
                    Subject : "Contact Form",
                    Body : msg.value,
                }).then(
                message => alert(message)
                );

}

//trigger form 
form.addEventListener('submit', sendMsg);