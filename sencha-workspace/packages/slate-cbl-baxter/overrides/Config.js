Ext.define('Baxter.cbl.overrides.Config', {
    override: 'Slate.cbl.util.Config',


    getTitleForRating: function(rating) {
        return this.callOverridden([Math.min(rating, 6)]);
    },

    getAbbreviationForRating: function(rating) {
        return this.callOverridden([Math.min(rating, 6)]);
    }
}, function(Config) {
    Config.setLevels({
        0: {
            title: 'No Evidence',
            abbreviation: 'NE'
        },
        1: {
            title: 'Entering',
            abbreviation: 'EN'
        },
        2: {
            title: 'Progressing',
            abbreviation: 'PR'
        },
        3: {
            title: 'Graduation Benchmark',
            abbreviation: 'GB'
        },
        4: {
            title: 'Advancing',
            abbreviation: 'AD'
        },
        5: {
            title: 'Excelling',
            abbreviation: 'EX'
        },
        6: {
            title: 'Beyond Assessment',
            abbreviation: 'BA'
        }
    });

    Config.setRatings(Config.getLevels());
});