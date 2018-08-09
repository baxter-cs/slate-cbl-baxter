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
                    '<td class="cbl-grid-demos-cell " data-student="{student.ID}">',
                        '<ul class="cbl-grid-demos">',
                            '<tpl for="demonstrations">',
                                '<tpl if=".">',
                                    '<li',
                                        ' data-demonstration="{DemonstrationID}"',
                                        '<tpl if="Override"> data-span="{[xcount - xindex + 1]}"</tpl>',
                                        ' class="',
                                            ' level-color cbl-level-{DemonstratedLevel}',
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

    loadStudentCompetencies: function(studentCompetencies, forceDirty) {
        studentCompetencies = Ext.isArray(studentCompetencies) ? studentCompetencies : [studentCompetencies];
        // eslint-disable-next-line vars-on-top
        var me = this,
            competenciesById,

            studentCompetenciesLength = studentCompetencies.length,
            studentCompetencyIndex, studentCompetency, competencyId, competencyData, studentId, node, competency,

            dirtyNodes = [],
            dirtyNodesLength, dirtyNodeIndex,

            progressCellEl, count, average, level, effectiveDemonstrations, renderedLevel,
            countDirty, averageDirty, levelDirty,
            percentComplete, demonstrationsRequired,

            averageFormat = me.getAverageFormat(),
            progressFormat = me.getProgressFormat(),

            studentSkills, studentSkillsLength, studentSkillIndex, studentSkill, demonstrationsCellEl,
            skillId, skill, demonstrations, renderedDemonstrations, demonstrationBlockEls,
            demonstrationsLength, demonstrationIndex, demonstration,
            renderedDemonstrationsLength, renderedDemonstration, renderedDemonstrationRating, demonstrationBlockEl,
            demonstrationRating, demonstrationOverride, demonstrationId,
            demonstrationRatingDirty, demonstrationOverrideDirty,
            demonstrationHtml;


        if (!me.rendered) {
            me.on('afterrender', function() {
                me.loadStudentCompetencies(studentCompetencies);
            }, me, { single: true });
            return;
        }


        // reference competencies+students tree from main render tree
        competenciesById = me.getData().competenciesById;


        // pass 1: sort StudentCompetency records into competencies+students tree and queue those needing re-render
        for (studentCompetencyIndex = 0; studentCompetencyIndex < studentCompetenciesLength; studentCompetencyIndex++) {
            studentCompetency = studentCompetencies[studentCompetencyIndex];
            competencyId = studentCompetency.get('CompetencyID');
            competencyData = competenciesById[competencyId];

            // skip StudentCompetency if not found in loaded competencies
            if (!competencyData) {
                continue;
            }

            studentId = studentCompetency.get('StudentID');
            node = competencyData.studentsById[studentId];
            level = studentCompetency.get('Level');

            node.studentCompetencies[level] = studentCompetency;

            if (level > node.maxLevel || forceDirty) {
                node.maxLevel = level;
                node.dirty = true;
                dirtyNodes.push(node);
            }
        }


        // pass 2: update dirty nodes
        for (dirtyNodesLength = dirtyNodes.length, dirtyNodeIndex = 0; dirtyNodeIndex < dirtyNodesLength; dirtyNodeIndex++) {
            node = dirtyNodes[dirtyNodeIndex];
            competency = node.competency;


            // the same node could be in the queue more than once, but only needs to be processed once
            if (!node.dirty) {
                continue;
            }

            node.dirty = false;


            studentCompetency = node.studentCompetencies[node.maxLevel];
            progressCellEl = node.progressCellEl;

            count = studentCompetency.get('demonstrationsComplete');
            average = studentCompetency.get('demonstrationsAverage');
            level = studentCompetency.get('Level');
            effectiveDemonstrations = studentCompetency.get('effectiveDemonstrationsData');
            renderedLevel = node.renderedLevel;

            countDirty = count != node.renderedCount;
            averageDirty = average != node.renderedAverage;
            levelDirty = level != renderedLevel;
            demonstrationsRequired = competency.totalDemonstrationsRequired[level] || competency.totalDemonstrationsRequired.default;

            if (countDirty || averageDirty) {
                percentComplete = 100 * (count || 0) / demonstrationsRequired;
                progressCellEl.toggleCls('is-average-low', percentComplete >= 50 && average !== null && average < (level + competency.minimumAverageOffset)); // eslint-disable-line no-extra-parens
            }

            if (countDirty) {
                node.progressBarEl.setStyle('width', isNaN(percentComplete) ? '0' : Math.round(percentComplete) + '%');
                node.renderedCount = count;
            }

            if (levelDirty) {
                if (renderedLevel) {
                    progressCellEl.removeCls('cbl-level-'+renderedLevel);
                }

                progressCellEl.addCls('cbl-level-'+level);

                node.progressLevelEl.update(getLevelShortName(level));
                node.renderedLevel = level;
            }


            // loop through rendered skill rows (empty if not yet expanded) and update demonstration blocks
            studentSkills = node.skills;
            studentSkillsLength = studentSkills.length;
            studentSkillIndex = 0;
            for (; studentSkillIndex < studentSkillsLength; studentSkillIndex++) {
                studentSkill = studentSkills[studentSkillIndex];
                skill = studentSkill.skill;
                skillId = skill.getId();
                console.log(skillId);
                demonstrations = Ext.Array.clone(effectiveDemonstrations[skillId] || []); // TODO only use of skillId?

                if (levelDirty) {
                    demonstrationsCellEl = studentSkill.demonstrationsCellEl;

                    if (renderedLevel) {
                        demonstrationsCellEl.removeCls('cbl-level-'+renderedLevel);
                    }

                    demonstrationsCellEl.addCls('cbl-level-'+level);
                }

                // fill demonstrations array with undefined items
                demonstrationsLength = demonstrations.length = skill.getTotalDemonstrationsRequired(level);

                renderedDemonstrations = studentSkill.demonstrations;
                renderedDemonstrationsLength = renderedDemonstrations.length;
                demonstrationBlockEls = studentSkill.demonstrationBlockEls;

                demonstrationIndex = 0;
                for (; demonstrationIndex < demonstrationsLength; demonstrationIndex++) {
                    // gather information about incoming demonstration data
                    demonstration = demonstrations[demonstrationIndex];
                    demonstrationRating = demonstration ? demonstration.DemonstratedLevel : null;
                    demonstrationOverride = demonstration ? demonstration.Override : null;
                    demonstrationId = demonstration ? demonstration.DemonstrationID : null;

                    // gather information about previous render
                    if (demonstrationIndex <= renderedDemonstrationsLength) {
                        renderedDemonstration = renderedDemonstrations[demonstrationIndex];
                        renderedDemonstrationRating = renderedDemonstration ? renderedDemonstration.DemonstratedLevel : null;
                    } else {
                        renderedDemonstration = null;
                        renderedDemonstrationRating = null;
                    }

                    // get or create block element
                    demonstrationBlockEl = demonstrationBlockEls.item(demonstrationIndex);
                    if (!demonstrationBlockEl) {
                        demonstrationBlockEl = studentSkill.demonstrationsListEl.appendChild({
                            tag: 'li',
                            cls: 'cbl-grid-demo'
                        }, false);
                        demonstrationBlockEls.add(demonstrationBlockEl);
                    }

                    // detect changes from previous rendering
                    if (renderedDemonstration) {
                        demonstrationRatingDirty = renderedDemonstrationRating != demonstrationRating;
                        demonstrationOverrideDirty = renderedDemonstration.Override != demonstrationOverride;
                    } else {
                        demonstrationRatingDirty = true;
                        demonstrationOverrideDirty = true;
                    }


                    // update bits of infos
                    if (renderedDemonstration) {
                        // TODO: use a global template
                        if (demonstrationOverride) {
                            demonstrationHtml = '<i class="fa fa-check"></i>';
                        } else {
                            demonstrationHtml = getLevelShortName(demonstrationRating);
                        }
                    } else {
                        demonstrationHtml = "";
                    }


                    demonstrationBlockEl.update(demonstrationHtml);
                    demonstrationBlockEl.toggleCls('cbl-grid-demo-counted', Boolean(demonstrationRating || demonstrationOverride));

                    if (demonstrationRatingDirty) {
                        demonstrationBlockEl.toggleCls('cbl-level-' + renderedDemonstrationRating, false);                        
                        demonstrationBlockEl.toggleCls('cbl-level-' + demonstrationRating, true);                        
                        demonstrationBlockEl.toggleCls('cbl-grid-demo-missing', demonstrationRating === 0 && !demonstrationOverride);
                    }

                    if (demonstrationOverrideDirty) {
                        demonstrationBlockEl.toggleCls('cbl-level-' + renderedDemonstrationRating, false);                        
                        demonstrationBlockEl.toggleCls('cbl-level-' + demonstrationRating, true);                        

                        demonstrationBlockEl.toggleCls('cbl-grid-demo-override', demonstrationOverride);
                        demonstrationBlockEl.set({
                            'data-span': demonstrationOverride ? demonstrationsLength - demonstrationIndex : ''
                        });
                    }

                    if (!renderedDemonstration || renderedDemonstration.DemonstrationID != demonstrationId) {
                        demonstrationBlockEl.set({
                            'data-demonstration': demonstrationId || ''
                        });
                    }

                    // remove any existing subsequent blocks and skip rest of loop
                    if (demonstrationOverride || demonstrationIndex + 1 >= demonstrationsLength) {
                        while (demonstrationBlockEls.getCount() > demonstrationIndex + 1) {
                            demonstrationBlockEls.removeElement(demonstrationIndex + 1, true);
                        }
                        break;
                    }
                }

                // update reference for rendered demonstrations data to new data
                studentSkill.demonstrations = demonstrations;
            }
        }
    },
});