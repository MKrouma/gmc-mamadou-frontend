let student = { address: { city: 'New York', country: 'USA' } }
console.log(student.address.city)

let { address } = {address:{city:"New York", country:"USA"}};
let {city, country} = address;
console.log(country)
