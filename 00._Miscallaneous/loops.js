//Loop methods: map, filter, find, reduce, sort, forEach
const rocks = [

    { name: "Pet rock", age: 2 },
    { name: "Led Zeppelin", age: 55 },
    { name: "Dwayne Johson", age: 50 },
    { name: "Granit", age: 100_000_000_000 }]

//rocks aged by a year
/*
//Dene metode ændre ved rocks-tabellen
 const rockAgedOneYear = rocks.map(rock=>{
     rock.age++
     return rock
 })
 */
/*
//Denne ændre ikke rocks-tabellen
 const rockAgedOneYear = rocks.map(rock=>{
    return {name:rock.name, age: rock.age+1}
})
*/
/*
//Denne ændre ikke rocks-tabellen
 const rockAgedOneYear = rocks.map(rock=>{
    return {...rock, age: rock.age+1}
})
*/
/*
//Denne ændre ikke rocks-tabellen
const rockAgedOneYear = rocks.map(rock => (
    {
        name: rock.name,
        age: rock.age + 1
    }
))
*/

const rockAgedOneYear = rocks.map(rock=>(
    {...rock, age: rock.age+1}
))

console.log(rockAgedOneYear)

//rocks whit even age 
const evenAgedRock = rocks.filter(rock => rock.age % 2 === 0)

console.log(evenAgedRock)
