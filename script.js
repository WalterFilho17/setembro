let fugas = 0;


// ===============================
// NAVEGAÇÃO ENTRE TELAS
// ===============================

function mostrarTela(numero) {

    document
        .querySelectorAll(".card")
        .forEach(card => {

            card.classList.add("hidden");

        });

    document
        .getElementById("tela" + numero)
        .classList.remove("hidden");
}


// ===============================
// BOTÃO SIM
// ===============================

document
    .getElementById("sim")
    .addEventListener("click", function () {

        document
            .querySelectorAll(".card")
            .forEach(card => {

                card.classList.add("hidden");

            });

        document
            .getElementById("telaSim")
            .classList.remove("hidden");


        // =====================================
        // COLOQUE SEU NÚMERO DE WHATSAPP AQUI
        // =====================================

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

document
    .getElementById("nao")
    .addEventListener("click", function () {


        /*
         * Depois de 6 fugas,
         * o botão deixa de fugir.
         */

        if (fugas >= 6) {

            document
                .querySelectorAll(".card")
                .forEach(card => {

                    card.classList.add("hidden");

                });

            document
                .getElementById("telaNao")
                .classList.remove("hidden");

            return;
        }


        fugas++;


        const mensagens = [

            "Tem certeza? 👀",

            "Pensa com carinho... ❤️",

            "Presidente Figueiredo parece uma boa ideia 😂",

            "Uma cachoeira está esperando por nós 🌿💦",

            "Mais uma tentativa? 😌",

            "Última fuga. Prometo 😂"

        ];


        document
            .getElementById("mensagem")
            .textContent = mensagens[fugas - 1];


        /*
         * Faz o botão fugir.
         */

        const x =
            Math.floor(
                Math.random() * 160
            ) - 80;


        const y =
            Math.floor(
                Math.random() * 80
            ) - 40;


        this.style.transform =
            `translate(${x}px, ${y}px)`;


        /*
         * Na sexta fuga,
         * avisa que acabou a brincadeira.
         */

        if (fugas === 6) {

            document
                .getElementById("mensagem")
                .textContent =
                "Última fuga 😌 Depois disso você pode escolher normalmente.";

        }

    });
