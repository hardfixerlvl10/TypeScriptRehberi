// 1. Fonksiyon: String bekler
function sehirGoster(isim: string) {
    console.log("Şehir: " + isim);
} // <--- Parantezi burada kapattık

// 2. Fonksiyon: Number bekler
function plakaGoster(sayi: number) {
    console.log("Plakası: " + sayi);
} // <--- Parantezi burada kapattık

// 3. Fonksiyon: Boolean bekler
function metropolMu(soru: boolean) {
    console.log("Metropol şehri midir: " + soru);
} // <--- Parantezi burada kapattık

// ÇAĞIRMA KISMI (Doğru tiplerle)
sehirGoster("Niğde");      // " " içinde string
plakaGoster(51);           // Tırnaksız number
metropolMu(false);         // Tırnaksız boolean (true/false)
