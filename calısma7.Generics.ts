// 1. Generic Fonksiyon Tanımı
// <T> burada bir yer tutucudur. "Tip ne gelirse ona dönüş" demektir.
function ilkElemaniGetir<T>(liste: T[]): T {
    return liste[0];
}

// 2. String dizisi ile kullanımı
const isimler = ["HardFIXER", "Can", "Demir"];
const ilkIsim = ilkElemaniGetir<string>(isimler); 
console.log(`Dizinin ilk ismi: ${ilkIsim}`); // Çıktı: HardFIXER

// 3. Number dizisi ile kullanımı
const plakalar = [44, 34, 6, 51];
const ilkPlaka = ilkElemaniGetir<number>(plakalar);
console.log(`Dizinin ilk plakası: ${ilkPlaka}`); // Çıktı: 44

// 4. Karmaşık bir Obje dizisi ile kullanımı (Senior Seviyesi)
interface Kitap {
    ad: string;
}
const kitaplar: Kitap[] = [{ ad: "Nutuk" }, { ad: "Suç ve Ceza" }];
const ilkKitap = ilkElemaniGetir<Kitap>(kitaplar);
console.log(`İlk kitabın adı: ${ilkKitap.ad}`); // Çıktı: Nutuk
