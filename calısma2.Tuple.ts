let sevdigimYemekler: string[] = ["Karnıyarık", "Tavuk Pilav", "Mantı", "Biber Dolması"];
let plakaKodu: [string, number] = ["Malatya", 44];

// Fonksiyonun içine gelen 'veri' bir Tuple [string, number] olmalı
function ismiyazdir(veri: [string, number]) {
    console.log(`Şehir: ${veri[0]}, Plakası: ${veri[1]}`);
}

// Fonksiyonu yukarıda tanımladığımız Tuple ile çağırıyoruz
ismiyazdir(plakaKodu);
