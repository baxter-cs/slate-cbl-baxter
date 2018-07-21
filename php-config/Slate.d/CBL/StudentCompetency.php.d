<?php
use Slate\CBL\StudentCompetency;

StudentCompetency::getCompletion = function() {
    return [
        'StudentID' => $this->StudentID,
        'CompetencyID' => $this->CompetencyID,
        'currentLevel' => $this->Level,
        'baselineRating' => $this->BaselineRating,
        'demonstrationsLogged' => $this->getDemonstrationsLogged(),
        'demonstrationsMissed' => $this->getDemonstrationsMissed(),
        'demonstrationsComplete' => $this->getDemonstrationsComplete(),
        'demonstrationsAverage' => $this->getDemonstrationsAverage(),
        'demonstrationsRequired' => $this->getDemonstrationsRequired(),
        'growth' => $this->getGrowth()
    ];
}

private $demonstrationData;
StudentCompetency::getDemonstrationData = function() {
    if ($this->demonstrationData === null) {
        // TODO: cache dynamically, maybe use models instead for parsing DemonstrationSkill results?
        try {
            $skillIds = $this->Competency->getSkillIds();

            if (count($skillIds)) {
                $this->demonstrationData = DB::arrayTable(
                    'SkillID',
                    '
                    SELECT DemonstrationSkill.*,
                           Demonstration.Demonstrated AS DemonstrationDate
                      FROM `%s` DemonstrationSkill
                      JOIN (SELECT ID, Demonstrated FROM `%s` WHERE StudentID = %u) Demonstration
                        ON Demonstration.ID = DemonstrationSkill.DemonstrationID
                     WHERE DemonstrationSkill.SkillID IN (%s)
                       AND DemonstrationSkill.TargetLevel = %u
                     ORDER BY SkillID, DemonstrationDate, DemonstrationID
                    ',
                    [
                        DemonstrationSkill::$tableName,
                        Demonstration::$tableName,
                        $this->StudentID,
                        join(', ', $skillIds),
                        $this->Level
                    ]
                );

                foreach ($this->demonstrationData as &$demonstrationSkills) {
                    foreach ($demonstrationSkills as &$demonstrationSkill) {
                        $demonstrationSkill['ID'] = intval($demonstrationSkill['ID']);
                        $demonstrationSkill['Created'] = strtotime($demonstrationSkill['Created']);
                        $demonstrationSkill['CreatorID'] = intval($demonstrationSkill['CreatorID']);
                        $demonstrationSkill['DemonstrationID'] = intval($demonstrationSkill['DemonstrationID']);
                        $demonstrationSkill['SkillID'] = intval($demonstrationSkill['SkillID']);
                        $demonstrationSkill['DemonstrationDate'] = strtotime($demonstrationSkill['DemonstrationDate']);
                        $demonstrationSkill['TargetLevel'] = intval($demonstrationSkill['TargetLevel']);
                        $demonstrationSkill['DemonstratedLevel'] = intval($demonstrationSkill['DemonstratedLevel']);
                        $demonstrationSkill['Override'] = $demonstrationSkill['Override'] == '1';
                    }
                }
            } else {
                $this->demonstrationData = [];
            }
        } catch (TableNotFoundException $e) {
            $this->demonstrationData = [];
        }
    }

    return $this->demonstrationData;
}