function verificar(){

let data = new Date();
let ano = data.getFullYear();
let formAno = document.getElementById('txtano');
let resultado = document.getElementById('resultado')
let button = document.getElementById('button');

    if(formAno.value.length == 0 || Number(formAno.value) > ano){
        alert('[ERRO] Verifique seus dados e tente novamente!')
    }
    else{
        let fsex = document.getElementsByName('sexo');
        let idade = ano - Number(formAno.value);
        let genero = ''
        let imagem = document.createElement('img');
        imagem.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade < 10){
                imagem.setAttribute('src', 'bebe-homem.jpg'); // Criança
            }
            else if(idade < 30){
                imagem.setAttribute('src', 'jovem-homem.jpg'); // Jovem
            }
            else if(idade < 50){
                imagem.setAttribute('src', 'adulto-homem.jpg'); // Adulto
            }
            else{
                imagem.setAttribute('src', 'idoso-homem.jpg'); // Idoso
            }
        }
        else{
            genero = 'Mulher';
            if(idade >= 0 && idade < 10){
                imagem.setAttribute('src', 'bebe-mulher.jpg'); // Criança
            }
            else if(idade < 30){
                imagem.setAttribute('src', 'jovem-mulher.jpg'); // Jovem
            }
            else if(idade < 50){
                imagem.setAttribute('src', 'adulto-mulher.jpg'); // Adulto
            }
            else{
                imagem.setAttribute('src', 'idosa-mulher.jpg'); // Idoso
            }
        }
        resultado.style.textAlign = 'center';
        resultado.innerHTML = `Você é ${genero} e tem ${idade} anos.`;
        resultado.appendChild(imagem);
    }
}



