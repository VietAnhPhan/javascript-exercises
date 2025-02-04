function getAge(people) {
    const d = new Date();
    let year = d.getFullYear();
    if (!people.yearOfDeath) {
        return year - people.yearOfBirth;
    }
    return people.yearOfDeath - people.yearOfBirth;
}

const findTheOldest = function (people) {
    let oldArray = [];


    people.forEach(people => {
        customizedPerson = {
            name: people.name,
            old: getAge(people)
        }
        oldArray.push(customizedPerson);
    })

    let ageCollection = [];

    oldArray.forEach(person => {
        ageCollection.push(person.old);
    })

    let oldestPerson = oldArray.find(obj => {
        return obj.old === Math.max(...ageCollection);
    })

    let result = people.find(obj => {
        return obj.name === oldestPerson.name;
    })
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
