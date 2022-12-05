// farklı sayfalardan ulaşılabilsin diye export ediyoruz.
export class Product{ //constroctur daki değerleri (id,name) gibi tanımlayıp üsttede bu değişkenleri public id, public name diyebilir ve constructer içinde this.id = id gibi kullanabilirdik ama bizim kullandığımız gibide kullanılabiliyor aynı şey
    constructor(
        public id?: number,
        public name?: string,
        public category?: string,
        public price?: number
    ){}
}

