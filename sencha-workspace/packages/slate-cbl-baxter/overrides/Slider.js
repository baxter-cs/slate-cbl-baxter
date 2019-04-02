Ext.define('Baxter.cbl.override.Slider', {
    override: 'Slate.cbl.field.ratings.Slider',


    config: {
        minRating: 0,
        maxRating: 6,
        menuRatings: [0]
    }
});