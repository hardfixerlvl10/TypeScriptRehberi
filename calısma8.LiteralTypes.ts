/**
 * 1. ADIM: LITERAL TYPE (NOKTA ATIŞI TİP)
 * 'HizmetDurumu' adında bir tip oluşturuyoruz. 
 * Bu tip sadece 3 kelimeyi kabul eder. Başka hiçbir şey yazılamaz.
 * Bu sayede yanlışlıkla "aktif" (küçük harf) veya "hazır" gibi kelimeler girmeyi engelleriz.
 */
type HizmetDurumu = "Aktif" | "Pasif" | "Beklemede";

/**
 * 2. ADIM: TYPE ALIAS İLE OBJE ŞABLONU
 * 'Sirket' isminde bir yapı oluşturuyoruz.
 * 'durum' kısmına dikkat et; buraya string değil, yukarıdaki özel tipimizi verdik.
 */
type Sirket = {
    isim: string;
    durum: HizmetDurumu;
};

/**
 * 3. ADIM: FONKSİYON VE MANTIK KONTROLÜ
 * Gelen durumun ne olduğunu kontrol eden bir fonksiyon yazıyoruz.
 * TypeScript burada çok zekidir; case'leri yazarken sadece o 3 kelimeyi sana önerir.
 */
function durumKontrol(durum: HizmetDurumu) {
    switch (durum) {
        case "Aktif":
            console.log("Hizmet şu an veriliyor.");
            break;
        case "Pasif":
            console.log("Hizmet durduruldu.");
            break;
        case "Beklemede":
            console.log("Onay bekleniyor.");
            break;
        // Not: Buraya "Bilinmiyor" yazarsan TypeScript hata verir, çünkü öyle bir tip yok!
    }
}

/**
 * 4. ADIM: UYGULAMA VE TEST
 * Şimdi yazdıklarımızı test edelim.
 */
const yeniSirket: Sirket = {
    isim: "HardFIXER Yazılım",
    durum: "Aktif" // Buraya "Aktif" dışında bir şey yazarsan altını kırmızı çizer.
};

console.log(`${yeniSirket.isim} şirketinin durumu kontrol ediliyor...`);
durumKontrol(yeniSirket.durum);





// 2. örnek
// 1. Literal Type ve Type Alias Birleşimi
// Sadece bu 3 kelimeden birini kabul eder. Başka bir şey yazarsan TS kızar.
type ZorlukSeviyesi = "Easy" | "Medium" | "Hard";

// 2. Bir Obje Yapısı Kuruyoruz
type OyunAyarlari = {
    kullaniciAdi: string;
    zorluk: ZorlukSeviyesi; // Yukarıda tanımladığımız özel tipi kullandık
    sesSeviyesi: number;
};

// 3. Uygulama
const oyuncuAyari: OyunAyarlari = {
    kullaniciAdi: "HardFIXER",
    zorluk: "Hard",    // "Normal" yazarsan hata verir!
    sesSeviyesi: 80
};

function ayarGoster(ayar: OyunAyarlari) {
    console.log(`${ayar.kullaniciAdi} şu an ${ayar.zorluk} modunda oynuyor.`);
}

ayarGoster(oyuncuAyari);
