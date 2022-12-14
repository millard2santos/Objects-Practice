// // --------------1--------------
// const citizen1 = {
//     name : 'Millard',
//     lastname: 'Dos Santos',
//     age: 25
// }

// citizen1.city = 'Madrid'
// citizen1.age = 26


// const checkCitizenship = (obj) =>{
//     if (obj.age > 18){
//        obj.canVote = true
//     }else {
//     obj.canVote = false
//     }
// }
// checkCitizenship(citizen1)


// const createCitizen = (name, lastname, age) =>{
//     return {
//         name,
//         lastname,
//         age
//     }
// }




// const citizen2 = createCitizen('Millard', 'Dos Santos', 25)


// const checkVoting = (obj) =>{
//     return Object.hasOwn(obj, 'canVote') ? true : checkCitizenship(obj)
// }

// checkVoting(citizen2)
// console.log(citizen2)


// --------------------------------------

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: false,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: true,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

const usersLogged = (obj) => {
    let array = Object.values(obj)
    let count = 0
    for (i = 0; i < array.length; i++) {
        if (array[i].isLoggedIn) {
           console.log()
        }
    }
    console.log(count)
}
// usersLogged(users)

const fifty = (obj) => {
    let key = Object.keys(obj)
    let value = Object.values(obj)
    for (i = 0; i < key.length; i++) {
        if (value[i].points >= 50) {
            console.log(key[i])
        }
    }
}

// fifty(users)

const knowReact = (obj) =>{
    let key = Object.keys(obj)
    let value = Object.values(obj)
    for (i = 0; i < key.length; i++) {
        if (value[i].skills.includes('React')) {
            console.log(key[i])
        }
    }
 }

//  knowReact(users)


