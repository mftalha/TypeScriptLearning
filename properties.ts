// class yapısı kullanacaz : interface kullanmama sebebimiz : clasdan obje oluşturabiliyor olmamız

// herhangi bir methodun paremetrelerinin belli bir kalıba uyması için oluşturduk.
interface Point{
    x: number,
    y: number
}
// interface ile kullanacağımız fonksiyonların şemasını çıkarttık. == planını hazırlıyoruz sadece
interface Vehicle{
    travelTo(point: Point): void;
}
class Taxi implements Vehicle{

    constructor(private _location: Point , private color?: string){} //color'a soru işareti attığımızdan optional olarak tanımlamış oluyoruz : istersek girmeyebilriz.

    travelTo(point: Point): void{
        console.log(`taksi x: ${this._location.x} Y: ${this._location.y} dan x: ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }
    get Location(){
        return this._location;
    }
    set Location(value: Point){
        if(value.x <0 || value.y <0){
            throw new Error('kordinat bilgileri negatif olamaz');
        }
        this._location = value;
    }
}


let taxi_1: Taxi = new Taxi({x: 2, y: 5}); //color tanımlamadım isteğe bağlıydı
taxi_1.travelTo({ x: 1, y: 2 });

let currentLocation = taxi_1.Location;
taxi_1.Location = {x: 9, y: 7};






