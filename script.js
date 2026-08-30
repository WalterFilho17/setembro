// ======================================
// NAVEGAÇÃO
// ======================================

function mostrarTela(id) {

    document
        .querySelectorAll(".card")
        .forEach(card => {

            card.classList.add("hidden");

        });

    document
        .getElementById(id)
        .classList.remove("hidden");

}


// ======================================
// BOTÃO CONTRATAR
// ======================================

document
    .getElementById("contratar")
    .addEventListener("click", function () {

        mostrarTela("telaContratado");

    });


// ======================================
// BOTÃO AVALIAR CURRÍCULO
// ======================================

document
    .getElementById("avaliar")
    .addEventListener("click", function () {

        mostrarTela("tela7");

    });
