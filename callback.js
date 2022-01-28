// console.log('1.görev');
// console.log('2.görev');
// console.log('3.görev');

// const function1 = () => {
//     console.log('Function 1 tamamlandı');
// };

// const function2 = () => {
//     console.log('Function 2 tamamlandı');
// };

// function1(); //fonksiyonları calistirdik, bunları yazmazsam fonksiyon calismaz
// function2();

// const function1 = () => {
//     console.log('Function 1 tamamlandı');
//     function2();
// };

// const function2 = () => {
//     console.log('Function 2 tamamlandı');
//     function3();
// };

// const function3 = () => {
//     console.log('Function 3 tamamlandı');
// };

// function1();

// const function1 = () => {
//     console.log('Function 1 tamamlandı');
//     function3();
// };

// const function2 = () => {
//     console.log('Function 2 tamamlandı');
// };

// const function3 = () => {
//     console.log('Function 3 tamamlandı');
//     function2();
// };

// function1();

// Javascript her zaman senkron olarak calisir, ve single thread (aynı anda tek bir islem yapma olayi) olarak calisir

//  let x = 5;
//  console.log('1. gelen veri: ', x);

//  setTimeout(() => {
//      x = x + 5;
//      console.log('2. gelen veri: ', x); // bir fonksiyonu baska bir fonksiyonu argüman olarak koyduk
//  }, 5000);

//  x = x + 5;
//  console.log('3. gelen veri: ',x);

// const books = [ // objelerden olusan bir dizi olusturduk
//     {name: "Kitap 1", author: "Yazar 1"},
//     {name: "Kitap 2", author: "Yazar 2"},
//     {name: "Kitap 3", author: "Yazar 3"},
// ];

// const listBooks = () => { 
//   books.map(book => {  //kitaplarımızı sıraladık
//       console.log(book.name); //kitapların isimlerini yazdırdık
//   })
// };


// const addBook = (newBook, callback) => {
//     books.push(newBook);
//     callback();
// };

// //listBooks(); //calistirdik

// addBook({name: "Kitap 4", author: "Yazar 4"}, listBooks);








