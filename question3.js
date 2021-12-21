// Create a Bangladeshi phone number pattern



let num = '8801601169488';

let pettern = /^(01|8801|\+8801)[0-9]{9}$/

console.log(pettern.test(num));