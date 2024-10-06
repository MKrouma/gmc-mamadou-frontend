const people = [{ name : 'Max' }, { name : 'Jack' }, { name : 'Marry' }]

const findPeople = name => {
    return people.find(item => item.name === name)
}
console.log(findPeople("Max"))


const addToPeople = () => people.forEach(item => console.log(item.name))
console.log(addToPeople())

const products = [{nom:"Lait" ,prix:15}, {nom:"Eau" , prix:9}, {nom:"Pain" , prix:5}] ;

const filterProduct = () => products.filter(item => item.prix > 8)
console.log(filterProduct())


const data = [0, 5, 10, 15, 20, 25]
const res = data.reduce((acc, value) =>  acc * value)
console.log(res)// 75

const newArray = [1,2,3].map(_=>true)
console.log(newArray)