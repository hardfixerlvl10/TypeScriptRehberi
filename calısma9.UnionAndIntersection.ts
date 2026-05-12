// --- UNION ÖRNEĞİ ---
type Telefon = string | number;

function aramaYap(no: Telefon) {
    if (typeof no === "string") {
        console.log("Metin tipindeki numara aranıyor: " + no);
    } else {
        console.log("Sayı tipindeki numara aranıyor: " + no);
    }
}

// --- INTERSECTION ÖRNEĞİ ---
interface Havayolu {
    sirketAdi: string;
}

interface UcusBilgisi {
    ucusKodu: string;
    saat: number;
}

// İki yapıyı birleştirdik
type Bilet = Havayolu & UcusBilgisi;

const yolcuBileti: Bilet = {
    sirketAdi: "Türk Hava Yolları",
    ucusKodu: "THY",
    saat: 2100
};

console.log(`${yolcuBileti.sirketAdi} ile ${yolcuBileti.ucusKodu} seferine bilet kesildi.`);
aramaYap("0555123");
aramaYap(555123);
