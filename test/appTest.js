const assert = require('chai').assert;
const showTheArticles = require('../public/app').showTheArticles;


describe('App', function() {
    it('should show all the articles', function() {
        let result = showTheArticles();
        assert.typeOf(result, 'string');
    });
});