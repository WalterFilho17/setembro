let fugas = 0;

const mensagens = [
    "Tem certeza? 👀",
    "Pensa com carinho... ❤️",
    "Presidente Figueiredo parece uma boa ideia 😂",
    "Uma cachoeira pode mudar sua decisão... 🌿💦",
    "Mais uma tentativa? 😌",
    "Última fuga. Prometo 😂"
];

function mostrarTela(numero) {

    document.querySelectorAll(".card").forEach(card => {
        card.classList.add("hidden");
    });

    document
        .getElementById("tela" + numero)
        .classList.remove("hidden");
}


// ===============================
// BOTÃO SIM
// ===============================

document.getElementById("sim").addEventListener("click", function () {

    document.querySelectorAll(".card").forEach(card => {
        card.classList.add("hidden");
    });

    document
        .getElementById("telaSim")
        .classList.remove("hidden");

    /*
     * COLOQUE SEU NÚMERO AQUI
     *
     * Formato:
     * 55 + DDD + número
     *
     * Exemplo:
     * 5592999999999
     */

    const numeroWhatsApp = "5592984738483";

    const mensagem =
        "Oi! Eu aceito ir para Presidente Figueiredo com você ❤️ Agora vamos escolher o dia? 😌";

    const link =
        "https://wa.me/" +
        numeroWhatsApp +
        "?text=" +
        encodeURIComponent(mensagem);

    document
        .getElementById("whatsapp")
        .href = link;

});


// ===============================
// BOTÃO NÃO
// ===============================

document.getElementById("nao").addEventListener("click", function () {

    /*
     * Se já fugiu 6 vezes,
     * o botão deixa de fugir.
     */

    if (fugas >= 6) {

        document.querySelectorAll(".card").forEach(card => {
            card.classList.add("hidden");
        });

        document
            .getElementById("telaNao")
            .classList.remove("hidden");

        return;
    }

    fugas++;

    const mensagem =
        document.getElementById("mensagem");

    mensagem.textContent =
        mensagens[fugas - 1];


    /*
     * Faz o botão fugir.
     */

    const x =
        Math.floor(Math.random() * 160) - 80;

    const y =
        Math.floor(Math.random() * 80) - 40;

    this.style.transform =
        `translate(${x}px, ${y}px)`;


    /*
     * Na sexta fuga,
     * avisa que acabou a brincadeira.
     */

    if (fugas === 6) {

        mensagem.textContent =
            "Última fuga 😌 Depois disso você pode escolher normalmente.";

    }

});
