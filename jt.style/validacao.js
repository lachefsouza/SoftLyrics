const fields = document.querySelectorAll("[required]")
console.log(fields)





document.querySelector("form")
.addEventListener("submit", event => {
    console.log("pode enviar o formulário")

    event.preventDefault()
})