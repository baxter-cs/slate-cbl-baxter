<?php

Git::$repositories['slate-cbl-baxter'] = [
    'remote' => 'git@github.com:baxter-cs/slate-cbl-baxter.git',
    'originBranch' => 'emergence/layer/v1',
    'workingBranch' => 'emergence/layer/v1',
    'trees' => [
        'html-templates/baxter',
        'php-config/Emergence/WebApps/SenchaApp.config.d/slate-cbl-baxter.php',
        'php-config/Git.config.d/slate-cbl-baxter.php',
        'php-config/Slate/CBL/Demonstrations/DemonstrationSkill.config.d/baxter.php',
        'php-config/Slate/CBL/StudentCompetency.config.d',
        'php-config/Slate/UI/UserProfile.config.d/cbl-baxter.php',
        'site-root/baxter',
        'webapp-plugin-builds/slate-cbl-baxter'
    ]
];
