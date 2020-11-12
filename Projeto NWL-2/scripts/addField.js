// Pegando o meu botão
document.querySelector("#add-time")
// Quando o evento de click for realizado, chama a função clonefield
.addEventListener('click', cloneField)

function cloneField() {
    // Clonando o elemento schedule-item
    const newFieldsContainer = document.querySelector(".schedule-item").cloneNode(true); 
    // Limpar os campos
    const fields = newFieldsContainer.querySelectorAll('input') 
    fields.forEach(function(i){ // Percorrendo todos os elementos dos fields
        i.value = "" // Limpando os elementso do fields
    })
    // Colocar na pagina
    document.querySelector("#schedule-items").appendChild(newFieldsContainer)
}