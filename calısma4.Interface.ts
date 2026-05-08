interface Karakter {
    isim: string;          // Küçük harf 'string'
    seviye: number;        // Küçük harf 'number'
    klan?: string;         // Opsiyonel
    readonly id: number;   // Sadece okunabilir
}

let karakterim: Karakter = {
    isim: "HardFIXER",
    seviye: 10,
    klan: "FIX",           // Soru işareti burada yazılmaz
    id: 1                  // readonly burada yazılmaz
};

function karakterBilgisi(k: Karakter) {
    // 'k' parametresini kullanmak daha profesyoneldir
    console.log(`Karakter: ${k.isim}, Seviye: ${k.seviye}, Klan: ${k.klan || "Yok"}`);
}

karakterBilgisi(karakterim);
