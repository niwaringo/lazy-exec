var QUERY_SELECTOR = "script[src^='https://code.jquery.com/']";
describe("lazy-exec", function() {
    it("nothing selector", function(done) {
        lazyExec(QUERY_SELECTOR, function(error) {
            assert(error);
            done();
        }, 10);
    });

    it("callback call", function(done) {


        lazyExec(QUERY_SELECTOR, function(error, elem) {
            assert.strictEqual(elem.src, jquery.src);
            done();
        })
    });
});
