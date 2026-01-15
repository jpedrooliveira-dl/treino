function openTab(evt, tabName) {

    // Esconde todos os conteúdos das abas

    const tabContent = document.getElementsByClassName("tab-content");

    for (let i = 0; i < tabContent.length; i++) {

        tabContent[i].style.display = "none";

        tabContent[i].classList.remove("active");

    }

    // Remove a classe "active" de todos os botões

    const tabBtns = document.getElementsByClassName("tab-btn");

    for (let i = 0; i < tabBtns.length; i++) {

        tabBtns[i].classList.remove("active");

    }

    // Mostra a aba atual e adiciona a classe active ao botão

    document.getElementById(tabName).style.display = "block";

    document.getElementById(tabName).classList.add("active");

    evt.currentTarget.classList.add("active");

}


const closeBtn = document.getElementById("close-popup")

closeBtn.addEventListener('click', () => {
    const popup = document.getElementById("alert_popup")

    popup.style.display = "none"
    console.log("⚠️Popup fechado")
})

