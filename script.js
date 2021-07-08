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
        return "<div class=\"row\">\n        <div class=\"col-lg-3 col-md-6 col-sm-12\">\n        <div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" src=\"" + this.Picture + "\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">" + this.Name + "</h5>\n          <p class=\"card-text\">" + this.Year + "</p>\n          <a href=\"#\" class=\"btn btn-primary showMore\">Inspect</a>\n        </div>\n        \n        </div>\n        </div>\n      </div>";
    };
    return vehicles;
}());
var Cars = /** @class */ (function (_super) {
    __extends(Cars, _super);
    function Cars(Name, Year, Seats, Price, Fuel, Picture) {
        return _super.call(this, Name, Year, Seats, Price, Fuel, Picture) || this;
    }
    Cars.prototype.printCard = function () {
        return "<div class=\"row\">\n        <div class=\"col-lg-3 col-md-6 col-sm-12\">\n        <div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" src=\"" + this.Picture + "\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">" + this.Name + "</h5>\n          <p class=\"card-text\">" + this.Year + "</p>\n          <a href=\"#\" class=\"btn btn-primary showMore\">Inspect</a>\n        </div>\n        </div>\n        </div>\n      </div>";
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
var car1 = new vehicles("BMW i3", 2014, 4, 15000, "Electric", "https://id-cs.com/media/car_images/car_144/i3_Cappariswei%C3%9F-optimized.png");
var car2 = new vehicles("Toyota Corolla", 1991, 4, 9000, "Gasoline", "https://img-optimize.toyota-europe.com/resize/ccis/680x680/zip/at/product-token/e1940b9e-98b9-4bc9-baec-cd141bc899f3/vehicle/932ce2f7-907e-4267-b382-5c8c3d650214/image-quality/70/day-exterior-4_040.png");
var car3 = new vehicles("VW Polo", 2008, 4, 12000, "Petrol", "https://upload.wikimedia.org/wikipedia/commons/9/99/VW_Polo_V_1.2_Comfortline_Pepper_Grey.JPG");
var car4 = new vehicles("Access Shade 200", 2019, 1, 2800, "Gasoline", "https://prod.pictures.autoscout24.net/listing-images/c66aa684-0fa0-4bf0-9c5f-1bd9a668bf22_035fc050-363f-4e5f-9c84-68a479ce8359.jpg/640x480.jpg");
var bike1 = new vehicles(" TGB Bullet RS", 2015, 2, 700, "Gasoline 2T", "https://prod.pictures.autoscout24.net/listing-images/3fd65196-c209-4e9d-ba72-6681e90b87b1_b1ceea49-6208-4463-9efb-41ccb240eef9.jpg/640x480.jpg");
var bike2 = new vehicles("Kawasaki ZX 750 GPZR ", 1987, 1, 1490, "Gasoline", "https://prod.pictures.autoscout24.net/listing-images/fb387a40-bc53-46ac-a004-e83c49e5bf75_9b768e54-400c-4949-9703-335dff2fa6a7.jpg/640x480.jpg");
var bike3 = new vehicles("Honda Transalp 600VP ", 1999, 2, 2000, "Gasoline", "https://prod.pictures.autoscout24.net/listing-images/15198537-2dba-48bc-8e02-456d0bc2f0f7_d3ea6cad-201a-4f3a-9408-8d3c8c5975a0.jpg/640x480.jpg");
var bike4 = new vehicles("Yamaha FZS 1000 RN06 Tourer", 2003, 2, 2300, "Gasoline", "https://prod.pictures.autoscout24.net/listing-images/ad021b28-a0e6-45a5-bae8-6a0b19901e94_d2456988-8d69-419f-a678-02cb05f2c1d3.jpg/640x480.jpg");
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
