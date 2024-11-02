document.getElementById("questionnaireForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById("questionnaireForm"));
    const submitButton = document.querySelector("button[type='submit']");

    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";

    fetch("banco.php", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData).toString()
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                document.getElementById("questionnaireForm").style.display = "none";
                document.getElementById("confirmationMessage").classList.remove("hidden");
                document.getElementById("confirmationMessage").innerText = data.message;
            } else {
                alert("Houve um erro ao enviar suas respostas. Por favor, tente novamente.");
            }
        })
        .catch(error => {
            console.error("Erro no envio:", error.message);
            alert("Houve um erro ao enviar suas respostas. Por favor, tente novamente.");
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.textContent = "Enviar";
        });
});

document.getElementById("name").addEventListener("input", function (event) {
    this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
});

document.getElementById("age").addEventListener("input", function (event) {
    this.value = this.value.replace(/[^0-9]/g, '');
});
