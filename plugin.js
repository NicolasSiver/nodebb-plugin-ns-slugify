/**
 * Created by Nicolas on 6/19/15.
 */
(function (Plugin) {
    'use strict';

    var translit = require('translitit-cyrillic-russian-to-latin');

    //NodeBB list of Hooks: https://github.com/NodeBB/NodeBB/wiki/Hooks
    Plugin.hooks = {
        filters: {
            categoryCreate: function (categoryData, callback) {

            },

            topicCreate: function (topicData, callback) {

            },

            userCreate: function (userData, callback) {

            }
        }
    };

})(module.exports);
