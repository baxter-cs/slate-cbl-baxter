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

Ext.define('Baxter.cbl.overrides.SkillList', {
  override: 'Slate.cbl.view.demonstrations.SkillList',    
  tpl: [
      '<thead>',
          '<tr class="skill-list-header-row">',
              '<th class="skill-list-header skill-list-demo-index">&nbsp;</th>',
              '<th class="skill-list-header skill-list-demo-date">Date</th>',
              '<th class="skill-list-header skill-list-demo-level">Rating</th>',
              '<th class="skill-list-header skill-list-demo-experience">Experience Type</th>',
              '<th class="skill-list-header skill-list-demo-context">Experience Name</th>',
              '<th class="skill-list-header skill-list-demo-task">Performance&nbsp;Task</th>',
          '</tr>',
      '</thead>',

      '<tpl if="values && values.length">',
          '<tpl for=".">',
              '<tbody class="skill-list-demo <tpl if="highlighted">{[this.owner.highlightedRowCls]}</tpl>" data-demonstration="{Demonstration.ID}" data-demonstration-skill="{ID}">',
              '<tr class="skill-list-demo-row">',
                  '<td class="skill-list-demo-data skill-list-demo-index">{[xindex]}</td>',
                  '<td class="skill-list-demo-data skill-list-demo-date">{Demonstrated:date}</td>',
                  '<td class="skill-list-demo-data skill-list-demo-level">',
                      '<div class="level-color cbl-level-{DemonstratedLevel}">',
                          '<tpl if="Override">',
                              '<i class="fa fa-check"></i>',
                          '<tpl elseif="DemonstratedLevel==0">',
                              'NE',
                          '<tpl else>',
                              '{[getLevelShortName(values.DemonstratedLevel)]}',
                          '</tpl>',
                      '</div>',
                  '</td>',
                  '<tpl if="Override">',
                      '<td colspan="3" class="skill-list-demo-data skill-list-override">Override</td>',
                  '<tpl else>',
                      '<td class="skill-list-demo-data skill-list-demo-type">{Demonstration.ExperienceType:htmlEncode}</td>',
                      '<td class="skill-list-demo-data skill-list-demo-context">{Demonstration.Context:htmlEncode}</td>',
                      '<td class="skill-list-demo-data skill-list-demo-task">{Demonstration.PerformanceType:htmlEncode}</td>',
                  '</tpl>',
              '</tr>',
              '<tr class="skill-list-demo-detail-row" data-demonstration="{ID}">',
                  '<td class="skill-list-demo-detail-data" colspan="6">',
                      '<div class="skill-list-demo-detail-ct">',
                          '<tpl if="Demonstration.ArtifactURL">',
                              '<div class="skill-list-demo-artifact">',
                                  '<strong>Artifact: </strong>',
                                  '<a href="{Demonstration.ArtifactURL:htmlEncode}" target="_blank">{Demonstration.ArtifactURL:htmlEncode}</a>',
                              '</div>',
                          '</tpl>',
                          '<tpl if="Demonstration.Comments">',
                              '<div class="skill-list-demo-comments">',
                                  '<strong>Comments: </strong>',
                                  '{[Ext.util.Format.nl2br(Ext.util.Format.htmlEncode(values.Demonstration.Comments))]}',
                              '</div>',
                          '</tpl>',
                          '<div class="skill-list-demo-meta">',
                              'Demonstration #{DemonstrationID} &middot;&nbsp;',
                              '<tpl for="Creator">',
                                  '<a href="{[Slate.API.buildUrl("/people/"+values.Username)]}" target="_blank">',
                                      '{FirstName} {LastName}',
                                  '</a>',
                              '</tpl>',
                              ' &middot;&nbsp;',
                              '{Created:date("F j, Y, g:i a")}',
                              '<tpl if="showEditLinks">',
                                  ' &middot;&nbsp;',
                                  '<a href="#edit">Edit</a> | ',
                                  '<a href="#delete">Delete</a>',
                              '</tpl>',
                          '</div>',
                      '</div>',
                  '</td>',
              '</tr>',
              '</tbody>',
          '</tpl>',
      '<tpl else>',
          '<tr class="skill-list-emptytext-row">',
              '<td class="skill-list-emptytext-cell" colspan="6">No demonstrations are logged yet for this skill</td>',
          '</tr>',
      '</tpl>'
  ]
});

