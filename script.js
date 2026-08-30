const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const response = document.getElementById("response");
const counter = document.getElementById("counter");

let fugas = 0;

const mensagens = [
    "Tem certeza? 👀",
    "Pensa com carinho... ❤️",
    "Presidente Figueiredo está esperando 😂",
    "Uma cachoeira pode mudar sua decisão... 🌊",
    "Essa foi a penúltima tentativa de fuga 😌",
    "Tá bom, agora eu paro de fugir 😂"
];

noButton.addEventListener("click", function () {

    /*
     * Depois de 6 fugas,
     * o botão passa a funcionar normalmente.
     */

    if (fugas >= 6) {

        response.classList.remove("hidden");

        response.innerHTML = `
            <h3>Tudo bem 😊</h3>

            <p>
                Sem problema, Gabriela.
                Obrigado por responder ❤️
            </p>
        `;

        noButton.style.position = "relative";

        counter.textContent = "";

        return;
    }

    fugas++;

    counter.textContent =
        mensagens[fugas - 1];

    /*
     * Faz o botão mudar de posição.
     */

    const maxX = 120;
    const maxY = 40;

    const x =
        Math.floor(
            Math.random() * (maxX * 2 + 1)
        ) - maxX;

    const y =
        Math.floor(
            Math.random() * (maxY * 2 + 1)
        ) - maxY;

    noButton.style.transform =
        `translate(${x}px, ${y}px)`;

    /*
     * Na sexta fuga,
     * avisamos que acabou a brincadeira.
     */

    if (fugas === 6) {

        counter.textContent =
            "Última fuga. Depois disso você pode clicar normalmente 😌";
    }
});


/*
 * BOTÃO SIM
 */

yesButton.addEventListener("click", function () {

    response.classList.remove("hidden");

    response.innerHTML = `
        <h3>Então temos um passeio! ❤️</h3>

        <p>
            Eu gostei dessa resposta. 😌
        </p>

        <p>
            Agora só precisamos combinar
            o melhor dia para irmos para
            <strong>Presidente Figueiredo</strong>. 🌿💦
        </p>

        <a
            class="whatsapp"
            href="https://wa.me/5592984738483?text=Oi!%20Eu%20aceito%20ir%20para%20Presidente%20Figueiredo%20com%20voc%C3%AA%20%F0%9F%98%8A%E2%9D%A4%EF%B8%8F"
            target="_blank"
        >
            Confirmar pelo WhatsApp 💬
        </a>
    `;

    /*
     * Esconde os botões depois do SIM.
     */

    yesButton.style.display = "none";
    noButton.style.display = "none";

    counter.textContent = "";
});
