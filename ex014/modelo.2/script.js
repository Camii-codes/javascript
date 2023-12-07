function contar(event) {
    event.preventDefault();
    let ini = window.document.getElementById('numi');
    let fim = window.document.getElementById('numf');
    let pass = window.document.getElementById('nump');
    let res = window.document.getElementById('res');

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        window.alert('[ERRO] Faltam dados!');
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(pass.value);

        /* O contador vai começar no ÍNICIO e enquanto
         o contador for menor ou igual ao FIM, o contador
          vai receber ele mesmo mais o PASSO */
        for(let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449}` 
        }
    }
} 
