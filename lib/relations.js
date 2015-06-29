'use strict';
var relations = require('relations');
var permScheme = require('./permScheme.js');

exports.register = function(server, options, next) {
    relations.use(relations.stores.redis, {
        client: options.client,
        prefix: 'USER_PERM'
    });

    server.expose(permScheme(relations, options.template));
    next();
};

exports.register.attributes = {
    pkg: require('../package.json')
};
