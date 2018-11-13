<?php

use Slate\CBL\Skill;
use Slate\CBL\StudentCompetency;


StudentCompetency::$dynamicFields['demonstrationsAtLevel'] = [
    'method' => function(StudentCompetency $StudentCompetency) {
        static $cache = [];
        
        if ($StudentCompetency->isPhantom) {
            return null;
        }

        $demonstrationsAtLevel = &$cache[$StudentCompetency->ID];

        if ($demonstrationsAtLevel === null) {
            $demonstrationsAtLevel = 0;

            foreach ($StudentCompetency->getEffectiveDemonstrationsData() as $skillId => $demonstrationData) {
                $Skill = Skill::getByID($skillId);
                $demonstrationsRequired = $Skill->getDemonstrationsRequiredByLevel($StudentCompetency->Level);
                $skillCount = 0;
                $level = $StudentCompetency->Level;

                foreach ($demonstrationData as $demonstration) {
                    if (!empty($demonstration['Override'])) {
                        $skillCount += $demonstrationsRequired;
                    } elseif (!empty($demonstration['DemonstratedLevel']) && $demonstration['DemonstratedLevel'] >= $level) {
                        $skillCount++;
                    }
                }

                $demonstrationsAtLevel += min($demonstrationsRequired, $skillCount);
            }
        }

        return $demonstrationsAtLevel;
    }
];