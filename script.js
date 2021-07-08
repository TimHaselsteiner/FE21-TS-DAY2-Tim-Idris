var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var transport = [];
var vehicles = /** @class */ (function () {
    function vehicles(Name, Year, Seats, Price, Fuel, Picture) {
        this.Name = Name;
        this.Year = Year;
        this.Seats = Seats;
        this.Price = Price;
        this.Fuel = Fuel;
        this.Picture = Picture;
        transport.push(this);
    }
    vehicles.prototype.printCard = function () {
        return "<div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" src=\"" + this.Picture + "\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">" + this.Name + "</h5>\n          <p class=\"card-text\">" + this.Year + "</p>\n          <a href=\"#\" class=\"btn btn-primary showMore\">Inspect</a>\n        </div>\n      </div>";
    };
    return vehicles;
}());
var Cars = /** @class */ (function (_super) {
    __extends(Cars, _super);
    function Cars(Name, Year, Seats, Price, Fuel, Picture) {
        return _super.call(this, Name, Year, Seats, Price, Fuel, Picture) || this;
    }
    Cars.prototype.printCard = function () {
        return "<div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" src=\"" + this.Picture + "\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">" + this.Name + "</h5>\n          <p class=\"card-text\">" + this.Year + "</p>\n          <a href=\"#\" class=\"btn btn-primary showMore\">Inspect</a>\n        </div>\n      </div>";
    };
    return Cars;
}(vehicles));
var Motorbikes = /** @class */ (function (_super) {
    __extends(Motorbikes, _super);
    function Motorbikes(Name, Year, Seats, Price, Fuel, Picture) {
        return _super.call(this, Name, Year, Seats, Price, Fuel, Picture) || this;
    }
    Motorbikes.prototype.printCard = function () {
        return "<div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" src=\"" + this.Picture + "\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">" + this.Name + "</h5>\n          <p class=\"card-text\">" + this.Year + "</p>\n          <a href=\"#\" class=\"btn btn-primary showMore\">Inspect</a>\n        </div>\n      </div>";
    };
    return Motorbikes;
}(vehicles));
var car1 = new Cars("BMW i3", 2014, 4, 15000, "Electric", "https://id-cs.com/media/car_images/car_144/i3_Cappariswei%C3%9F-optimized.png");
var car2 = new Cars("Toyota Corolla", 1991, 4, 9000, "Gasoline", "https://img-optimize.toyota-europe.com/resize/ccis/680x680/zip/at/product-token/e1940b9e-98b9-4bc9-baec-cd141bc899f3/vehicle/932ce2f7-907e-4267-b382-5c8c3d650214/image-quality/70/day-exterior-4_040.png");
var car3 = new Cars("VW Polo", 2008, 4, 12000, "Petrol", "https://upload.wikimedia.org/wikipedia/commons/9/99/VW_Polo_V_1.2_Comfortline_Pepper_Grey.JPG");
var car4 = new Cars("Seat Alhambra", 2016, 7, 23000, "Petrol", "https://i.auto-bild.de/mdb/extra_large/14/alhambra-b39.jpg");
console.table(transport);
for (var _i = 0, transport_1 = transport; _i < transport_1.length; _i++) {
    var val = transport_1[_i];
    document.getElementById("container").innerHTML += val.printCard();
}
// class Motorbikes extends vehicles {
//     constructor(Name, Year, Seats, Price , Fuel){
//     super(Name, Year, Seats, Price, Fuel);
// }
// }
// class Trucks extends vehicles {
//     constructor(Name, Year, Seats, Price , Fuel){
//     super(Name, Year, Seats, Price, Fuel);
// }
// }
function showMore(obj) {
    console.log(obj);
    Swal.fire({
        title: "" + obj.Name,
        html: "Year: " + obj.Year + " <br> Seats: " + obj.Seats + " <br> Fuel: " + obj.Fuel + " <br> Price: " + obj.Price + " \u20AC",
        imageUrl: "" + obj.Picture,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "" + obj.Name
    });
}
var btns = document.getElementsByClassName("showMore");
var _loop_1 = function (i) {
    btns[i].addEventListener("click", function () {
        showMore(transport[i]);
    });
};
for (var i = 0; i < btns.length; i++) {
    _loop_1(i);
}
