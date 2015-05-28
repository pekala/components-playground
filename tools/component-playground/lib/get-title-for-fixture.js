module.exports = function(params) {
    var title = 'issuu Component Playground';

    // Set document title to the name of the selected fixture
    if (params.selectedComponent && params.selectedFixture) {
        title = params.selectedComponent + ':' +
            params.selectedFixture + ' – ' +
            title;
    }

    return title;
};