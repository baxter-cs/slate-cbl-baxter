Ext.define('Baxter.cbl.overrides.StudentDemonstrationsDashboard', {
    override: 'SlateDemonstrationsStudent.view.Dashboard',


    initItems: function() {
        var me = this;

        me.callParent(arguments);

        me.remove(me.getCompetenciesSummary(), false);
        me.remove(me.getRecentProgress(), false);

        me.insert(0, {
            xtype: 'component',
            style: {
                textAlign: 'right',
                marginBottom: '3%'
            },
            renderTpl: [
                '<div class="cbl-grid-legend">',
                    '<span class="cbl-grid-legend-label">Portfolios:&ensp;</span>',
                    '<tpl foreach="Slate.cbl.util.Config.getLevels()">',
                        '<tpl if="xkey != 0">',
                            '<span class="cbl-grid-legend-item level-color cbl-level-{$}" title="{title:htmlEncode}">{abbreviation:htmlEncode}</span>',
                        '</tpl>',
                    '</tpl>',
                '</div>'
            ]
        });
    }
});

