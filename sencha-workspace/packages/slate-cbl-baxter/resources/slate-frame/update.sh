#!/bin/bash

HOST=${1:-http://staging.baxter.slatepowered.net}
FASHION_REGEX='s/^(\$[^:]+:\s*)(.*?)\s+!default;/\1dynamic(\2);/'

mkdir -p sass/site sass/slate sass/skeleton
(wget $HOST/sass/_variables-all.scss -qO- && echo) | perl -e 'print reverse <>' > sass/_variables-all.scss
wget $HOST/sass/site/_variables.scss -qO- | perl -pe $FASHION_REGEX > sass/site/_variables.scss
wget $HOST/sass/slate/_variables.scss -qO- | perl -pe $FASHION_REGEX > sass/slate/_variables.scss
wget $HOST/sass/skeleton/_variables.scss -qO- | perl -pe $FASHION_REGEX > sass/skeleton/_variables.scss