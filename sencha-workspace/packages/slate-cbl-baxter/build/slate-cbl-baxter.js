Ext.define('Baxter.cbl.overrides.Config',{override:'Slate.cbl.util.Config',getTitleForRating:function(a){return this.callOverridden([Math.min(a,6)])},getAbbreviationForRating:function(a){return this.callOverridden([Math.min(a,6)])}},function(a){a.setLevels({0:{title:'No Evidence',abbreviation:'NE'},1:{title:'Entering',abbreviation:'EN'},2:{title:'Progressing',abbreviation:'PR'},3:{title:'Graduation Benchmark',abbreviation:'GB'},4:{title:'Advancing',abbreviation:'AD'},5:{title:'Excelling',abbreviation:'EX'},6:{title:'Beyond Assessment',abbreviation:'BA'}});a.setRatings(a.getLevels())});Ext.define('Baxter.cbl.overrides.RemoveRecentProgress',{override:'SlateDemonstrationsStudent.controller.RecentProgress',onStudentChange:Ext.emptyFn,onContentAreaChange:Ext.emptyFn,onLaunch:function(){var a=this.getRecentProgressPanel();a.previousSibling('component').setStyle('width','100%');a.ownerCt.remove(a,!1)}});Ext.define('Baxter.cbl.override.Slider',{override:'Slate.cbl.field.ratings.Slider',config:{minRating:1,maxRating:6,menuRatings:[0]}});Ext.define('Baxter.cbl.override.StudentLevelsLegend',{override:'SlateDemonstrationsStudent.view.Dashboard',initItems:function(){this.callParent();this.insert(3,{xtype:'component',style:{textAlign:'right',marginBottom:'3%'},renderTpl:['<div class="cbl-grid-legend">','<span class="cbl-grid-legend-label">Portfolios:&ensp;</span>','<tpl foreach="Slate.cbl.util.Config.getLevels()">','<tpl if="xkey != 0">','<span class="cbl-grid-legend-item level-color cbl-level-{$}" title="{title:htmlEncode}">{abbreviation:htmlEncode}</span>','</tpl>','</tpl>','</div>']})}});