//Створити функцію конструктор для об'єкту який описує теги
// function Objective(name,opus,mass) {
//         this.name = name;
//         this.opus = opus;
//         this.mass = mass;
// }
// let tagA = new Objective('a','Тег является одним из важных элементов HTML',{'atrib': 'accesskey', 'description':'Активация ссылки с помощью комбинации клавиш.'} )
// let tagDiv = new Objective('div', 'Элемент является блочным элементом', {'atrib': 'align', 'description':'Задает выравнивание содержимого тега'})
// let tagH1 = new Objective('div', 'Элемент является блочным элементом', {'atrib': 'align', 'description':'Задает выравнивание содержимого тега'})
// let tagSpan = new Objective('div', 'Элемент является блочным элементом', {'atrib': 'align', 'description':'Задает выравнивание содержимого тега'})
// let tagInput = new Objective('div', 'Элемент является блочным элементом', {'atrib': 'align', 'description':'Задает выравнивание содержимого тега'})
// let tagFrom = new Objective('div', 'Элемент является блочным элементом', {'atrib': 'align', 'description':'Задает выравнивание содержимого тега'})
// let tagOption = new Objective('div', 'Элемент является блочным элементом', {'atrib': 'align', 'description':'Задает выравнивание содержимого тега'})
// let tagSelect = new Objective('div', 'Элемент является блочным элементом', {'atrib': 'align', 'description':'Задает выравнивание содержимого тега'})

//-  Створити класс  для об'єкту який описує теги
// class Objective{
//     constructor(name,opus,mass) {
//         this.name = name;
//         this.opus = opus;
//         this.mass = mass;
//
//     }
//
// }
// let tagA = new Objective('a','Тег является одним из важных элементов HTML',{'atrib': 'accesskey', 'description':'Активация ссылки с помощью комбинации клавиш.'} )
// let tagDiv = new Objective('div', 'Элемент является блочным элементом', {'atrib': 'align', 'description':'Задает выравнивание содержимого тега'})
// let tagH1 = new Objective('div', 'Элемент является блочным элементом', {'atrib': 'align', 'description':'Задает выравнивание содержимого тега'})
// let tagSpan = new Objective('div', 'Элемент является блочным элементом', {'atrib': 'align', 'description':'Задает выравнивание содержимого тега'})
// let tagInput = new Objective('div', 'Элемент является блочным элементом', {'atrib': 'align', 'description':'Задает выравнивание содержимого тега'})
// let tagFrom = new Objective('div', 'Элемент является блочным элементом', {'atrib': 'align', 'description':'Задает выравнивание содержимого тега'})
// let tagOption = new Objective('div', 'Элемент является блочным элементом', {'atrib': 'align', 'description':'Задает выравнивание содержимого тега'})
// let tagSelect = new Objective('div', 'Элемент является блочным элементом', {'atrib': 'align', 'description':'Задает выравнивание содержимого тега'})

//- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// let car = {
//     model: 'x',
//     firma:'y',
//     year: 2020,
//     maxSpeed: 320,
//     engine:'3,5'
// }
//
// car.drive = function (){
//     console.log('We drive with speed ' + this.maxSpeed)
// }
// car.drive();
//
// car.info = function (){
//     console.log('model: '+this.model+' '+'firma: ' +this.firma+' '+'year: '+this.year+' '+'maxSpeed: '+this.maxSpeed+' '+'engine: '+this.engine)
// }
// car.info();
//
// car.increaseMaxSpeed = function (){
//     let newSpeed = 20;
//     console.log(this.maxSpeed + newSpeed);
// }
// car.increaseMaxSpeed();
//
// car.changeYear = function (){
//     let newYear = 2017
//     console.log(this.year = newYear)
// }
// car.changeYear()
//
// car.addDriver = function (){
//     car.driverCar = {
//         name: 'Igor',
//         age: '22'
//     };
// }
// car.addDriver();
// console.log(car)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// function Car(model, firma, year, maxSpeed, engine){
//     this.model = model;
//     this.firma = firma;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//
//     this.drive = function (){
//         console.log('We are drive with - ' + this.maxSpeed + ' hour')
//     }
//     this.info = function (){
//         console.log('model: ' +  this.model +' '+ 'firma: ' + this.firma +' '+ 'year: ' + this.year +' '+ 'maxSpeed: ' + this.maxSpeed + ' '+'engine: ' + this.engine)
//     }
//     this.increaseMaxSpeed = function (){
//         let newSpeed = 120;
//         console.log(this.maxSpeed + newSpeed)
//     }
//     this.changeYear = function (){
//         let newYear = 2022;
//         console.log(this.year = newYear)
//     }
//     this.addDriver = function (){
//         let driver = {
//             name:'Igor',
//             age:21 }
//     }
//
// }
//
// let Mazda = new Car('6','Mazda', 2015, 180, 2.0);
// console.log(Mazda)
// Mazda.drive();
// Mazda.info();
// Mazda.increaseMaxSpeed();
// Mazda.changeYear();
// Mazda.addDriver();
// console.log(Mazda)

//- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// class CreateCar{
//     constructor(model, firma, year, maxSpeed, engine) {
//         this.model = model;
//         this.firma = firma;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//     drive(){
//         console.log('we dri wi speed: ' + this.maxSpeed)
//     }
//     info(){
//         console.log('model: ' +  this.model +' '+ 'firma: ' + this.firma +' '+ 'year: ' + this.year +' '+ 'maxSpeed: ' + this.maxSpeed + ' '+'engine: ' + this.engine)
//     }
//     increaseMaxSpeed(){
//         let newSpeed = 100;
//         console.log(this.maxSpeed + newSpeed)
//     }
//     changeYear(){
//         let newYear = 2025;
//         console.log(this.year = newYear)
//     }
//     addDriver(){
//             let driver ={
//                 name:'Allex',
//                 age:21,
//             }
//
//     }
//
//
// }
// VW = new CreateCar('CC', 'VW',2018, 300, 2.0);
// console.log(VW)
// VW.drive();
// VW.info();
// VW.increaseMaxSpeed();
// VW.changeYear();
// VW.addDriver();

//-створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
//
class Popelushka{
    constructor(name,age,sizeLasty) {
        this.name = name;
        this.age = age;
        this.sizeLasty = sizeLasty;
    }
}
p1 = new Popelushka('Name1',21,32)
p2 = new Popelushka('Name2',22,33)
p3 = new Popelushka('Name3',23,34)
p4 = new Popelushka('Name4',24,35)
p5 = new Popelushka('Name5',25,36)
p6 = new Popelushka('Name6',26,37)
p7 = new Popelushka('Name7',27,38)
p8 = new Popelushka('Name8',28,39)
p9 = new Popelushka('Name9',29,40)
p10 = new Popelushka('Name10',10,41)

class Prince{
    constructor(name,age,sizeMeshta) {
        this.name = name;
        this.age = age;
        this.sizeMeshta = sizeMeshta;
    }
}
prince1 = new Prince('Oleg', 24, 40);

let popeluh = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10];
function search(){
        let  i = 0;
        while (i<popeluh.length){
            let elements = Object.values(popeluh[i]);
            i++
            if (elements[2] === prince1.sizeMeshta){
                console.log(elements[0] + ' must be with ' + prince1.name)
            }

        }
}
search();