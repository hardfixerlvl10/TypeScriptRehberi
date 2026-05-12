// Temel bir Kullanıcı arayüzü
interface Kullanici {
    id: number;
    isim: string;
    email: string;
    yas: number;
}

// --- 1. Partial Kullanımı ---
// Kullanıcının sadece istediğimiz alanlarını güncellemek için kullanırız.
function kullaniciGuncelle(id: number, yeniVeriler: Partial<Kullanici>) {
    console.log(`${id} ID'li kullanıcının verileri güncelleniyor...`);
    // 'yeniVeriler' içinde sadece 'isim' veya sadece 'yas' olabilir. Hepsi zorunlu değil!
}

kullaniciGuncelle(1, { yas: 25 }); // Sadece yaş gönderdik, hata vermedi!


// --- 2. Readonly Kullanımı ---
// Bilgilerin değiştirilmesini yasaklarız.
const sabitVeri: Readonly<Kullanici> = {
    id: 1,
    isim: "HardFIXER",
    email: "test@mail.com",
    yas: 20
};

// sabitVeri.yas = 21; // HATA! Çünkü Readonly kilitledi.


// --- 3. Pick Kullanımı ---
// Sadece isim ve email içeren kısıtlı bir tip oluşturuyoruz.
type KullaniciOzet = Pick<Kullanici, "isim" | "email">;

const ozetBilgi: KullaniciOzet = {
    isim: "Can",
    email: "can@mail.com"
    // id veya yas yazarsan hata verir, çünkü onları seçmedik!
};
