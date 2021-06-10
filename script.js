function resultA() {
    var coeficientePt = parseFloat(document.getElementById("coeficiente-pt").value);
    var prJogador = parseFloat(document.getElementById("pr-jogador").value);
    var ptRodadaDois = parseFloat(document.getElementById("pt-rodada-dois").value);
    var ptRodadaUm = parseFloat(document.getElementById("pt-rodada-um").value); 
 
    var resultadoA = ((coeficientePt * prJogador + ptRodadaDois) - 2 * ptRodadaUm) / 14;
  
    document.getElementById("resultado-final").innerHTML = resultadoA.toFixed(2);
  
    console.log(coeficientePt);
  
  }
  
  
  
  function result() {
    var coeficientePt = parseFloat(document.getElementById("coeficiente-pt-a").value);
    var prJogador = parseFloat(document.getElementById("pr-jogador-b").value);
    var ptRodadaUm = parseFloat(document.getElementById("pt-rodada-um-b").value);
  
    var resultadoA = ((coeficientePt * prJogador)- 4 * ptRodadaUm) / 7;
  
    document.getElementById("resultado-final-b").innerHTML = resultadoA.toFixed(2);
  
    console.log(coeficientePt);
  }