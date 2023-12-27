const register  = function (username) {
    console.log(`User ${username} has benn register`);
};

// module.exports = register;
// node js encapsultes code into modules
// we need to manually export module
// module also comes from wrapping done by node js in IIFE 


const login = (username , password) => {


    console.log(`User ${username} is logged inn `);
}

module.exports = {
    register: register, // or just register as key value same name
    login: login

}