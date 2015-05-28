require('./global-reset.css');

var ReactQuerystringRouter = require('react-querystring-router');
var ComponentPlayground = require('react-component-playground');
var getComponentFixtureTree = require('./lib/get-component-fixture-tree');
var getTitleForFixture = require('./lib/get-title-for-fixture');

module.exports = new ReactQuerystringRouter.Router({
    container: document.getElementById('component-playground'),
    defaultProps: {
        components: getComponentFixtureTree()
    },
    getComponentClass: function() {
        return ComponentPlayground;
    },
    onChange: function(params) {
        document.title = getTitleForFixture(params);
    }
});