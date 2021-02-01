var Bloco = function(xi, yi, cori) {
    //Atributos dinâmicos
    this.x = xi;
    this.y = yi;
    this.estadoAtual = 0;
    this.mapa = todasPedras[Math.round(Math.random() *
        (todasPedras.length - 1))];
    this.maxEstados = this.mapa.length;
    this.cor = cori;
    //Métodos dinâmicos


    this.desenharBloco = function(context) {
        for (i = 0; i < this.mapa[this.estadoAtual].length; i++) {
            for (j = 0; j < this.mapa[this.estadoAtual][i].length; j++) {
                if (this.mapa[this.estadoAtual][i][j] == true) {
                    Bloco.desenhar(context, this.x + i,
                        this.y + j, this.cor);
                }
            }
        }
    };

}; //Fim parte dinâmica de Bloco
//Atributos estáticos
Bloco.corFundo = "#FFFFFF";
Bloco.espaco = 1;
Bloco.largura = 20;

//Método estático
Bloco.desenhar = function(context, x, y, corFrente) {
    context.fillStyle = Bloco.corFundo;
    var x1 = x * Bloco.largura;
    var y1 = y * Bloco.largura;
    context.fillRect(x1, y1, Bloco.largura, Bloco.largura);
    context.fillStyle = corFrente;
    x1 = x1 + Bloco.espaco;
    y1 = y1 + Bloco.espaco;
    context.fillRect(x1, y1, Bloco.largura - Bloco.espaco * 2,
        Bloco.largura - Bloco.espaco * 2);
}