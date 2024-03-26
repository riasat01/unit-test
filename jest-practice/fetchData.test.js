const { fetchData } = require('./fetchData');

test('async test', (done) => {
    const callback = (data) => {
        try{
            expect(data).toBe('demo');
            done();
        }catch(error) {
            done(error);
        }
    }
    fetchData(callback);
})