'use strict';
var fs = require('fs');

module.exports = function(relations, template) {
    var perm = JSON.parse(
        fs.readFileSync(template, 'utf8')
    );
    relations.define('coins', {});
    for (var role in perm) {
        if (perm.hasOwnProperty(role) && role !== '_comment') {
            var canDos = [];
            /*jshint loopfunc: true */
            for (var target in perm[role]) {
                if (perm[role].hasOwnProperty(target)) {
                    perm[role][target].forEach(function(action) {
                        canDos.push((action + '_' + target).toUpperCase());
                    });
                }
            }

            relations.coins.addRole(role, canDos);
        }
    }

    return relations;
};
