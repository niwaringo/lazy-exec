var QUERY_SELECTOR = "script[src^='https://code.jquery.com/']";
describe("lazy-exec", function() {
    it("nothing selector", function(done) {
        lazyExec(QUERY_SELECTOR, function(error) {
            assert(error);
            done();
        }, 10);
    });

    it("callback call", function(done) {
        var jq_path = "https://code.jquery.com/jquery.min.js";
        var add_script = document.createElement("script");
        add_script.src = jq_path;
        document.head.appendChild(add_script);
        lazyExec(QUERY_SELECTOR, function(error, elem) {
            assert.strictEqual(elem.src, jq_path);
            done();
        });
    });
});
