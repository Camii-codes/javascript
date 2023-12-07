function contar() {
    let ini = window.document.getElementById('numi');
    let fim = window.document.getElementById('numf');
    let pass = window.document.getElementById('nump');
    let res = window.document.getElementById('res');

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        window.alert('[ERRO] Faltam dados!');
    } else {
        window.alert('TUDO OK!');
    }
}
