Ext.define('Baxter.cbl.overrides.Config', {override:'Slate.cbl.util.Config', getTitleForRating:function(rating) {
  return this.callOverridden([Math.min(rating, 6)]);
}, getAbbreviationForRating:function(rating) {
  return this.callOverridden([Math.min(rating, 6)]);
}}, function(Config) {
  Config.setLevels({0:{title:'No Evidence', abbreviation:'NE'}, 1:{title:'Entering', abbreviation:'EN'}, 2:{title:'Progressing', abbreviation:'PR'}, 3:{title:'Graduation Benchmark', abbreviation:'GB'}, 4:{title:'Advancing', abbreviation:'AD'}, 5:{title:'Excelling', abbreviation:'EX'}, 6:{title:'Beyond Assessment', abbreviation:'BA'}});
  Config.setRatings(Config.getLevels());
});
Ext.define('Baxter.cbl.overrides.RemoveRecentProgress', {override:'SlateDemonstrationsStudent.controller.RecentProgress', onStudentChange:Ext.emptyFn, onContentAreaChange:Ext.emptyFn, onLaunch:function() {
  var recentProgressPanel = this.getRecentProgressPanel();
  recentProgressPanel.previousSibling('component').setStyle('width', '100%');
  recentProgressPanel.ownerCt.remove(recentProgressPanel, false);
}});
Ext.define('Baxter.cbl.override.Slider', {override:'Slate.cbl.field.ratings.Slider', config:{minRating:1, maxRating:6, menuRatings:[0]}});
Ext.define('Baxter.cbl.override.StudentLevelsLegend', {override:'SlateDemonstrationsStudent.view.Dashboard', initItems:function() {
  this.callParent();
  this.insert(3, {xtype:'component', style:{textAlign:'right', marginBottom:'3%'}, renderTpl:['\x3cdiv class\x3d"cbl-grid-legend"\x3e', '\x3cspan class\x3d"cbl-grid-legend-label"\x3ePortfolios:\x26ensp;\x3c/span\x3e', '\x3ctpl foreach\x3d"Slate.cbl.util.Config.getLevels()"\x3e', '\x3ctpl if\x3d"xkey !\x3d 0"\x3e', '\x3cspan class\x3d"cbl-grid-legend-item level-color cbl-level-{$}" title\x3d"{title:htmlEncode}"\x3e{abbreviation:htmlEncode}\x3c/span\x3e', '\x3c/tpl\x3e', '\x3c/tpl\x3e', '\x3c/div\x3e']});
}});
