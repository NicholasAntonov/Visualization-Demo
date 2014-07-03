/*global define */
define([
    'sandbox!sundemo',
    'app/sundemo/viewmodels/sundemoViewModel',
    'bindings!sundemo',
    'views!sundemo',
    'styles!sundemo'
], function (
    sandbox,
    sundemoViewModel
) {
    'use strict';

    return function sundemoModule() {
        var // imports
            root = sandbox.mvvm.root,
            template = sandbox.mvvm.template,
            registerStates = sandbox.state.registerStates,
            state = sandbox.state.builder.state,
            onEntry = sandbox.state.builder.onEntry,
            // vars
            layout = sandbox.layout,
            sundemo = sundemoViewModel(sandbox);

        // Register application state for the module.
        registerStates('main',
            state('sundemo',
                onEntry(function () {
                    this.main_content(template('sundemo_template', sundemo));
                    layout.parseGridStyles(function () {
                        console.log('styles loaded and parsed');
                    });
                    layout.invalidate(true);
                })));
    };
});
