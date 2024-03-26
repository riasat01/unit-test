const fetchData = (callback) => {
    setTimeout(() => {
        callback('demo')
    })
}

module.exports = { fetchData };