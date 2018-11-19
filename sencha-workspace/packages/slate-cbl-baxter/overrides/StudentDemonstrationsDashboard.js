Ext.define('Baxter.cbl.overrides.StudentDemonstrationsDashboard', {
    override: 'SlateDemonstrationsStudent.view.Dashboard',


    initItems: function() {
        var me = this;

        me.callParent(arguments);

        me.remove(me.getCompetenciesSummary(), false);
        me.remove(me.getRecentProgress(), false);
    }
});