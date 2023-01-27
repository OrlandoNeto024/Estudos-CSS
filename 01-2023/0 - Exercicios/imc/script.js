function calcular(){
    const peso = document.getElementById('peso').value;
    if (peso == ''){
        alert('Digite um peso válido.')
        
    }
    const altura = document.getElementById('altura').value;
    if (altura == ''){
        alert('Digite uma altura válida')
    }
   
    var imc = peso / (altura * altura)
    imc = imc.toFixed(2)
    
    const resposta = document.getElementById('resposta');
    resposta.innerHTML = `<div id="resposta"><h3>SEU IMC: ${imc} </h3></div>`;

    const text = document.getElementById('text');

    if (imc < 18.5){
        text.innerHTML = '<p>Sua classificação é: Magreza</p>'
    }
    if (imc >= 18.5 && imc < 24.9){
        text.innerHTML = '<p>Sua classificação é: Normal</p>'
    }
    if (imc > 25 && imc < 29.9){
        text.innerHTML = '<p>Sua classificação é: Sobrepeso. Obesidade Grau 1</p>'
    }
    if (imc > 30 && imc < 39.9){
        text.innerHTML = '<p>Sua classificação é: Obeso. Obesidade Grau 2</p>'
    }
    if (imc > 40){
        text.innerHTML = '<p>Sua classificação é: Obesidade grave. Obesidade Grau 3</p>'
    }
    
}

