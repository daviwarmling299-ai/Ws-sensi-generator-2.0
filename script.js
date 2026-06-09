// Registro do PWA
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("./service-worker.js")
            .then(() => console.log("Service Worker registrado"))
            .catch(() => console.log("Erro ao registrar Service Worker"));
    });
}

// Gerador de Nick
function gerarNick() {

    const nomes = [
        "WS", "GHOST", "NINJA", "PRO",
        "XIT", "DARK", "KING", "VIP",
        "FF", "MASTER", "ALPHA", "GOD"
    ];

    const simbolos = [
        "亗", "么", "ツ", "✿",
        "乂", "々", "★", "࿐"
    ];

    const nick =
        simbolos[Math.floor(Math.random() * simbolos.length)] +
        nomes[Math.floor(Math.random() * nomes.length)] +
        Math.floor(Math.random() * 999) +
        simbolos[Math.floor(Math.random() * simbolos.length)];

    const resultado = document.getElementById("nickResultado");

    if(resultado){
        resultado.innerHTML = `<h2>${nick}</h2>`;
    }
}

// Gerador de Sensi
function gerarSensi() {

    const geral = Math.floor(Math.random() * 100) + 1;
    const redDot = Math.floor(Math.random() * 100) + 1;
    const mira2x = Math.floor(Math.random() * 100) + 1;
    const mira4x = Math.floor(Math.random() * 100) + 1;
    const awm = Math.floor(Math.random() * 100) + 1;
    const dpi = Math.floor(Math.random() * 500) + 400;
    const botao = Math.floor(Math.random() * 35) + 40;

    const resultado = document.getElementById("resultado");

    if(resultado){
        resultado.innerHTML = `
            <h2>🎯 Sensibilidade Gerada</h2>

            <p>Geral: ${geral}</p>
            <p>Red Dot: ${redDot}</p>
            <p>Mira 2x: ${mira2x}</p>
            <p>Mira 4x: ${mira4x}</p>
            <p>AWM: ${awm}</p>

            <hr style="margin:15px 0;">

            <p>📱 DPI: ${dpi}</p>
            <p>🔥 Botão: ${botao}%</p>
        `;
    }
}
