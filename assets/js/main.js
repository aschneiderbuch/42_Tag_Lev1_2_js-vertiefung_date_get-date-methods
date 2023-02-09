console.log("test");

/* 
Ausgabe
    Fri
    03
    31
    27
    PM

*/


let monate = [
  "Januar", // 0
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember" // 11
];

let wochenTag = [
  "Sonntag", // 0
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag" // 6
];


let date = new Date();
console.log(date);

// Stdn holen
let dateStd = date.getHours();
console.log(dateStd);

// ins HTMl schreiben in --> id std
  document.querySelector("#std").innerHTML = dateStd


// Min
let dateMin = date.getMinutes();
console.log(dateMin);

// ins HTMl schreiben in --> id min

document.querySelector("#min").innerHTML = dateMin

// Sec
let dateSec = date.getSeconds();
document.querySelector("#sec").innerHTML = dateSec

console.log(dateStd)
if (dateStd <= 12){
  console.log(dateStd);
  let datePeriod = "AM";
  document.querySelector("#period").innerHTML = datePeriod;
}
else {
  let datePeriod = "PM";
  document.querySelector("#period").innerHTML = datePeriod;
}

//Tag
let dateTag = date.getUTCDay(); 
console.log(dateTag); // 4
// wollen ja Tag ausgeschireben, deshalb oben das Array wochenTag
dateTag = wochenTag[dateTag];  // es wird die 4 ins Array eingefügt, was dann den Wochentag in Buchstaben ausgiebt
console.log(dateTag);// Donnerstag
// wollen nur 3 Zeichen haben
dateTag = dateTag.slice(0,3);
console.log(dateTag); // Don

document.querySelector("#tag").innerHTML = dateTag;