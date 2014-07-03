/*global define */
define([
    'sandbox!main'
], function (
    sandbox
) {
    'use strict';

    return function () {
        var // imports
            observable = sandbox.mvvm.observable,
            // properties
            main_content = observable();

        return {
            main_content: main_content
        };
    };
});
