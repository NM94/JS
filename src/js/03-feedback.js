const form = document.querySelector(".feedback-form")
console.dir(form.elements)

const local = "feedback-form-state"
form.addEventListener("input", handlerForm)
form.addEventListener("submit", handlerSubmit)
function handlerForm() {
    const dataBase = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    }
    localStorage.setItem(local,JSON.stringify(dataBase))
}

const reFill = JSON.parse(localStorage.getItem(local))
form.elements.email.value = reFill.email;
form.elements.message.value = reFill.message;


function handlerSubmit(e) {
    e.preventDefault()
    if (form.elements.email.value.trim() === "" || form.elements.message.value.trim() === "") {
        alert("Заповніть поля")
        return
    }
    localStorage.removeItem(local)
    form.reset()
}