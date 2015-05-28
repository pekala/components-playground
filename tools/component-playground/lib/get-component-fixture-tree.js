var parseFixturePath = require('./parse-fixture-path');

module.exports = function() {
    var requireFixture = require.context('fixtures', true, /\.js$/);
    var fixtures = {};

    requireFixture.keys().forEach(function(fixturePath) {
        var pathParts = parseFixturePath(fixturePath);
        var componentName = pathParts[1];
        var fixtureName = pathParts[2];

        // Fixtures are grouped per component
        if (!fixtures[componentName]) {
            fixtures[componentName] = {
                class: require('components/' + componentName),
                docs: require('components/' + componentName + '.md'),
                fixtures: {}
            };
        }

        fixtures[componentName].fixtures[fixtureName] = requireFixture(fixturePath);
    });

    return fixtures;
};