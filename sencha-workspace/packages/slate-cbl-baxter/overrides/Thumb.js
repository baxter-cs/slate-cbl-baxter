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
            '{[this.getLevelShortName(values.value)]}',
        '</tpl>',
        {
            getLevelShortName: function (level)  {
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
            }
        }
    ],
});