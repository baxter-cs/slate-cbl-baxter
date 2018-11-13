<?php

use Slate\CBL\StudentCompetency;

StudentCompetency::$isLevelComplete = function(StudentCompetency $StudentCompetency) {
    $demonstrationsAtLevel = $StudentCompetency->getDynamicFieldValue('demonstrationsAtLevel');

    $competencyEvidenceRequirements = $StudentCompetency->Competency->getTotalDemonstrationsRequired($StudentCompetency->Level);

    if ($competencyEvidenceRequirements && $demonstrationsAtLevel < $competencyEvidenceRequirements) {
        return false;
    }

    return true;
};
