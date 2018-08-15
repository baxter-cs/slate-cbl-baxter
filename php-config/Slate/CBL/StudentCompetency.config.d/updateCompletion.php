<?php
use Slate\CBL\StudentCompetency;

StudentCompetency::$isLevelComplete = function($self) {
    $atLevel = $self->getDemonstrationsAtLevel();    
    $competencyEvidenceRequirements = $self->Competency->getTotalDemonstrationsRequired($self->Level);
    if ($competencyEvidenceRequirements && $atLevel < $competencyEvidenceRequirements) {
        return false;
    }
};

StudentCompetency::$getDemonstrationDataCustom = function($this, $queryParams) {
        return DB::arrayTable(
        'SkillID',
        
        'SELECT DemonstrationSkill.*,
               Demonstration.Demonstrated AS DemonstrationDate
          FROM `%s` DemonstrationSkill
          JOIN (SELECT ID, Demonstrated FROM `%s` WHERE StudentID = %u) Demonstration
            ON Demonstration.ID = DemonstrationSkill.DemonstrationID
         WHERE DemonstrationSkill.SkillID IN (%s) AND
        (
            DemonstrationSkill.DemonstratedLevel >= %5$u
            OR (DemonstrationSkill.Override = 1 AND DemonstrationSkill.TargetLevel = %5$u)
        )                        
        ORDER BY SkillID, DemonstrationDate, DemonstrationID',
        $queryParams
        );       
};