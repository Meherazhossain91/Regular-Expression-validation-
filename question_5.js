
//  Create a zipcode pattern  





let zipcode = 'dhaka:1268';

let pettern =  /^[a-zA-Z0-9:_-]{4,16}$/;

console.log (pettern.test(zipcode));