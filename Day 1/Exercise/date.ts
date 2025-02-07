// Soal nomor 5
/* Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
○ Example : 400 days → 1 year, 1 month, 5 days
○ Example: 366 days → 1 year, 0 month, 1 day */

let hari:number = 366
let tahun:number = Math.floor(hari/365) // Math.ceil() untuk ke atas, Math.round() sesuai aturan matematika
let bulan:number = hari % 365
let hasilbulan:number = Math.floor(bulan/30)
let day:number = bulan % 30


console.log(tahun + " year", hasilbulan + " month", day + " days")

// Soal Nomor 6
/*Write a code to get difference between dates in days.
○ Example : date1 = 2022-01-20, date2 = 2022-01-22
○ Output : 2 */

let date1:Date = new Date('2022-01-20');
let date2:Date = new Date('2022-02-22');
let diffDays:Number = date2.getTime() - date1.getTime(); 
console.log(diffDays) //nanti dibagi menjadi milisekon

/*
let seconds = (ms / 1000).toFixed(1);
  let minutes = (ms / (1000 * 60)).toFixed(1);
  let hours = (ms / (1000 * 60 * 60)).toFixed(1);
  let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1); 
*/ //ini adalah cara mengubah milisekon ke waktu tertentu dan toFixed adalah untuk membulatkan angka tertentu dan kembalian string








