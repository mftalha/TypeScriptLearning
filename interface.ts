interface Point{
    x: number,
    y: number
}

//bu yapıda interface kullanma sebebimiz ise : methodlarda kullanılacak değişkenlerin typlarını belirmek böylece değişkenleri girerken hatalı girmemizi type kontrolü enggeler.
interface Passenger {
    name: string;
    phone: string;
}

// interface ile kullanacağımız fonksiyonların şemasını çıkarttık.
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