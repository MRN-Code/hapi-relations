'use strict';
var relations = require('relations');
var loader = require('./loader.js');

exports.register = function(server, options, next) {
    relations.use(relations.stores.redis, {
        client: options.client,
        prefix: 'USER_PERM'
    });

    server.expose(loader(relations, options.template));
    next();
};

exports.register.attributes = {
    name: 'relations',
    version: '1.0.0'
};
