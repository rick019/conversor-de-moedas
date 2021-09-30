// function EscreverFrases(texto){
    // console.log(texto)
// }

// EscreverFrases("Tudo sei que nada sei")
// EscreverFrases("Sozinho vou rápido, juntos vamos longe")

//parseFloat --> converte de texto para decimal
//parseInt --> converte de texto para inteiro

function Converter(){
    //DOM - Document Object Model

    /**PEGAR O VALOR DO CAMPO */ 
    // let valorEmDolar= document.getElementById("valor").value

    let valorEmDolar = document.querySelector("#valor").value

    /** CONVERTER O VALOR DO CAMPO EM NÚMERO */
    let valorEmDolarNumerico = parseFloat(valorEmDolar)

    let cotacaoDolar = 5
    let valorEmReal = valorEmDolarNumerico * cotacaoDolar

    /**INSERIR O RESULTADO NA TELA */
    document.querySelector("#valorConvertido").innerHTML = "O resultado em real é R$ " + valorEmReal.toFixed(2)
}