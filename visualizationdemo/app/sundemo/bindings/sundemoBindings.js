/*global define */
/*jslint sloppy: true*/
define({
    'sun1': function () {
        return {
            sunburst: {
                data: this.data,
                idPath: 'name',
                colorPath: this.colorPath,
                colorPalette: this.colorPalette,
                enableZoom: true,
            }
        };
    },
    'tree1': function () {
        return {
            treemap: {
                data: this.data,
                idPath: 'name',
                colorPath: this.colorPath,
                colorPalette: this.colorPalette,
                enableZoom: true,
                maxVisibleLevels: this.maxVisibleLevels
            }
        };
    }
});
