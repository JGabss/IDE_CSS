const register = (event) => {

    const projects = JSON.parse(localStorage.getItem("projects")) || []
    const id = projects.length + 1

    title = document.querySelector("[data-title]")
    titleValor = title.value

    seletor = document.querySelector("[data-seletor]")
    seletorValor = seletor.value
    
    descricao = document.querySelector("[data-text]")
    descricaoValor = descricao.value

    const codeArea = document.querySelector('.code-wrapper')
    const classCommunity = codeArea.querySelector(".code-textarea")
    classCommunity.classList.add("--community")
    classCommunity.setAttribute('aria-label', 'codigo')
    const code = codeArea.innerHTML
    
    if (title.value !== "" && descricao.value !== "") {

        classCommunity.removeAttribute("contenteditable")
        const project = {
            id, 
            titleValor, 
            seletorValor, 
            descricaoValor,
            code
        }

        localStorage.setItem('projectData', JSON.stringify(this.project));
    
    }
} 


buttonSbt = document.querySelector("[data-submit]")

buttonSbt.addEventListener("click", register)
