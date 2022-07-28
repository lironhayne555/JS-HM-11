"use strict";
let listCar=[
    {carName: "mazda",color:"black",yearbook:"2000"},
    {carName: "fiat500",color:"white",yearbook:"2021"},
    {carName: "BMV",color:"blue",yearbook:"2022"},
    {carName: "Audi",color:"black",yearbook:"2005"},
    {carName: "Toyota",color:"white",yearbook:"2010"},
    {carName: "Undai",color:"orange",yearbook:"2015"},
    {carName: "Shevrolet",color:"grey",yearbook:"2016"},
    {carName: "JEEP",color:"black",yearbook:"2020"},
    {carName: "Kaia",color:"white",yearbook:"2018"},
    {carName: "Siat Ibiza",color:"black",yearbook:"2021"},
    {carName: "Merzedes",color:"red",yearbook:"2014"}
];
let ShowMax=()=>
{
    var age=document.getElementById("age").value;
    var elem=document.getElementById("AllCar");
    let selectCars = listCar.filter((car) => 2022-car.yearbook < age);

    console.log(selectCars);
    selectCars.map((car) => {
        elem.innerHTML += `
      <div class='container'>
      <h4>Car Name: ${car.carName}</h4>
      <span>Car Color: ${car.color}</span><br></br>
      <span>Car Yearbook: ${car.yearbook}</span>
    </div>
      `;});
}

let AddCar=()=>{
    var name=document.querySelector("#carName").value;
    var c=document.querySelector("#color").value;
    var year=document.querySelector("#yearbook").value;
    listCar.push({carName: name,color:c,yearbook:year});

}


