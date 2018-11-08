function getLevelShortName(level) {
  if (level <= 0) {
    return 'NE';
  }
  if (level < 1) {
    return 'IE';
  }
  if (level > 5) {
    return 'BA';
  }
  return ['NE', 'EN', 'PR', 'GB', 'AD', 'EX'][level];
}
function getLevelName(level) {
  if (level <= 0) {
    return 'No Evidence';
  }
  if (level < 1) {
    return 'Insufficient Evidence';
  }
  if (level > 5) {
    return 'Beyond Assessment';
  }
  return ['No Evidence', 'Entering', 'Progressing', 'Graduation Benchmark', 'Advancing', 'Excelling'][level];
}
Ext.define('Baxter.cbl.overrides.StudentCompetencies', {override:'SlateDemonstrationsStudent.view.CompetencyCard', renderTpl:['\x3cheader class\x3d"slate-simplepanel-header"\x3e', '\x3cdiv  class\x3d"slate-simplepanel-title"\x3e', '\x3cspan id\x3d"{id}-codeEl" data-ref\x3d"codeEl"\x3e{competency.Code:htmlEncode}\x3c/span\x3e', '\x3csmall id\x3d"{id}-descriptorEl" data-ref\x3d"descriptorEl"\x3e{competency.Descriptor:htmlEncode}\x3c/small\x3e', '\x3c/div\x3e', '\x3c/header\x3e', '\x3cdiv id\x3d"{id}-meterEl" data-ref\x3d"meterEl" class\x3d"cbl-progress-meter \x3ctpl if\x3d"isAverageLow"\x3eis-average-low\x3c/tpl\x3e"\x3e', 
'\x3cdiv id\x3d"{id}-meterLevelEl" data-ref\x3d"meterLevelEl" class\x3d"cbl-progress-level no-select"\x3e\x3ctpl if\x3d"level"\x3e{levelName}\x3c/tpl\x3e\x3c/div\x3e', '\x3c/div\x3e', '\x3cdiv class\x3d"stats-ct"\x3e', '\x3c/div\x3e', '\x3cdiv class\x3d"slate-simplepanel-body explainer"\x3e', '\x3cp id\x3d"{id}-statementEl" data-ref\x3d"statementEl"\x3e{competency.Statement:htmlEncode}\x3c/p\x3e', '\x3c/div\x3e', '\x3cul id\x3d"{id}-skillsCt" data-ref\x3d"skillsCt" class\x3d"cbl-skill-meter"\x3e', 
'\x3ctpl if\x3d"skills"\x3e', '{% values.skillsTpl.applyOut(values.skills, out); %}', '\x3c/tpl\x3e', '\x3c/ul\x3e'], skillsTpl:['\x3ctpl for\x3d"."\x3e', '\x3cli class\x3d"cbl-skill" data-skill\x3d"{Code}"\x3e', '\x3ch5 class\x3d"cbl-skill-name"\x3e{Descriptor:htmlEncode}\x3c/h5\x3e', '\x3cul class\x3d"cbl-skill-demos"\x3e', '\x3ctpl for\x3d"demonstrations"\x3e', '\x3ctpl if\x3d"."\x3e', '\x3cli ', 'data-demonstration\x3d"{DemonstrationID}"', 'class\x3d"', ' cbl-skill-demo', '\x3ctpl if\x3d"Override"\x3e', 
' cbl-skill-override', ' cbl-skill-span-{[xcount - xindex + 1]}', '\x3c/tpl\x3e', '\x3ctpl if\x3d"DemonstratedLevel || Override"\x3e', ' cbl-skill-demo-counted', ' cbl-level-{DemonstratedLevel}', ' level-color', '\x3ctpl else\x3e', ' cbl-skill-demo-uncounted', '\x3c/tpl\x3e', '"', '\x3e', '\x3ctpl if\x3d"Override"\x3e', '\x3ci class\x3d"fa fa-check"\x3e\x3c/i\x3e', '\x3ctpl elseif\x3d"DemonstratedLevel \x3d\x3d 0"\x3e', 'NE', '\x3ctpl else\x3e', '{[getLevelShortName(values.DemonstratedLevel)]}', 
'\x3c/tpl\x3e', '\x3c/li\x3e', '{% if (values.Override) break; %}', '\x3ctpl else\x3e', '\x3cli class\x3d"cbl-skill-demo cbl-skill-demo-uncounted"\x3e\x26nbsp;\x3c/li\x3e', '\x3c/tpl\x3e', '\x3c/tpl\x3e', '\x3cli class\x3d"cbl-skill-complete-indicator \x3ctpl if\x3d"isLevelComplete"\x3eis-checked\x3c/tpl\x3e"\x3e', '\x3ci class\x3d"fa fa-2x fa-check-circle-o"\x3e\x3c/i\x3e', '\x3c/li\x3e', '\x3c/ul\x3e', '\x3cdiv class\x3d"cbl-skill-description"\x3e\x3cp\x3e{Statement}\x3c/p\x3e\x3c/div\x3e', '\x3c/li\x3e', 
'\x3c/tpl\x3e'], initRenderData:function() {
  var me = this;
  return Ext.apply(this.callParent(), {levelShortName:getLevelShortName(me.getLevel()), levelName:getLevelName(me.getLevel())});
}, updateLevel:function(newLevel, oldLevel) {
  var me = this;
  if (oldLevel) {
    me.removeCls('cbl-level-' + oldLevel);
  }
  if (newLevel) {
    me.addCls('cbl-level-' + newLevel);
  }
  if (me.rendered) {
    me.meterLevelEl.update(newLevel ? 'Y' + (newLevel - 8) : '');
  }
}});
function getLevelShortName(level) {
  if (level <= 0) {
    return 'NE';
  }
  if (level < 1) {
    return 'IE';
  }
  if (level > 5) {
    return 'BA';
  }
  return ['NE', 'EN', 'PR', 'GB', 'AD', 'EX'][level];
}
function getLevelName(level) {
  if (level <= 0) {
    return 'No Evidence';
  }
  if (level < 1) {
    return 'Insufficient Evidence';
  }
  if (level > 5) {
    return 'Beyond Assessment';
  }
  return ['No Evidence', 'Entering', 'Progressing', 'Graduation Benchmark', 'Advancing', 'Excelling'][level];
}
Ext.define('Baxter.cbl.overrides.ProgressGrid', {override:'SlateDemonstrationsTeacher.view.ProgressGrid', tpl:['{%var studentsCount \x3d values.studentsCount%}', '{%var competenciesCount \x3d values.competenciesCount%}', '\x3ctpl if\x3d"competenciesCount \x3d\x3d\x3d 0 || studentsCount \x3d\x3d\x3d 0"\x3e', '\x3cdiv class\x3d"cbl-grid-ct"\x3e', '\x3ctable class\x3d"cbl-grid cbl-grid-competencies"\x3e\x3c/table\x3e', '\x3c/div\x3e', '\x3cdiv class\x3d"cbl-grid-ct"\x3e', '\x3ctable class\x3d"cbl-grid cbl-grid-main"\x3e\x3c/table\x3e', 
'\x3c/div\x3e', '\x3ctpl else\x3e', '\x3cdiv class\x3d"cbl-grid-ct"\x3e', '\x3ctable class\x3d"cbl-grid cbl-grid-competencies"\x3e', '\x3ccolgroup class\x3d"cbl-grid-competency-col"\x3e\x3c/colgroup\x3e', '\x3cthead\x3e', '\x3ctr\x3e', '\x3ctd class\x3d"cbl-grid-corner-cell"\x3e\x26nbsp;\x3c/td\x3e', '\x3c/tr\x3e', '\x3c/thead\x3e', '\x3ctbody\x3e', '\x3ctpl for\x3d"competencies"\x3e', '\x3ctpl for\x3d"competency"\x3e', '\x3ctr class\x3d"cbl-grid-progress-row" data-competency\x3d"{ID}"\x3e', '\x3cth class\x3d"cbl-grid-competency-name"\x3e\x3cdiv class\x3d"ellipsis"\x3e{Descriptor}\x3c/div\x3e\x3c/th\x3e', 
'\x3c/tr\x3e', '\x3ctr class\x3d"cbl-grid-skills-row" data-competency\x3d"{ID}"\x3e', '\x3ctd class\x3d"cbl-grid-skills-cell"\x3e', '\x3cdiv class\x3d"cbl-grid-skills-ct"\x3e', '\x3ctable class\x3d"cbl-grid-skills-grid"\x3e', '\x3ccolgroup class\x3d"cbl-grid-skill-col"\x3e\x3c/colgroup\x3e', '\x3ctbody\x3e\x3c/tbody\x3e', '\x3c/table\x3e', '\x3c/div\x3e', '\x3c/td\x3e', '\x3c/tr\x3e', '\x3c/tpl\x3e', '\x3c/tpl\x3e', '\x3c/tbody\x3e', '\x3c/table\x3e', '\x3cdiv class\x3d"cbl-grid-scroll-ct"\x3e', 
'\x3ctable class\x3d"cbl-grid cbl-grid-main"\x3e', '\x3ccolgroup span\x3d"{[studentsCount]}" class\x3d"cbl-grid-progress-col"\x3e\x3c/colgroup\x3e', '\x3cthead\x3e', '\x3ctr\x3e', '\x3ctpl for\x3d"students"\x3e', '\x3cth class\x3d"cbl-grid-student-name" data-student\x3d"{student.ID}"\x3e', '\x3ctpl if\x3d"dashboardUrl"\x3e\x3ca href\x3d"{dashboardUrl}" target\x3d"_blank"\x3e\x3c/tpl\x3e', '{student.FirstName} {student.LastName}', '\x3ctpl if\x3d"dashboardUrl"\x3e\x3c/a\x3e\x3c/tpl\x3e', '\x3c/th\x3e', 
'\x3c/tpl\x3e', '\x3c/tr\x3e', '\x3c/thead\x3e', '\x3ctbody\x3e', '\x3ctpl for\x3d"competencies"\x3e', '\x3ctr class\x3d"cbl-grid-progress-row" data-competency\x3d"{competency.ID}"\x3e', '\x3ctpl for\x3d"students"\x3e', '\x3ctd class\x3d"cbl-grid-progress-cell" data-student\x3d"{student.ID}"\x3e', '\x3cspan class\x3d"cbl-grid-progress-bar" style\x3d"width: 0%"\x3e\x3c/span\x3e', '\x3cspan class\x3d"cbl-grid-progress-level"\x3e\x3c/span\x3e', '\x3c/td\x3e', '\x3c/tpl\x3e', '\x3c/tr\x3e', '\x3ctr class\x3d"cbl-grid-skills-row" data-competency\x3d"{competency.ID}"\x3e', 
'\x3ctd class\x3d"cbl-grid-skills-cell" colspan\x3d"{[studentsCount]}""\x3e', '\x3cdiv class\x3d"cbl-grid-skills-ct"\x3e', '\x3ctable class\x3d"cbl-grid-skills-grid"\x3e', '\x3ccolgroup span\x3d"{[studentsCount]}"" class\x3d"cbl-grid-demos-col"\x3e\x3c/colgroup\x3e', '\x3ctbody\x3e\x3c/tbody\x3e', '\x3c/table\x3e', '\x3c/div\x3e', '\x3c/td\x3e', '\x3c/tr\x3e', '\x3c/tpl\x3e', '\x3c/tbody\x3e', '\x3c/table\x3e', '\x3c/div\x3e', '\x3c/div\x3e', '\x3cdiv class\x3d"cbl-grid-legend"\x3e', '\x3cspan class\x3d"cbl-grid-legend-label"\x3ePortfolios:\x26ensp;\x3c/span\x3e', 
'\x3cspan class\x3d"cbl-grid-legend-item level-color cbl-level-1"\x3eEN\x3c/span\x3e', '\x3cspan class\x3d"cbl-grid-legend-item level-color cbl-level-2"\x3ePR\x3c/span\x3e', '\x3cspan class\x3d"cbl-grid-legend-item level-color cbl-level-3"\x3eGB\x3c/span\x3e', '\x3cspan class\x3d"cbl-grid-legend-item level-color cbl-level-4"\x3eAD\x3c/span\x3e', '\x3cspan class\x3d"cbl-grid-legend-item level-color cbl-level-5"\x3eEX\x3c/span\x3e', '\x3cspan class\x3d"cbl-grid-legend-item level-color cbl-level-6"\x3eBA\x3c/span\x3e', 
'\x3c/div\x3e', '\x3c/tpl\x3e'], competencySkillsTpl:['\x3ctpl for\x3d"skills"\x3e', '\x3ctr class\x3d"cbl-grid-skill-row" data-skill\x3d"{skill.ID}"\x3e', '\x3cth class\x3d"cbl-grid-skill-name" data-skill-name\x3d"{skill.Descriptor:htmlEncode}" data-skill-description\x3d"{skill.Statement:htmlEncode}"\x3e', '\x3cdiv class\x3d"ellipsis"\x3e{skill.Descriptor:htmlEncode}\x3c/div\x3e', '\x3c/th\x3e', '\x3c/tr\x3e', '\x3c/tpl\x3e'], competencyDemonstrationsTpl:['\x3ctpl for\x3d"skills"\x3e', '\x3ctr class\x3d"cbl-grid-skill-row" data-skill\x3d"{skill.ID}"\x3e', 
'\x3ctpl for\x3d"students"\x3e', '\x3ctd class\x3d"cbl-grid-demos-cell " data-student\x3d"{student.ID}"\x3e', '\x3cul class\x3d"cbl-grid-demos"\x3e', '\x3ctpl for\x3d"demonstrations"\x3e', '\x3ctpl if\x3d"."\x3e', '\x3cli', ' data-demonstration\x3d"{DemonstrationID}"', '\x3ctpl if\x3d"Override"\x3e data-span\x3d"{[xcount - xindex + 1]}"\x3c/tpl\x3e', ' class\x3d"', ' level-color cbl-level-{DemonstratedLevel}', ' cbl-grid-demo', '\x3ctpl if\x3d"Override"\x3e', ' cbl-grid-demo-override', '\x3c/tpl\x3e', 
'\x3ctpl if\x3d"DemonstratedLevel || Override"\x3e', ' cbl-grid-demo-counted', '\x3ctpl elseif\x3d"DemonstratedLevel \x3d\x3d 0"\x3e', ' cbl-grid-demo-missing', '\x3ctpl else\x3e', ' cbl-grid-demo-uncounted', '\x3c/tpl\x3e', '"', '\x3e', '\x3ctpl if\x3d"Override"\x3e', '\x3ci class\x3d"fa fa-check"\x3e\x3c/i\x3e', '\x3ctpl else\x3e', '{[ getLevelShortName(values.DemonstratedLevel )]}', '\x3c/tpl\x3e', '\x3c/li\x3e', '{% if (values.Override) break; %}', '\x3ctpl else\x3e', '\x3cli class\x3d"cbl-grid-demo cbl-grid-demo-uncounted"\x3e\x26nbsp;\x3c/li\x3e', 
'\x3c/tpl\x3e', '\x3c/tpl\x3e', '\x3c/ul\x3e', '\x3c/td\x3e', '\x3c/tpl\x3e', '\x3c/tr\x3e', '\x3c/tpl\x3e'], loadStudentCompetencies:function(studentCompetencies, forceDirty) {
  studentCompetencies = Ext.isArray(studentCompetencies) ? studentCompetencies : [studentCompetencies];
  var me = this, competenciesById, studentCompetenciesLength = studentCompetencies.length, studentCompetencyIndex, studentCompetency, competencyId, competencyData, studentId, node, competency, dirtyNodes = [], dirtyNodesLength, dirtyNodeIndex, progressCellEl, count, average, level, effectiveDemonstrations, renderedLevel, countDirty, averageDirty, levelDirty, percentComplete, demonstrationsRequired, averageFormat = me.getAverageFormat(), progressFormat = me.getProgressFormat(), studentSkills, studentSkillsLength, 
  studentSkillIndex, studentSkill, demonstrationsCellEl, skillId, skill, demonstrations, renderedDemonstrations, demonstrationBlockEls, demonstrationsLength, demonstrationIndex, demonstration, renderedDemonstrationsLength, renderedDemonstration, renderedDemonstrationRating, demonstrationBlockEl, demonstrationRating, demonstrationOverride, demonstrationId, demonstrationRatingDirty, demonstrationOverrideDirty, demonstrationHtml;
  if (!me.rendered) {
    me.on('afterrender', function() {
      me.loadStudentCompetencies(studentCompetencies);
    }, me, {single:true});
    return;
  }
  competenciesById = me.getData().competenciesById;
  for (studentCompetencyIndex = 0; studentCompetencyIndex < studentCompetenciesLength; studentCompetencyIndex++) {
    studentCompetency = studentCompetencies[studentCompetencyIndex];
    competencyId = studentCompetency.get('CompetencyID');
    competencyData = competenciesById[competencyId];
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
  for (dirtyNodesLength = dirtyNodes.length, dirtyNodeIndex = 0; dirtyNodeIndex < dirtyNodesLength; dirtyNodeIndex++) {
    node = dirtyNodes[dirtyNodeIndex];
    competency = node.competency;
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
    demonstrationsRequired = competency.totalDemonstrationsRequired[level] || competency.totalDemonstrationsRequired['default'];
    if (countDirty || averageDirty) {
      percentComplete = 100 * (count || 0) / demonstrationsRequired;
    }
    if (countDirty) {
      node.progressBarEl.setStyle('width', isNaN(percentComplete) ? '0' : Math.round(percentComplete) + '%');
      node.renderedCount = count;
    }
    if (levelDirty) {
      if (renderedLevel) {
        progressCellEl.removeCls('cbl-level-' + renderedLevel);
      }
      progressCellEl.addCls('cbl-level-' + level);
      node.progressLevelEl.update(getLevelShortName(level));
      node.renderedLevel = level;
    }
    studentSkills = node.skills;
    studentSkillsLength = studentSkills.length;
    studentSkillIndex = 0;
    for (; studentSkillIndex < studentSkillsLength; studentSkillIndex++) {
      studentSkill = studentSkills[studentSkillIndex];
      skill = studentSkill.skill;
      skillId = skill.getId();
      console.log(skillId);
      demonstrations = Ext.Array.clone(effectiveDemonstrations[skillId] || []);
      if (levelDirty) {
        demonstrationsCellEl = studentSkill.demonstrationsCellEl;
        if (renderedLevel) {
          demonstrationsCellEl.removeCls('cbl-level-' + renderedLevel);
        }
        demonstrationsCellEl.addCls('cbl-level-' + level);
      }
      demonstrationsLength = demonstrations.length = skill.getTotalDemonstrationsRequired(level);
      renderedDemonstrations = studentSkill.demonstrations;
      renderedDemonstrationsLength = renderedDemonstrations.length;
      demonstrationBlockEls = studentSkill.demonstrationBlockEls;
      demonstrationIndex = 0;
      for (; demonstrationIndex < demonstrationsLength; demonstrationIndex++) {
        demonstration = demonstrations[demonstrationIndex];
        demonstrationRating = demonstration ? demonstration.DemonstratedLevel : null;
        demonstrationOverride = demonstration ? demonstration.Override : null;
        demonstrationId = demonstration ? demonstration.DemonstrationID : null;
        if (demonstrationIndex <= renderedDemonstrationsLength) {
          renderedDemonstration = renderedDemonstrations[demonstrationIndex];
          renderedDemonstrationRating = renderedDemonstration ? renderedDemonstration.DemonstratedLevel : null;
        } else {
          renderedDemonstration = null;
          renderedDemonstrationRating = null;
        }
        demonstrationBlockEl = demonstrationBlockEls.item(demonstrationIndex);
        if (!demonstrationBlockEl) {
          demonstrationBlockEl = studentSkill.demonstrationsListEl.appendChild({tag:'li', cls:'cbl-grid-demo'}, false);
          demonstrationBlockEls.add(demonstrationBlockEl);
        }
        if (renderedDemonstration) {
          if (demonstrationOverride) {
            demonstrationHtml = '\x3ci class\x3d"fa fa-check"\x3e\x3c/i\x3e';
          }
          demonstrationRatingDirty = renderedDemonstrationRating != demonstrationRating;
          demonstrationOverrideDirty = renderedDemonstration.Override != demonstrationOverride;
        } else {
          demonstrationRatingDirty = true;
          demonstrationOverrideDirty = true;
        }
        demonstrationHtml = demonstrationRating ? getLevelShortName(demonstrationRating) : '';
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
          demonstrationBlockEl.set({'data-span':demonstrationOverride ? demonstrationsLength - demonstrationIndex : ''});
        }
        if (!renderedDemonstration || renderedDemonstration.DemonstrationID != demonstrationId) {
          demonstrationBlockEl.set({'data-demonstration':demonstrationId || ''});
        }
        if (demonstrationOverride || demonstrationIndex + 1 >= demonstrationsLength) {
          while (demonstrationBlockEls.getCount() > demonstrationIndex + 1) {
            demonstrationBlockEls.removeElement(demonstrationIndex + 1, true);
          }
          break;
        }
      }
      studentSkill.demonstrations = demonstrations;
    }
  }
}});
Ext.define('Baxter.cbl.overrides.RecentProgress', {override:'SlateDemonstrationsStudent.view.RecentProgress', title:'Recent Progress', cls:'slate-tasks-student-recentactivity', tpl:['\x3cdiv class\x3d"table-ct"\x3e', '\x3cdiv\x3eTemporarily Disabled\x3c/div\x3e', '\x3c/div\x3e']});
function getLevelShortName(level) {
  if (level <= 0) {
    return 'NE';
  }
  if (level < 1) {
    return 'IE';
  }
  if (level > 5) {
    return 'BA';
  }
  return ['NE', 'EN', 'PR', 'GB', 'AD', 'EX'][level];
}
function getLevelName(level) {
  if (level <= 0) {
    return 'No Evidence';
  }
  if (level < 1) {
    return 'Insufficient Evidence';
  }
  if (level > 5) {
    return 'Beyond Assessment';
  }
  return ['No Evidence', 'Entering', 'Progressing', 'Graduation Benchmark', 'Advancing', 'Excelling'][level];
}
Ext.define('Baxter.cbl.overrides.SkillList', {override:'Slate.cbl.view.demonstrations.SkillList', tpl:['\x3cthead\x3e', '\x3ctr class\x3d"skill-list-header-row"\x3e', '\x3cth class\x3d"skill-list-header skill-list-demo-index"\x3e\x26nbsp;\x3c/th\x3e', '\x3cth class\x3d"skill-list-header skill-list-demo-date"\x3eDate\x3c/th\x3e', '\x3cth class\x3d"skill-list-header skill-list-demo-level"\x3eRating\x3c/th\x3e', '\x3cth class\x3d"skill-list-header skill-list-demo-experience"\x3eExperience Type\x3c/th\x3e', 
'\x3cth class\x3d"skill-list-header skill-list-demo-context"\x3eExperience Name\x3c/th\x3e', '\x3cth class\x3d"skill-list-header skill-list-demo-task"\x3ePerformance\x26nbsp;Task\x3c/th\x3e', '\x3c/tr\x3e', '\x3c/thead\x3e', '\x3ctpl if\x3d"values \x26\x26 values.length"\x3e', '\x3ctpl for\x3d"."\x3e', '\x3ctbody class\x3d"skill-list-demo \x3ctpl if\x3d"highlighted"\x3e{[this.owner.highlightedRowCls]}\x3c/tpl\x3e" data-demonstration\x3d"{Demonstration.ID}" data-demonstration-skill\x3d"{ID}"\x3e', 
'\x3ctr class\x3d"skill-list-demo-row"\x3e', '\x3ctd class\x3d"skill-list-demo-data skill-list-demo-index"\x3e{[xindex]}\x3c/td\x3e', '\x3ctd class\x3d"skill-list-demo-data skill-list-demo-date"\x3e{Demonstrated:date}\x3c/td\x3e', '\x3ctd class\x3d"skill-list-demo-data skill-list-demo-level"\x3e', '\x3cdiv class\x3d"level-color cbl-level-{DemonstratedLevel}"\x3e', '\x3ctpl if\x3d"Override"\x3e', '\x3ci class\x3d"fa fa-check"\x3e\x3c/i\x3e', '\x3ctpl elseif\x3d"DemonstratedLevel\x3d\x3d0"\x3e', 'NE', 
'\x3ctpl else\x3e', '{[getLevelShortName(values.DemonstratedLevel)]}', '\x3c/tpl\x3e', '\x3c/div\x3e', '\x3c/td\x3e', '\x3ctpl if\x3d"Override"\x3e', '\x3ctd colspan\x3d"3" class\x3d"skill-list-demo-data skill-list-override"\x3eOverride\x3c/td\x3e', '\x3ctpl else\x3e', '\x3ctd class\x3d"skill-list-demo-data skill-list-demo-type"\x3e{Demonstration.ExperienceType:htmlEncode}\x3c/td\x3e', '\x3ctd class\x3d"skill-list-demo-data skill-list-demo-context"\x3e{Demonstration.Context:htmlEncode}\x3c/td\x3e', 
'\x3ctd class\x3d"skill-list-demo-data skill-list-demo-task"\x3e{Demonstration.PerformanceType:htmlEncode}\x3c/td\x3e', '\x3c/tpl\x3e', '\x3c/tr\x3e', '\x3ctr class\x3d"skill-list-demo-detail-row" data-demonstration\x3d"{ID}"\x3e', '\x3ctd class\x3d"skill-list-demo-detail-data" colspan\x3d"6"\x3e', '\x3cdiv class\x3d"skill-list-demo-detail-ct"\x3e', '\x3ctpl if\x3d"Demonstration.ArtifactURL"\x3e', '\x3cdiv class\x3d"skill-list-demo-artifact"\x3e', '\x3cstrong\x3eArtifact: \x3c/strong\x3e', '\x3ca href\x3d"{Demonstration.ArtifactURL:htmlEncode}" target\x3d"_blank"\x3e{Demonstration.ArtifactURL:htmlEncode}\x3c/a\x3e', 
'\x3c/div\x3e', '\x3c/tpl\x3e', '\x3ctpl if\x3d"Demonstration.Comments"\x3e', '\x3cdiv class\x3d"skill-list-demo-comments"\x3e', '\x3cstrong\x3eComments: \x3c/strong\x3e', '{[Ext.util.Format.nl2br(Ext.util.Format.htmlEncode(values.Demonstration.Comments))]}', '\x3c/div\x3e', '\x3c/tpl\x3e', '\x3cdiv class\x3d"skill-list-demo-meta"\x3e', 'Demonstration #{DemonstrationID} \x26middot;\x26nbsp;', '\x3ctpl for\x3d"Creator"\x3e', '\x3ca href\x3d"{[Slate.API.buildUrl("/people/"+values.Username)]}" target\x3d"_blank"\x3e', 
'{FirstName} {LastName}', '\x3c/a\x3e', '\x3c/tpl\x3e', ' \x26middot;\x26nbsp;', '{Created:date("F j, Y, g:i a")}', '\x3ctpl if\x3d"showEditLinks"\x3e', ' \x26middot;\x26nbsp;', '\x3ca href\x3d"#edit"\x3eEdit\x3c/a\x3e | ', '\x3ca href\x3d"#delete"\x3eDelete\x3c/a\x3e', '\x3c/tpl\x3e', '\x3c/div\x3e', '\x3c/div\x3e', '\x3c/td\x3e', '\x3c/tr\x3e', '\x3c/tbody\x3e', '\x3c/tpl\x3e', '\x3ctpl else\x3e', '\x3ctr class\x3d"skill-list-emptytext-row"\x3e', '\x3ctd class\x3d"skill-list-emptytext-cell" colspan\x3d"6"\x3eNo demonstrations are logged yet for this skill\x3c/td\x3e', 
'\x3c/tr\x3e', '\x3c/tpl\x3e']});
Ext.define('Baxter.cbl.override.Slider', {override:'Slate.cbl.field.ratings.Slider', config:{minRating:1, maxRating:6, menuRatings:[0]}});
Ext.define('Baxter.cbl.overrides.StudentCompetencySummary', {override:'SlateDemonstrationsStudent.view.CompetenciesSummary', config:{contentAreaTitle:null, level:null, missed:null}, renderTpl:['\x3cheader class\x3d"slate-simplepanel-header"\x3e', '\x3cdiv class\x3d"slate-simplepanel-title"\x3eMy \x3cspan id\x3d"{id}-contentAreaTitleEl" data-ref\x3d"contentAreaTitleEl"\x3e{contentAreaTitle}\x3c/span\x3e Competencies\x3c/div\x3e', '\x3c/header\x3e', '\x3cdiv id\x3d"{id}-meterEl" data-ref\x3d"meterEl" class\x3d"cbl-progress-meter"\x3e', 
'\x3c/div\x3e', '\x3cdiv class\x3d"stats-ct"\x3e', '\x3c/div\x3e', '\x3cdiv class\x3d"cbl-grid-legend"\x3e', '\x3cspan class\x3d"cbl-grid-legend-label"\x3eLegend:\x26ensp;\x3c/span\x3e', '\x3cspan class\x3d"cbl-grid-legend-item level-color cbl-level-1"\x3eEN\x3c/span\x3e', '\x3cspan class\x3d"cbl-grid-legend-item level-color cbl-level-2"\x3ePR\x3c/span\x3e', '\x3cspan class\x3d"cbl-grid-legend-item level-color cbl-level-3"\x3eGB\x3c/span\x3e', '\x3cspan class\x3d"cbl-grid-legend-item level-color cbl-level-4"\x3eAD\x3c/span\x3e', 
'\x3cspan class\x3d"cbl-grid-legend-item level-color cbl-level-5"\x3eEX\x3c/span\x3e', '\x3cspan class\x3d"cbl-grid-legend-item level-color cbl-level-6"\x3eBA\x3c/span\x3e', '\x3c/div\x3e'], initRenderData:function() {
  var me = this;
  return Ext.apply(this.callParent(), {contentAreaTitle:me.getContentAreaTitle(), level:me.getLevel(), levelShortName:me.getLevelShortName(me.getLevel()), levelName:me.getLevelName(me.getLevel())});
}, getLevelShortName:function(level) {
  var level = this.level;
  if (level <= 0) {
    return 'NE';
  }
  if (level < 1) {
    return 'IE';
  }
  if (level > 5) {
    return 'BA';
  }
  return ['NE', 'EN', 'PR', 'GB', 'AD', 'EX'][level];
}, getLevelName:function(level) {
  var level = this.level;
  if (level <= 0) {
    return 'No Evidence';
  }
  if (level < 1) {
    return 'Insufficient Evidence';
  }
  if (level > 5) {
    return 'Beyond Assessment';
  }
  return ['No Evidence', 'Entering', 'Progressing', 'Graduation Benchmark', 'Advancing', 'Excelling'][level];
}, updateLevel:function(newLevel, oldLevel) {
  var me = this;
  if (oldLevel) {
  }
  if (newLevel) {
  }
}, updatePercentComplete:function(percentComplete) {
  return;
}, updateMissed:function(missed) {
  return;
}, updateAverage:function(average) {
  return;
}, updateGrowth:function(growth) {
  return;
}});
Ext.define('Baxter.cbl.override.Thumb', {override:'Slate.cbl.field.ratings.Thumb', contentTpl:['\x3ctpl if\x3d"value \x3d\x3d\x3d null"\x3e', '\x3csmall class\x3d"muted"\x3eN/A\x3c/small\x3e', '\x3ctpl elseif\x3d"value \x3d\x3d\x3d 0"\x3e', 'NE', '\x3ctpl else\x3e', '{[this.getLevelShortName(values.value)]}', '\x3c/tpl\x3e', {getLevelShortName:function(level) {
  if (level <= 0) {
    return 'NE';
  }
  if (level < 1) {
    return 'IE';
  }
  if (level > 5) {
    return 'BA';
  }
  return ['NE', 'EN', 'PR', 'GB', 'AD', 'EX'][level];
}}]});
