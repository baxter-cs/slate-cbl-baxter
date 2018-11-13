<?php

use Slate\CBL\StudentCompetency;
use Slate\CBL\Demonstrations\DemonstrationSkill;


StudentCompetency::$getDemonstrationConditions = function(StudentCompetency $StudentCompetency, array $conditions) {

    unset($conditions['TargetLevel']);

    $level = $StudentCompetency->Level;
    $or[] = "DemonstrationSkill.DemonstratedLevel >= $level";
    $or[] = "DemonstrationSkill.Override = 1 AND DemonstrationSkill.TargetLevel = $level";
    $or[] = "DemonstrationSkill.DemonstratedLevel = 0 AND DemonstrationSkill.TargetLevel = $level";
    $conditions[] = '('.implode(') OR (', $or).')';

    return $conditions;
};