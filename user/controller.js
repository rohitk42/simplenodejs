const bcrypt = require('bcrypt');
const saltRounds = 10;

function hashPassword(password) {
  return bcrypt.hashSync(password, saltRounds);
}

function isCorrectPassword(password, hash) {
    return bcrypt.compareSync(password, hash)
}

const userData = [];

function signup(req, res) {
    console.log('signup is called...');

    const userInfo = req.body;

    // validation of data or user input
    if (userInfo.name == null ||
        userInfo.email == null ||
        userInfo.password == null
    ) {
        res.status(403).send('please provide complete information');
        return;
    }

    const hash = hashPassword(userInfo.password);

    console.log(userInfo);
    // remove password from userInfo
    delete userInfo.password;
    console.log(userInfo);
    
    userInfo.hash = hash;
    
    console.log(userInfo);

    userData.push(userInfo);

    res.status(201).send('register successfully');
}

function login(req, res) {
    console.log('login is called...');

    const loginInfo = req.body;

    // validation of data or user input
    if (
        loginInfo.email == null ||
        loginInfo.password == null
    ) {
        res.status(403).send('please provide email and password');
        return;
    }

    let userFound = false;
    for (const userInfo of userData) {
        const isSamePassword = isCorrectPassword(loginInfo.password, userInfo.hash);
        if (userInfo.email === loginInfo.email &&
            isSamePassword
        ) {
            userFound = true;
            break;
        }
    }

    if (userFound) {
        res.send('loggedin succesfully')
    } else {
        res.status(403).send('wrong email or password, please try again')
    }
    
}

module.exports = {
    signup,
    login,
}
