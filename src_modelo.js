function verificar(){
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let res = document.querySelector('div#res');

    if(fano.value == 0 || fano.value > ano){
        window.alert('[ERRO] verifique os dados');
    }else{
        let fsex = document.getElementsByName('radsex');
        let idade = ano - fano.value;
        let genero = ``

        //criando a tag de imagem e id pelo script 
        let img = document.createElement('img');
        img.setAttribute('id','foto');

        //if que checa qual radio foi selecionado sem usar o id 
        if(fsex[0].checked){
            genero = `Homem`;

            if(idade >= 0 && idade <10){
                //criança
                img.setAttribute('src', 'bebeHomem.jpg');
            }else if(idade < 20){
                //jovem
                img.setAttribute('src', 'jovemHomem.jpg');
            }else if(idade < 50){
                //adulto
            }else if(idade < 100){
                //idoso
                img.setAttribute('src', 'idosoHomem.jpg');
            }else{
                window.alert('Tá veinho hein porakkkkkkk');
            }
            
        }else{
            genero = `Mulher`;

            if(idade >= 0 && idade <10){
                //criança
                img.setAttribute('src', 'bebeMulher.jpg');
            }else if(idade < 20){
                //jovem
                img.setAttribute('src', 'jovemMulher.jpg');
            }else if(idade < 50){
                //adulto
            }else if(idade < 100){
                //idoso
                img.setAttribute('src', 'idosoMulher.jpg');
            }else{
                window.alert('Tá veinho hein porakkkkkkk');
            }
        }
        //centralizando texto 
        res.style.textAlign = 'center';
        //exibe a mensagem com o valor das variaveis e calculadas se é homem ou mulher
        res.innerHTML = `Você é ${genero} com ${idade} anos!`;
        res.appendChild(img);
    }
}
