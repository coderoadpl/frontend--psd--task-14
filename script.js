const people = [
    { name: 'Ala', age: 25, work: { experience: 3, salary: 4010 }, city: 'Lublin', favoriteColors: ['green', 'yellow'] },
    { name: 'Ola', age: 21, work: { experience: 3, salary: 5100 }, city: 'Warszawa', favoriteColors: ['black', 'yellow'] },
    { name: 'Ela', age: 28, work: { experience: 1, salary: 1600 }, city: 'Gdańsk', favoriteColors: ['green'] },
    { name: 'Iza', age: 24, work: { experience: 5, salary: 6020 }, city: 'Lublin', favoriteColors: ['white', 'red'] },
]

let sum = 0

for (let i = 0; i < people.length; i++) {

    const person = people[i]

    if (
        (person && person.city) === 'Lublin' &&
        (person && person.work && person.work.experience) > 2
    ) {
        sum = sum + ((person && person.work && person.work.salary) || 0)
    }

}

console.log(sum)

const filterByCity = function (city) {
    return function (person) {
        return (person && person.city) === city
    }
}
const filterByWorkExperience = function (experience) {
    return function (person) {
        return (person && person.work && person.work.experience) > experience
    }
}
const sumSalaries = function (reduced, person) {
    return reduced + ((person && person.work && person.work.salary) || 0)
}

const salaries1 = (
    people
        .filter(filterByCity('Lublin'))
        .filter(filterByWorkExperience(2))
        .reduce(sumSalaries, 0)
)
const salaries2 = (
    people
        .filter(filterByCity('Gdańsk'))
        .filter(filterByWorkExperience(2))
        .reduce(sumSalaries, 0)
)
const salaries3 = (
    people
        .filter(filterByCity('Warszawa'))
        .filter(filterByWorkExperience(2))
        .reduce(sumSalaries, 0)
)

console.log(salaries1)
console.log(salaries2)
console.log(salaries3)
