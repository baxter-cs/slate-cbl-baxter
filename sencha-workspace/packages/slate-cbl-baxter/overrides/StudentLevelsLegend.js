Ext.define('Baxter.cbl.override.StudentLevelsLegend', {
    override: 'SlateDemonstrationsStudent.view.Dashboard',
    requires: [
        'Slate.cbl.util.Config'
    ],

    initItems: function() {
        this.callParent();

        this.insert(3, {
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