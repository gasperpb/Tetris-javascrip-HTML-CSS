//Recuperando referência dos objetos no documento
var canvas = document.getElementById("tela");
var ctx = canvas.getContext("2d");
var btPausar = document.getElementById("btPausar");
var btNovo = document.getElementById("btNovo");


//Variáveis e Configurações do jogo
var nx = Math.floor(canvas.width / Bloco.largura);
var ny = Math.floor(canvas.height / Bloco.largura);
var tabuleiro = null;
var peca;
var pausa = true;

function novoJogo() {
    if (!pausa) {
        //pausar();
    }
    //Criar o tabuleiro vazio
    tabuleiro = new Array(nx);
    for (x = 0; x < nx; x++) {
        tabuleiro[x] = new Array(ny);
        for (y = 0; y < ny; y++) {
            tabuleiro[x][y] = null;
        }
    }
    //novaPeca();
    //criarIF();
    //desenharTudo();
    btNovo.disabled = false;
    btPausar.disabled = false;
    btPausar.innerHTML = "Iniciar";
}

function criarIF() {
    tabuleiro[0][ny - 4] = "#FF0000";
    tabuleiro[0][ny - 3] = "#00FF00";
    tabuleiro[0][ny - 2] = "#00FF00";
    tabuleiro[0][ny - 1] = "#00FF00";
    tabuleiro[1][ny - 4] = "#00FF00";
    tabuleiro[1][ny - 3] = "#00FF00";
    tabuleiro[1][ny - 2] = "#00FF00";
    tabuleiro[1][ny - 1] = "#00FF00";
    tabuleiro[2][ny - 4] = "#00FF00";
    tabuleiro[2][ny - 2] = "#00FF00";


}

function desenharTudo() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (x = 0; x < nx; x++) {
        for (y = 0; y < ny; y++) {
            if (tabuleiro[x][y] != null) {
                Bloco.desenhar(ctx, x, y,
                    tabuleiro[x][y]);
            }
        }
    }

    //peca.desenharBloco(ctx);
}

function novaPeca() {
    peca = new Bloco(Math.floor(nx / 2 - 1), 0, novaCor());

    function novaCor() {
        var r, g, b, dif;
        do {
            r = Math.round(255 * Math.random());
            g = Math.round(255 * Math.random());
            b = Math.round(255 * Math.random());
            dif = Math.abs(r - g) + Math.abs(g - b) + Math.abs(r - b);
        } while (dif < 60);
        var sr = r.toString(16);
        if (sr.length < 2) { sr = "0" + sr; }
        var sg = g.toString(16);
        if (sg.length < 2) { sg = "0" + sg; }
        var sb = b.toString(16);
        if (sb.length < 2) { sb = "0" + sb; }
        return ("#" + sr + sg + sb);

    }





}

novoJogo(); //Fora do método