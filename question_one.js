// Create an email pattern 





let txt = 'meheraz1998@gmail.com';

let pettern = /^[a-z0-9\._]*@[a-z0-9\.[a-z]{2,5}/;

console.log(pettern.test(txt));