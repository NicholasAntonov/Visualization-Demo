/*global define */
define([
    'sandbox!sundemo',
    '../data/flare'
], function (
    sandbox,
    flare
) {
    'use strict';

    return function () {
        var // Imports
            observable = sandbox.mvvm.observable,
            // Variables
            data = observable(flare),
            areaPath = observable('size'),
            colorPath = observable('x'),
            colorPalette = observable('PuBu'),
            colorPalette2 = observable('YlOrRd'),
            maxVisibleLevels = observable(3);


        return {
            data: data,
            areaPath: areaPath,
            colorPath: colorPath,
            colorPalette: colorPalette,
            colorPalette2: colorPalette2,
            maxVisibleLevels: maxVisibleLevels
        };
    };
});
