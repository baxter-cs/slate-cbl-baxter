<?php

Git::$repositories['slate-cbl-baxter'] = [
    'remote' => 'git@github.com:baxter-cs/slate-cbl-baxter.git',
    'originBranch' => 'builds/v1',
    'workingBranch' => 'builds/v1',
    'trees' => [
        'php-config/Emergence/WebApps/SenchaApp.config.d/slate-cbl-baxter.php',
        'php-config/Git.config.d/slate-cbl-baxter.php',
        'php-config/Slate/UI/UserProfile.config.d/cbl-baxter.php',
        'php-config/Slate/CBL/Demonstrations/DemonstrationSkill.config.d/baxter.php',
        'php-config/Slate/CBL/StudentCompetency.config.d/demonstration-conditions.php',
        'php-config/Slate/CBL/StudentCompetency.config.d/demonstrations-at-level.php',
        'php-config/Slate/CBL/StudentCompetency.config.d/is-level-complete.php',
        'sencha-workspace/packages/slate-cbl-baxter',
        'site-root/baxter',
        'html-templates/baxter'
    ]
];
