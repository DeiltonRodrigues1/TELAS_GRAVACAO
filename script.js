async function getAdvice(){
    const resposta = await fetch("https://api.adviceslip.com/advice");
    //criou uma variável que está guardando os dados que vem da API
    //console.log(resposta);
    const data = await resposta.json();
    //Transformou em JSON a resposta que veio do fetch da API
    //console.log(data);

    document.querySelector("#advice").innerHTML = data.slip.advice;
    //data.slip.advice é o caminho para acessar o valor do objeto

}
 //botão funcionando
let botaoAdvice = document.querySelector("#get-advice");

botaoAdvice.addEventListener("click", function(){
getAdvice();

});


