function contar() {
    let ini = window.document.getElementById('numi');
    let fim = window.document.getElementById('numf');
    let pass = window.document.getElementById('nump');
    let res = window.document.getElementById('res');

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        window.alert('[ERRO] Faltam dados!');
        res.innerHTML =  'Imposível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(pass.value);

        /* O contador vai começar no ÍNICIO e enquanto
         o contador for menor ou igual ao FIM, o contador
          vai receber ele mesmo mais o PASSO */
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1');
            p = 1;
        }
        
          if (i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}` 
            }
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}` 
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }
} 
