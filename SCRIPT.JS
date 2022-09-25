//practice for loop
const person = [
  "sourabh",
  "singh",
  1997,
  56,
  "blue",
  ["manish", "rajveer", "pawan", "shubham"],
];
const age = [];
const weight = [];
// // Reverse loop value
for (i = person.length - 1; i > -1; i--) {
  console.log(i, person[i]);
}
// // loop with small calculation
for (i = 0; i < 1; i++) {
  age.push(2022 - person["2"]);
  weight.push(person["3"] + 10);
  console.log(age[i]);
  console.log(weight[i]);
  console.log(person[i]);
}

console.log(age, weight, person);
// loop in loop
const month = [
  2022,
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];
for (annual = 1; annual <= 3; annual++) {
  console.log(`this is the annual return in gst ${annual} ${month["5"]}`);

  for (quaterly = 1; quaterly < 5; quaterly++)
    console.log(`this is the quateraly retrun in gst ${quaterly}`);
}
// loop ascending order in number
for (i = 0; i <= 10; i++) {
  console.log(i);
}
//loop descending order in number
for (i = 10; i >= 0; i--) {
  console.log(i);
}
//loop condition
const invoice = [300, 260, 860, 540, 480, 66, 30, 80, 450];
const calcintrest = (invoice) =>
  invoice <= 500 && invoice >= 300 ? invoice * 0.1 : invoice * 0.2;
const intrest = [];
const total = [];
for (i = 0; i < invoice.length; i++) {
  intrest.push(calcintrest(invoice[i]));
  total.push(invoice[i] + intrest[i]);
  console.log(invoice[i], intrest[i], total[i]);
}
