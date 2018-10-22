// TODO: deprecate
Ext.define('Baxter.cbl.override.TaskRater', {
    override: 'SlateTasksTeacher.view.TaskRater',

    config: {
        readOnly: null
    },


    // config handle
    updateStudentTask: function(studentTask) {
        var me = this,
            form = me.down('slate-modalform'),
            ratingsView = me.down('slate-ratingview'),
            commentsField = form.down('slate-commentsfield'),
            submissionsCmp = form.down('slate-tasks-submissions'),
            groupedSkills = studentTask.getTaskSkillsGroupedByCompetency();

        if (studentTask.get('DueDate')) {
            form.down('[name=DueDate]').setValue(studentTask.get('DueDate'));
        }

        form.down('[name=ExpirationDate]').setValue(studentTask.get('ExpirationDate'));

        form.down('[name=StudentFullName]').setValue(studentTask.get('Student').FirstName + ' ' + studentTask.get('Student').LastName);
        form.down('#student-attachments').setAttachments(studentTask.get('Attachments'));
        commentsField.setRecord(studentTask);
        submissionsCmp.setData(studentTask.get('Submissions'));
        ratingsView.setData({
            ratings: [0, 1, 2, 3, 4, 5, 6],
            competencies: groupedSkills
        });
    },

});
