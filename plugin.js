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
                categoryData.slug = translit(categoryData.slug);
                callback(null, categoryData);
            },

            topicCreate: function (topicData, callback) {
                topicData.slug = translit(topicData.slug);
                callback(null, topicData);
            },

            userCreate: function (userData, callback) {
                //If there will be username collision, userslug will be overridden by NodeBB...
                userData.userslug = translit(userData.userslug);
                callback(null, userData);
            }
        }
    };

})(module.exports);
