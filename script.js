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
// CONTRATAR
// ======================================

document
    .getElementById("contratar")
    .addEventListener("click", function () {

        // Mostra a tela de aprovação
        mostrarTela("telaContratado");

        // Inicia os efeitos
        iniciarComemoracao();

        // Toca o som
        tocarSomAprovacao();

    });


// ======================================
// AVALIAR CURRÍCULO
// ======================================

document
    .getElementById("avaliar")
    .addEventListener("click", function () {

        mostrarTela("tela7");

    });


// ======================================
// COMEMORAÇÃO
// ======================================

function iniciarComemoracao() {

    const area =
        document.getElementById("efeitos");


    // ===============================
    // CONFETES
    // ===============================

    for (let i = 0; i < 45; i++) {

        const confete =
            document.createElement("div");

        confete.className = "confete";

        const simbolos = [
            "🎉",
            "✨",
            "🎊",
            "💙",
            "❤️"
        ];

        confete.textContent =
            simbolos[
                Math.floor(
                    Math.random() * simbolos.length
                )
            ];


        confete.style.left =
            Math.random() * 100 + "%";


        confete.style.animationDuration =
            (2.5 + Math.random() * 2.5) + "s";


        confete.style.animationDelay =
            Math.random() * 0.8 + "s";


        area.appendChild(confete);


        setTimeout(() => {

            confete.remove();

        }, 6000);

    }


    // ===============================
    // CORAÇÕES
    // ===============================

    for (let i = 0; i < 18; i++) {

        const coracao =
            document.createElement("div");

        coracao.className = "coracao";

        coracao.textContent = "❤️";


        coracao.style.left =
            Math.random() * 100 + "%";


        coracao.style.animationDuration =
            (3 + Math.random() * 2) + "s";


        coracao.style.animationDelay =
            Math.random() * 1.5 + "s";


        area.appendChild(coracao);


        setTimeout(() => {

            coracao.remove();

        }, 6000);

    }


    // ===============================
    // BRILHOS
    // ===============================

    for (let i = 0; i < 12; i++) {

        const brilho =
            document.createElement("div");

        brilho.className = "brilho";

        brilho.textContent = "✨";


        brilho.style.left =
            Math.random() * 90 + "%";


        brilho.style.top =
            Math.random() * 90 + "%";


        brilho.style.animationDelay =
            Math.random() * 1.5 + "s";


        area.appendChild(brilho);


        setTimeout(() => {

            brilho.remove();

        }, 3000);

    }

}


// ======================================
// SOM DE APROVAÇÃO
// ======================================

function tocarSomAprovacao() {

    try {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;


        const audio =
            new AudioContext();


        // Primeira nota
        tocarNota(
            audio,
            523.25,
            0,
            0.18
        );


        // Segunda nota
        tocarNota(
            audio,
            659.25,
            0.16,
            0.18
        );


        // Terceira nota
        tocarNota(
            audio,
            783.99,
            0.32,
            0.25
        );


        // Nota final
        tocarNota(
            audio,
            1046.50,
            0.50,
            0.45
        );


    } catch (erro) {

        console.log(
            "O navegador não permitiu o áudio."
        );

    }

}


// ======================================
// GERAR CADA NOTA
// ======================================

function tocarNota(
    audio,
    frequencia,
    atraso,
    duracao
) {

    const oscilador =
        audio.createOscillator();


    const ganho =
        audio.createGain();


    oscilador.type = "sine";

    oscilador.frequency.value =
        frequencia;


    oscilador.connect(ganho);

    ganho.connect(audio.destination);


    const inicio =
        audio.currentTime + atraso;


    ganho.gain.setValueAtTime(
        0.0001,
        inicio
    );


    ganho.gain.exponentialRampToValueAtTime(
        0.18,
        inicio + 0.03
    );


    ganho.gain.exponentialRampToValueAtTime(
        0.0001,
        inicio + duracao
    );


    oscilador.start(inicio);

    oscilador.stop(
        inicio + duracao + 0.05
    );

}
