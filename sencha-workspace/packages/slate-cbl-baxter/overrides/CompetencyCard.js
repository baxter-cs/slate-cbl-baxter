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

Ext.define('Baxter.cbl.overrides.StudentCompetencies', {
  override: 'SlateDemonstrationsStudent.view.CompetencyCard',

  renderTpl: [
      '<header class="slate-simplepanel-header">',
          '<div  class="slate-simplepanel-title">',
              '<span id="{id}-codeEl" data-ref="codeEl">{competency.Code:htmlEncode}</span>',
              '<small id="{id}-descriptorEl" data-ref="descriptorEl">{competency.Descriptor:htmlEncode}</small>',
          '</div>',
      '</header>',

      '<div id="{id}-meterEl" data-ref="meterEl" class="cbl-progress-meter <tpl if="isAverageLow">is-average-low</tpl>">',
          '<div id="{id}-meterLevelEl" data-ref="meterLevelEl" class="cbl-progress-level no-select"><tpl if="level">{levelName}</tpl></div>',
      '</div>',

      '<div class="stats-ct">',
      '</div>',

      '<div class="slate-simplepanel-body explainer">',
          '<p id="{id}-statementEl" data-ref="statementEl">{competency.Statement:htmlEncode}</p>',
      '</div>',

      '<ul id="{id}-skillsCt" data-ref="skillsCt" class="cbl-skill-meter">',
          '<tpl if="skills">',
              '{% values.skillsTpl.applyOut(values.skills, out); %}',
          '</tpl>',
      '</ul>'
  ],
  skillsTpl: [
      '<tpl for=".">',
          '<li class="cbl-skill" data-skill="{Code}">',
              '<h5 class="cbl-skill-name">{Descriptor:htmlEncode}</h5>',

              '<ul class="cbl-skill-demos">',
                  '<tpl for="demonstrations">',
                      '<tpl if=".">',
                          '<li ',
                              'data-demonstration="{DemonstrationID}"',
                              'class="',
                                  ' cbl-skill-demo',
                                  '<tpl if="Override">',
                                      ' cbl-skill-override',
                                      ' cbl-skill-span-{[xcount - xindex + 1]}',
                                  '</tpl>',
                                  '<tpl if="DemonstratedLevel || Override">',
                                      ' cbl-skill-demo-counted',
                                      ' cbl-level-{DemonstratedLevel}',
                                      ' level-color',
                                  '<tpl else>',
                                      ' cbl-skill-demo-uncounted',
                                  '</tpl>',
                              '"',
                          '>',
                              '<tpl if="Override">',
                                  '<i class="fa fa-check"></i>',
                              '<tpl elseif="DemonstratedLevel == 0">',
                                  'M',
                              '<tpl else>',
                                  '{[getLevelShortName(values.DemonstratedLevel)]}',
                              '</tpl>',
                          '</li>',
                          '{% if (values.Override) break; %}', // don't print any more blocks after override
                      '<tpl else>',
                          '<li class="cbl-skill-demo cbl-skill-demo-uncounted">&nbsp;</li>',
                      '</tpl>',
                  '</tpl>',

                  '<li class="cbl-skill-complete-indicator <tpl if="isLevelComplete">is-checked</tpl>">',
                      '<i class="fa fa-2x fa-check-circle-o"></i>',
                  '</li>',
              '</ul>',

              '<div class="cbl-skill-description"><p>{Statement}</p></div>',
          '</li>',
      '</tpl>'
  ],  

    initRenderData: function() {
        var me = this;

        return Ext.apply(this.callParent(), {

            levelShortName: getLevelShortName(me.getLevel()),
            levelName: getLevelName(me.getLevel())
        });
    },
        updateLevel: function(newLevel, oldLevel) {
        var me = this;

        if (oldLevel) {
            me.removeCls('cbl-level-' + oldLevel);
        }

        if (newLevel) {
            me.addCls('cbl-level-' + newLevel);
        }

        if (me.rendered) {
            me.meterLevelEl.update(newLevel ? 'Y'+(newLevel - 8) : '');
        }
    },

}); 