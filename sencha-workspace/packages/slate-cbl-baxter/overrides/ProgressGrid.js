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
    return ["EN","PR","GB","AD","EX"][level];

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
        "Entering",
        "Progressing",
        "Graduation Benchmark",
        "Advancing",
        "Excelling"][level];
}; 

Ext.define('Baxter.cbl.overrides.ProgressGrid', {
    override: 'SlateDemonstrationsTeacher.view.ProgressGrid',    

    tpl: [
        '{%var studentsCount = values.studentsCount%}',
        '{%var competenciesCount = values.competenciesCount%}',
        '<tpl if="competenciesCount === 0 || studentsCount === 0">',
            '<div class="cbl-grid-ct">',
                '<table class="cbl-grid cbl-grid-competencies"></table>',
            '</div>',
            '<div class="cbl-grid-ct">',
                '<table class="cbl-grid cbl-grid-main"></table>',
            '</div>',
        '<tpl else>',
            '<div class="cbl-grid-ct">',
                '<table class="cbl-grid cbl-grid-competencies">',
                    '<colgroup class="cbl-grid-competency-col"></colgroup>',

                    '<thead>',
                        '<tr>',
                            '<td class="cbl-grid-corner-cell">&nbsp;</td>',
                        '</tr>',
                    '</thead>',

                    '<tbody>',
                        '<tpl for="competencies">',
                            '<tpl for="competency">',
                                '<tr class="cbl-grid-progress-row" data-competency="{ID}">',
                                    '<th class="cbl-grid-competency-name"><div class="ellipsis">{Descriptor}</div></th>',
                                '</tr>',
                                '<tr class="cbl-grid-skills-row" data-competency="{ID}">',
                                    '<td class="cbl-grid-skills-cell">',
                                        '<div class="cbl-grid-skills-ct">',
                                            '<table class="cbl-grid-skills-grid">',
                                                '<colgroup class="cbl-grid-skill-col"></colgroup>',
                                                '<tbody></tbody>',
                                            '</table>',
                                        '</div>',
                                    '</td>',
                                '</tr>',
                            '</tpl>',
                        '</tpl>',
                    '</tbody>',
                '</table>',

                '<div class="cbl-grid-scroll-ct">',
                    '<table class="cbl-grid cbl-grid-main">',
                        '<colgroup span="{[studentsCount]}" class="cbl-grid-progress-col"></colgroup>',

                        '<thead>',
                            '<tr>',
                                '<tpl for="students">',
                                    '<th class="cbl-grid-student-name" data-student="{student.ID}">',
                                        '<tpl if="dashboardUrl"><a href="{dashboardUrl}" target="_blank"></tpl>',
                                            '{student.FirstName} {student.LastName}',
                                        '<tpl if="dashboardUrl"></a></tpl>',
                                    '</th>',
                                '</tpl>',
                            '</tr>',
                        '</thead>',

                        '<tbody>',
                            '<tpl for="competencies">',
                                '<tr class="cbl-grid-progress-row" data-competency="{competency.ID}">',
                                    '<tpl for="students">',
                                        '<td class="cbl-grid-progress-cell" data-student="{student.ID}">',
                                            '<span class="cbl-grid-progress-bar" style="width: 0%"></span>',
                                            '<span class="cbl-grid-progress-level"></span>',
                                            '<span class="cbl-grid-progress-percent"></span>',
                                            '<span class="cbl-grid-progress-average"></span>',
                                        '</td>',
                                    '</tpl>',
                                '</tr>',
                                '<tr class="cbl-grid-skills-row" data-competency="{competency.ID}">',
                                    '<td class="cbl-grid-skills-cell" colspan="{[studentsCount]}"">',
                                        '<div class="cbl-grid-skills-ct">',
                                            '<table class="cbl-grid-skills-grid">',
                                                '<colgroup span="{[studentsCount]}"" class="cbl-grid-demos-col"></colgroup>',
                                                '<tbody></tbody>',
                                            '</table>',
                                        '</div>',
                                    '</td>',
                                '</tr>',
                            '</tpl>',
                        '</tbody>',
                    '</table>',
                '</div>',
            '</div>',
            '<div class="cbl-grid-legend">',
                '<span class="cbl-grid-legend-label">Portfolios:&ensp;</span>',
                '<span class="cbl-grid-legend-item level-color cbl-level-1">EN</span>',
                '<span class="cbl-grid-legend-item level-color cbl-level-2">PR</span>',
                '<span class="cbl-grid-legend-item level-color cbl-level-3">GB</span>',
                '<span class="cbl-grid-legend-item level-color cbl-level-4">AD</span>',
                '<span class="cbl-grid-legend-item level-color cbl-level-5">EX</span>',
                '<span class="cbl-grid-legend-item level-color cbl-level-6">BA</span>',
            '</div>',

        '</tpl>'

    ],
    competencySkillsTpl: [
        '<tpl for="skills">',
            '<tr class="cbl-grid-skill-row" data-skill="{skill.ID}">',
                '<th class="cbl-grid-skill-name" data-skill-name="{skill.Descriptor:htmlEncode}" data-skill-description="{skill.Statement:htmlEncode}">',
                    '<div class="ellipsis">{skill.Descriptor:htmlEncode}</div>',
                '</th>',
            '</tr>',
        '</tpl>'
    ],

    competencyDemonstrationsTpl: [
        '<tpl for="skills">',
            '<tr class="cbl-grid-skill-row" data-skill="{skill.ID}">',
                '<tpl for="students">',
                    '<td class="cbl-grid-demos-cell <tpl if="studentCompetency">cbl-level-{studentCompetency.Level}</tpl>" data-student="{student.ID}">',
                        '<ul class="cbl-grid-demos">',
                            '<tpl for="demonstrations">',
                                '<tpl if=".">',
                                    '<li',
                                        ' data-demonstration="{DemonstrationID}"',
                                        '<tpl if="Override"> data-span="{[xcount - xindex + 1]}"</tpl>',
                                        ' class="',
                                            ' cbl-grid-demo',
                                            '<tpl if="Override">',
                                                ' cbl-grid-demo-override',
                                            '</tpl>',
                                            '<tpl if="DemonstratedLevel || Override">',
                                                ' cbl-grid-demo-counted',
                                            '<tpl elseif="DemonstratedLevel == 0">',
                                                ' cbl-grid-demo-missing',
                                            '<tpl else>',
                                                ' cbl-grid-demo-uncounted',
                                            '</tpl>',
                                        '"',
                                    '>',
                                        '<tpl if="Override">',
                                            '<i class="fa fa-check"></i>',
                                        '<tpl else>',
                                            '{[ getLevelShortName(values.DemonstratedLevel )]}',
                                        '</tpl>',
                                    '</li>',
                                    '{% if (values.Override) break; %}', // don't print any more blocks after override
                                '<tpl else>',
                                    '<li class="cbl-grid-demo cbl-grid-demo-uncounted">&nbsp;</li>',
                                '</tpl>',
                            '</tpl>',
                        '</ul>',
                    '</td>',
                '</tpl>',
            '</tr>',
        '</tpl>'
    ],    
});