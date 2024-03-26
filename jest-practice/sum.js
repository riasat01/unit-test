const sum = (a, b) => {
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error('Invalid Input');
    }
    return a + b
};
module.exports = { sum };