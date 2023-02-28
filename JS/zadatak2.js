// Imamo login formu i provjeravamo:
// - da ima deset znakova
// - da su svi brojevi
// - da je jedinstven

var dobro = "1234567890";
var lose = "12589";


var password = dobro;
if (password.length > 10){
    password = skratiNaPrvihDesetZnakova(password);
}

if(provjeravamoBroj(password) === true){
        if(jedinstveniZnakovi(password)===true){
            console.log("Dobar password!");
        } else{
            console.log(`Nije dobra lozinka ${password}`);
        }
}else{
    console.log("Ne baš dobar password!" + password);
}