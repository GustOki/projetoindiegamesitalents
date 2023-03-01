async function getAdvice(){
    const resposta = await fetch("https://api.adviceslip.com/advice");

    const data = await resposta.json();

    document.querySelector("#advice").innerHTML = data.slip.advice;
}

getAdvice();