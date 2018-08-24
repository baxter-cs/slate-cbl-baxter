<?php

Git::$repositories['slate-cbl-baxter'] = [
    'remote' => 'git@github.com:baxter-cs/slate-cbl-baxter.git',
    'originBranch' => 'builds/v1',
    'workingBranch' => 'builds/v1',
    'trees' => [
        'php-classes/Slate/CBL/StudentCompetency.php',
        'php-config/Git.config.d/slate-cbl-baxter.php',
        'php-config/Slate/CBL' => [
            'exclude' => [
                '#^/Demonstrations/ExperienceDemonstration\.config\.d/fields\.php$#',
                '#^/Tasks/ExperienceTask\.config\.d/fields\.php$#'
            ]
        ],
        'sencha-workspace/packages/slate-cbl-baxter',
        'site-root/baxter'
    ]
];

