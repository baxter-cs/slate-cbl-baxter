function getLevelShortName(level)  {
    if(level <= 0) {
        return "NE";
    }
    if(level < 1) {
        return "IE";
    }
    if(level > 5){
        return "BA";
    }
    return ["NE","EN","PR","GB","AD","EX"][level];

};

function getLevelName(level){
    if(level <= 0) {
        return "No Evidence";
    }
    if(level < 1) {
        return "Insufficient Evidence";
    }
    if(level > 5){
        return "Beyond Assessment";
    }
    return [
        "No Evidence",
        "Entering",
        "Progressing",
        "Graduation Benchmark",
        "Advancing",
        "Excelling"][level];
}; 


/**
 * Thumb used for rating sliders
 */
Ext.define('Baxter.cbl.override.Thumb', {
    override: "Slate.cbl.field.ratings.Thumb",
    contentTpl: [
        '<tpl if="value === null">',
            '<small class="muted">N/A</small>',
        '<tpl elseif="value === 0">',
            'NE',
        '<tpl else>',
            '{[getLevelShortName(values.value)]}',
        '</tpl>'
    ],
});

Ext.define('Baxter.cbl.override.Slider', {
    override: 'Slate.cbl.field.ratings.Slider',
    config: {
        skill: null,
        level: null,

        minRating: 1,
        maxRating: 6,
        menuRatings: [0],
        removable: false
    },


}, function(Slider) {
    // make this class statically observable so instances can monitor other instances for tip showing
    Ext.util.Observable.observe(Slider);
});