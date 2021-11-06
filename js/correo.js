function sendMail(params){
    var tempParams = {
        topic: document.getElementById("topic").value,
        name: document.getElementById("nombre").value,
        mail: document.getElementById("correo").value,
        people: document.getElementById("personas").value,
        number: document.getElementById("telefono").value,
        aditionals: document.getElementById("w3review").value,
        date: document.getElementById("meeting-time").value,
        reply_to: document.getElementById("correo").value,
    };
    emailjs.send("service_syxojje", "template_tqdat6s", tempParams)
    .then(function(res){
        console.log("sucecess", res.status);
        alert("Su correo se ha enviado correctamente.")
    })
}

