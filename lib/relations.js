'use strict';
var relations = require('relations');
var loader = require('./loader.js');

exports.register = function(server, options, next) {
    if(options.pluginClient === true) {
        relations.use(relations.stores[options.clientType], {
            client: server.plugins[options.client].client,
        });
    } else {
        relations.use(relations.stores[options.clientType], {
            client: options.client,
        });
    }

    server.expose(loader(relations, options.schema));
    next();
};

exports.register.attributes = {
    name: 'relations',
    version: '1.0.0'
};
