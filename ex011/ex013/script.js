function verificar() {
    let data = new Date ();
    let ano = data.getFullYear();
    let fano = window.document.getElementById('txtano');
    let res = window.document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.');
    } else {
        let fsex = window.document.getElementsByName('radsex');
        let idade = ano - Number(fano.value);
        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'img');
        
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/foto-crianca-m.png');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/foto-jovem-m.png');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/foto-adulto-m.png');
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/foto-idoso-m.png');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                // Criança 
                img.setAttribute('src', 'imagens/foto-crianca-f.png');
            } else if (idade < 21) {
                // Jovem 
                img.setAttribute('src', 'imagens/foto-jovem-f.png');
            } else if (idade < 50) {
                // Adulto 
                img.setAttribute('src', 'imagens/foto-adulta-f.png');
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/foto-idosa-f.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`; 
        res.appendChild(img);
    }
}