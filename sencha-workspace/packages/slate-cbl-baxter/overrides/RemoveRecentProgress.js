Ext.define('Baxter.cbl.overrides.RemoveRecentProgress', {
    override: 'SlateDemonstrationsStudent.controller.RecentProgress',

    onStudentChange: Ext.emptyFn,
    onContentAreaChange: Ext.emptyFn,

    onLaunch: function() {
        var recentProgressPanel = this.getRecentProgressPanel();

        recentProgressPanel.previousSibling('component').setStyle('width', '100%');

        recentProgressPanel.ownerCt.remove(recentProgressPanel, false);
    }
});