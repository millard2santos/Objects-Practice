const users = [
    {
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        isLoggedIn: true
    },
    {
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        isLoggedIn: true
    },
    {
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        isLoggedIn: true
    },
    {
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        isLoggedIn: false
    },
    {
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        isLoggedIn: false
    }
];

const singUp = (name, email, password) => {
    let check = false
    for (i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            check = true
        }
    }
    if (check === false) {
        return users.push({
            username: name,
            email,
            password,
            isLoggedIn: false
        })
    } else {
        return `El ${email} ya esta registrado`
    }
}
singUp('Millard', 'millard@millard.com', '125458')
// console.log(singUp('Millard', 'millard@millard.com', '125458'))

const signIn = (email, password) => {
    for (i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            users[i].isLoggedIn = true
            return `Cambio hecho`
        }
    }
}
signIn('millard@millard.com', '125458')

const logOut = (email) => {
    for (i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            users[i].isLoggedIn = false
            return
        }
    }
}

logOut('alex@alex.com')


const deleteAccount = (email) => {
    for (i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            users.splice(i,1)
        }
    }
}


deleteAccount('millard@millard.com')

console.log(users)