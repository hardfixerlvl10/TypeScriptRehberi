class Oyuncu {
    public isim: string;      // Dışarıdan erişilebilir (Herkes görebilir)
    private can: number;      // Sadece bu sınıf içinden erişilebilir (Güvenli alan)

    constructor(isim: string) {
        this.isim = isim;
        this.can = 100;       // Her yeni oyuncu 100 canla başlar
    }

    // Karakterin canını azaltan metod
    public darbeAl(): void {
        this.can -= 10;
        
        if (this.can <= 0) {
            console.log(`${this.isim} maalesef elendi!`);
        } else {
            console.log(`${this.isim} darbe aldı! Kalan can: ${this.can}`);
        }
    }

    // Canın dışarıdan okunabilmesi için bir "getter" metodu (isteğe bağlı)
    public canDurumu(): number {
        return this.can;
    }
}

// --- Uygulama Kısmı ---

const kahraman = new Oyuncu("HardFIXER");

kahraman.darbeAl(); // HardFIXER darbe aldı! Kalan can: 90
kahraman.darbeAl(); // HardFIXER darbe aldı! Kalan can: 80

// kahraman.can = 500; // HATA! 'can' private olduğu için dışarıdan müdahale edilemez.
