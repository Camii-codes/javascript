let hora = 0;

if (hora < 5) {
    console.log(`Boa Madrugada! Agora são exatamente ${hora}h.`)
} else if (hora < 12) {
    console.log(`Bom dia! Agora são exatamente ${hora}h.`);
} else if (hora <= 18) {
    console.log(`Boa Tarde! Agora são exatamente ${hora}h.`);
} else {
    console.log(`Boa Noite! Agora são exatamente ${hora}h.`);
}