class BankaHesabi {
    sahip: string;
    private bakiye: number; // 'private' sayesinde dışarıdan kimse bakiyeyi değiştiremez!

    constructor(isim: string, ilkBakiye: number) {
        this.sahip = isim;
        this.bakiye = ilkBakiye;
    }

    paraYatir(miktar: number) {
        this.bakiye += miktar;
        console.log(`${miktar} TL yatırıldı. Yeni bakiye: ${this.bakiye}`);
    }
}

const benimHesabim = new BankaHesabi("HardFIXER", 1000);
benimHesabim.paraYatir(500);
