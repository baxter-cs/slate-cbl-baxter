Ext.define('Baxter.cbl.overrides.StudentCompetencySummary', {
    override: 'SlateDemonstrationsStudent.view.CompetenciesSummary',

    config: {
        // required inputs
        contentAreaTitle: null,
        level: null,
        missed: null

    },

     renderTpl: [
      '<header class="slate-simplepanel-header">',
          '<div class="slate-simplepanel-title">My <span id="{id}-contentAreaTitleEl" data-ref="contentAreaTitleEl">{contentAreaTitle}</span> Competencies</div>',
      '</header>',

      '<div id="{id}-meterEl" data-ref="meterEl" class="cbl-progress-meter">',
      '</div>',
      '<div class="stats-ct">',
      '</div>',
      '<div class="cbl-grid-legend">',
        '<span class="cbl-grid-legend-label">Legend:&ensp;</span>',
        '<span class="cbl-grid-legend-item level-color cbl-level-1">EN</span>',
        '<span class="cbl-grid-legend-item level-color cbl-level-2">PR</span>',
        '<span class="cbl-grid-legend-item level-color cbl-level-3">GB</span>',
        '<span class="cbl-grid-legend-item level-color cbl-level-4">AD</span>',
        '<span class="cbl-grid-legend-item level-color cbl-level-5">EX</span>',
        '<span class="cbl-grid-legend-item level-color cbl-level-6">BA</span>',
      '</div>',      
    ],

    initRenderData: function() {
        var me = this;

        return Ext.apply(this.callParent(), {

            contentAreaTitle: me.getContentAreaTitle(),
            level: me.getLevel(),
            levelShortName: me.getLevelShortName(me.getLevel()),
            levelName: me.getLevelName(me.getLevel())
        });
    },


    getLevelShortName: function(level){
        var level = this.level;
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

    },

    getLevelName: function(level){
        var level = this.level;
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
    },
    updateLevel: function(newLevel, oldLevel) {
        var me = this;

        if (oldLevel) {
           // me.removeCls('cbl-level-' + oldLevel);
        }

        if (newLevel) {
          //  me.addCls('cbl-level-' + newLevel);
        }

    },

    updatePercentComplete: function(percentComplete) {
        return; //do nothing
    },    
   updateMissed: function(missed) {
        return;
    },

    updateAverage: function(average) {
        return;
    },

    updateGrowth: function(growth) {
        return;
    }
});