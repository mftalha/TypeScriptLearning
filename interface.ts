// herhangi bir methodun paremetrelerinin belli bir kalıba uyması için oluşturduk.
interface Point{
    x: number,
    y: number
}

//bu yapıda interface kullanma sebebimiz ise : methodlarda kullanılacak değişkenlerin typlarını belirmek böylece değişkenleri girerken hatalı girmemizi type kontrolü enggeler.
interface Passenger {
    name: string;
    phone: string;
}

// interface ile kullanacağımız fonksiyonların şemasını çıkarttık. == planını hazırlıyoruz sadece
interface Vehicle{
    currentLocation: Point;
    travelTo(point: Point): void;
    getDistance(pointA: Point ,pointB: Point ):number;
    addPassenger(passenger: Passenger): void;
    removePassenger(passenger: Passenger):void ;
}

/*
let travelTo = (point: Point) => {
    // ..
}

let getDistance =(pointA: Point, pointB: Point) =>{
    // ..
}

travelTo({
    x: 1,
    y: 2
});
*/

// taxi_1 => 41 abc 41
// taxi_1.currentLocation //taksi 1 in o anki konumunu alacaz

// taxi_2 => 41 abd 41