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
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car----НЕЗНАЮ
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
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car----НЕЗНАЮ
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
//     this.increaseMaxSpeed = function (newSpeed){
//         console.log(this.maxSpeed + newSpeed)
//     }
//     this.changeYear = function (newYear){
//
//         console.log(this.year = newYear)
//     }
//     this.addDriver = function (driver){
//           this.driver = driver
//     }
//
// }
//
// let Mazda = new Car('6','Mazda', 2015, 180, 2.0);
// console.log(Mazda)
// Mazda.drive();
// Mazda.info();
// Mazda.increaseMaxSpeed(190);
// Mazda.changeYear(2035);
// Mazda.addDriver({name:'Petro', age:21});
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
//     addDriver(driver){
//             this.driver = driver;
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
// VW.addDriver({name:'Vasil',age:21});
// console.log(VW)


// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// class Popelushka{
//     constructor(name,age,size) {
//         this.name = name;
//         this.age = age
//         this.size = size;
//     }
// }
// p1 = new Popelushka('Name1', 21,31);
// p2 = new Popelushka('Name2', 22,32);
// p3 = new Popelushka('Name3', 23,33);
// p4 = new Popelushka('Name4', 24,34);
// p5 = new Popelushka('Name5', 25,35);
// p6 = new Popelushka('Name6', 26,36);
// p7 = new Popelushka('Name7', 27,37);
// p8 = new Popelushka('Name8', 28,38);
// p9 = new Popelushka('Name9', 29,39);
// p10 = new Popelushka('Name10', 30,40);
//
// class Prince{
//     constructor(name,age,sizeSearch) {
//         this.name = name;
//         this.age = age;
//         this.sizeSearch = sizeSearch;
//     }
// }
// prince = new Prince('Ashot',40,34);
//
// let escort = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10]
//
// function search(){
//     let  i = 0;
//         while (i<escort.length){
//             let elements = Object.values(escort[i]);
//             i++
//             if (elements[2] === prince.sizeSearch){
//                 console.log(elements[0] + ' must be with ' + prince.name)
//             }
//         }
// }
// search();
//

//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// function Popelushka(name,age,sizeLasty) {
//         this.name = name;
//         this.age = age;
//         this.sizeLasty = sizeLasty;
// }
// p1 = new Popelushka('Name1',21,32)
// p2 = new Popelushka('Name2',22,33)
// p3 = new Popelushka('Name3',23,34)
// p4 = new Popelushka('Name4',24,35)
// p5 = new Popelushka('Name5',25,36)
// p6 = new Popelushka('Name6',26,37)
// p7 = new Popelushka('Name7',27,38)
// p8 = new Popelushka('Name8',28,39)
// p9 = new Popelushka('Name9',29,40)
// p10 = new Popelushka('Name10',10,41)
//
// class Prince{
//     constructor(name,age,sizeMeshta) {
//         this.name = name;
//         this.age = age;
//         this.sizeMeshta = sizeMeshta;
//     }
// }
// prince1 = new Prince('Oleg', 24, 32);
//
// let popeluh = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10];
// function search(){
//         let  i = 0;
//         while (i<popeluh.length){
//             let elements = Object.values(popeluh[i]);
//             i++
//             if (elements[2] === prince1.sizeMeshta){
//                 console.log(elements[0] + ' must be with ' + prince1.name)
//             }
//         }
// }
// search();

// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.+
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
class Car{
    constructor(model, engine, driver, price, year) {
        this.model = model;
        this.engine = engine;
        this.driver = driver;
        this.price = price;
        this.year = year;
    }
    newSpeed(up){
        console.log(this.engine * up);
    }
    newDriver(driver){
        this.driver = driver;
    }
}
audi = new Car('Audi', 2.0, {name:'Oleg',age:31,exp:2}, 2000, 1999);
mercedes = new Car('Mercedes', 2.5, {name:'Petro',age:22,exp:3}, 3000, 2001);
BMW = new Car('BMW', 2.5, {name:'Vasil',age:28,exp:4}, 3500, 2000);
GWAgen = new Car('G-WAGEN', 5.0, {name:'Denis',age:24,exp:5}, 6000, 2005);
ford = new Car('FORD', 2.0, {name:'Mama',age:25,exp:6}, 2500, 2004);
VW = new Car('VW', 2.0, {name:'Dady',age:26,exp:7}, 6000, 2014);
nissan = new Car('NISSAN', 2.5, {name:'Steve',age:27,exp:8}, 4500, 2012);

// audi.newSpeed(2)
// BMW.newSpeed(2)
// GWAgen.newSpeed(2)
// VW.newSpeed(2)
// audi.newDriver({name:'Petro',age:22,exp:3})
// BMW.newDriver({name:'Name1',age:99,exp:50})
// GWAgen.newDriver({name:'Name2', age:98,exp:55})
// VW.newDriver({name:'Name3', age:97, exp:44})

let massCar = [audi,mercedes,BMW,GWAgen,ford,VW,nissan];

//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// function upgrade() {
//     let i = 0;
//     while (i <= massCar.length) {
//         console.log(massCar[i]);
//         let a = (massCar[i].engine + (massCar[i].engine * 0.10));
//         let b = (massCar[i].price + (massCar[i].price * 0.05));
//         console.log(a)
//         console.log(b)
//         i+=2;
//     }
// }
// console.log(upgrade());

// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// function ageIterator() {
//     for (let car of massCar) {
//         if (car.driver.exp < 5 && car.driver.age > 25) {
//             console.log(car.driver.name + ' You must study!!' + 'exp: ' + car.driver.exp)
//             console.log(car.driver.name + ' Will study just wait for professional ^_^')
//             let study = car.driver.exp +1;
//             console.log('New exp: ' + study)
//         }
//     }
// }
// ageIterator();
// console.log(massCar)
//

//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
function price(){
    for (let car of massCar) {
        // console.log(car)
        let sum = car.price;
        console.log(sum)

        }
}
price();



