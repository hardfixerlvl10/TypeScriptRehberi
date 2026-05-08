enum HavaDurumu {
    Gunesli,
    Yagmurlu,
    Bulutlu
}

// 'durum' isminde bir parametre alıyoruz, tipi 'HavaDurumu' enum'ı
function tavsiyeVer(durum: HavaDurumu) {
    if (durum === HavaDurumu.Gunesli) {
        console.log("Gözlüğünü yanına al");
    } else if (durum === HavaDurumu.Yagmurlu) {
        console.log("Şemsiyeni yanına al");
    } else if (durum === HavaDurumu.Bulutlu) {
        console.log("Montunu yanına al");
    }
} 

// Fonksiyonu çağırmayı unutma:
tavsiyeVer(HavaDurumu.Gunesli);


//Switch-Case 

function tavsiyeVerPro(durum: HavaDurumu) {
    switch (durum) {
        case HavaDurumu.Gunesli:
            console.log("Gözlük al!");
            break;
        case HavaDurumu.Yagmurlu:
            console.log("Şemsiye al!");
            break;
        default:
            console.log("Hava normal, devam et.");
    }
}
