var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi x: ".concat(point.x, " Y: ").concat(point.y, " konumuna gidiyor. "));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("otob\u00FCs x: ".concat(point.x, " Y: ").concat(point.y, " konumuna gidiyor. "));
    };
    return Bus;
}());
// taxi_1 => 41 abc 41
// taxi_1.currentLocation //taksi 1 in o anki konumunu alacaz
// taxi_2 => 41 abd 41
