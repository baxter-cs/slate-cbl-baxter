
Ext.define('Baxter.cbl.overrides.SlateDemonstrationsTeacher', {
    override: 'SlateDemonstrationsTeacher.Application',


    constructor: function() {
        var me = this;

        console.log("success!");

        me.callParent(arguments);
    }
});