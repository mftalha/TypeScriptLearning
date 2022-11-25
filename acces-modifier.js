// class yapısı kullanacaz : interface kullanmama sebebimiz : clasdan obje oluşturabiliyor olmamız
var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
    } //color'a soru işareti attığımızdan optional olarak tanımlamış oluyoruz : istersek girmeyebilriz.
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi x: ".concat(this.location.x, " Y: ").concat(this.location.y, " dan x: ").concat(point.x, " Y: ").concat(point.y, " konumuna gidiyor."));
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 2, y: 5 }); //color tanımlamadım isteğe bağlıydı
taxi_1.travelTo({ x: 1, y: 2 });
