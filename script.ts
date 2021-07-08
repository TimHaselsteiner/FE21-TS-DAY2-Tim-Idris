var transport = [];
class vehicles{

    Name : string;
    Year : number;
    Seats: number;
    Price: number;
    Fuel: string;
    Picture: string;

    constructor(Name,Year,Seats,Price,Fuel, Picture){

        this.Name = Name;
        this.Year = Year;
        this.Seats = Seats;
        this.Price = Price;
        this.Fuel = Fuel;
        this.Picture = Picture;

        transport.push(this);
    }

    printCard(){
        return `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${this.Picture}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${this.Name}</h5>
          <p class="card-text">${this.Year}</p>
          <a href="#" class="btn btn-primary showMore">Inspect</a>
        </div>
      </div>`

}

}

class Cars extends vehicles {
    
    constructor(Name, Year, Seats, Price , Fuel, Picture){

    super(Name, Year, Seats, Price, Fuel, Picture);

     
     }

     
     printCard(){
        return `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${this.Picture}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${this.Name}</h5>
          <p class="card-text">${this.Year}</p>
          <a href="#" class="btn btn-primary showMore">Inspect</a>
        </div>
      </div>`

}
}

class Motorbikes extends vehicles {
    
    constructor(Name, Year, Seats, Price , Fuel, Picture){

    super(Name, Year, Seats, Price, Fuel, Picture);

     
     }

     
     printCard(){
        return `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${this.Picture}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${this.Name}</h5>
          <p class="card-text">${this.Year}</p>
          <a href="#" class="btn btn-primary showMore">Inspect</a>
        </div>
      </div>`

}
}



var car1  = new Cars ("BMW i3", 2014, 4, 15000, "Electric", "https://id-cs.com/media/car_images/car_144/i3_Cappariswei%C3%9F-optimized.png");



var car2  = new Cars ("Toyota Corolla", 1991, 4, 9000, "Gasoline", "https://img-optimize.toyota-europe.com/resize/ccis/680x680/zip/at/product-token/e1940b9e-98b9-4bc9-baec-cd141bc899f3/vehicle/932ce2f7-907e-4267-b382-5c8c3d650214/image-quality/70/day-exterior-4_040.png" );



var car3  = new Cars ("VW Polo", 2008, 4, 12000, "Petrol", "https://upload.wikimedia.org/wikipedia/commons/9/99/VW_Polo_V_1.2_Comfortline_Pepper_Grey.JPG");



var car4  = new Cars ("Seat Alhambra", 2016, 7, 23000, "Petrol", "https://i.auto-bild.de/mdb/extra_large/14/alhambra-b39.jpg");





console.table(transport);

for( let val of transport){
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

function showMore(obj){
    console.log(obj);
    Swal.fire({
        title: `${obj.Name}`,
        html: `Year: ${obj.Year} <br> Seats: ${obj.Seats} <br> Fuel: ${obj.Fuel} <br> Price: ${obj.Price} €`,
        imageUrl: `${obj.Picture}`,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: `${obj.Name}`,
      })
}

var btns = document.getElementsByClassName("showMore");

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function(){
        showMore(transport[i]);
    })
}