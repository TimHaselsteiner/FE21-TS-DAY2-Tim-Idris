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
        return `
        <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${this.Picture}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${this.Name}</h5>
          <p class="card-text">${this.Year}</p>
          <a href="#" class="btn btn-primary showMore">Inspect</a>
        </div>
        
        </div>
        </div>
      `

}

}

class Cars extends vehicles {
    
    constructor(Name, Year, Seats, Price , Fuel, Picture){

    super(Name, Year, Seats, Price, Fuel, Picture);

     
     }

     
     printCard(){
        return `
        <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${this.Picture}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${this.Name}</h5>
          <p class="card-text">${this.Year}</p>
          <a href="#" class="btn btn-primary showMore">Inspect</a>
        </div>
        </div>
        </div>`

}
}

class Motorbikes extends vehicles {
    
    constructor(Name, Year, Seats, Price , Fuel, Picture){

    super(Name, Year, Seats, Price, Fuel, Picture);

     
     }

     
     printCard(){
        return `<div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${this.Picture}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${this.Name}</h5>
          <p class="card-text">${this.Year}</p>
          <a href="#" class="btn btn-primary showMore">Inspect</a>
        </div>
      </div>
      </div>`

}
}



var car1  = new vehicles ("BMW i3", 2014, 4, 15000, "Electric", "https://id-cs.com/media/car_images/car_144/i3_Cappariswei%C3%9F-optimized.png");



var car2  = new vehicles ("Toyota Corolla", 1991, 4, 9000, "Gasoline", "https://img-optimize.toyota-europe.com/resize/ccis/680x680/zip/at/product-token/e1940b9e-98b9-4bc9-baec-cd141bc899f3/vehicle/932ce2f7-907e-4267-b382-5c8c3d650214/image-quality/70/day-exterior-4_040.png" );



var car3  = new vehicles ("VW Polo", 2008, 4, 12000, "Petrol", "https://upload.wikimedia.org/wikipedia/commons/9/99/VW_Polo_V_1.2_Comfortline_Pepper_Grey.JPG");


var car4  = new vehicles ("Access Shade 200",2019  ,1 , 2800 , "Gasoline", "https://prod.pictures.autoscout24.net/listing-images/c66aa684-0fa0-4bf0-9c5f-1bd9a668bf22_035fc050-363f-4e5f-9c84-68a479ce8359.jpg/640x480.jpg");


var bike1  = new vehicles (" TGB Bullet RS", 2015, 2, 700, "Gasoline 2T", "https://prod.pictures.autoscout24.net/listing-images/3fd65196-c209-4e9d-ba72-6681e90b87b1_b1ceea49-6208-4463-9efb-41ccb240eef9.jpg/640x480.jpg");

var bike2  = new vehicles ("Kawasaki ZX 750 GPZR ",
1987 , 1, 1490 , "Gasoline", "https://prod.pictures.autoscout24.net/listing-images/fb387a40-bc53-46ac-a004-e83c49e5bf75_9b768e54-400c-4949-9703-335dff2fa6a7.jpg/640x480.jpg");

var bike3  = new vehicles ("Honda Transalp 600VP ",1999, 2 , 2000, "Gasoline", "https://prod.pictures.autoscout24.net/listing-images/15198537-2dba-48bc-8e02-456d0bc2f0f7_d3ea6cad-201a-4f3a-9408-8d3c8c5975a0.jpg/640x480.jpg");

var bike4  = new vehicles ("Yamaha FZS 1000 RN06 Tourer",2003 ,2 , 2300, "Gasoline", "https://prod.pictures.autoscout24.net/listing-images/ad021b28-a0e6-45a5-bae8-6a0b19901e94_d2456988-8d69-419f-a678-02cb05f2c1d3.jpg/640x480.jpg");







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