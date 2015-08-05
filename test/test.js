'use strict';
var chai = require('chai');
var expect = chai.expect;
var Hapi = require('hapi');
var redis = require('redis');
var client = redis.createClient(6379, 'localhost');
var fs = require('fs');

var schema = JSON.parse(
    fs.readFileSync('./test/permission.json', 'utf8')
);

describe('relations plugin', function () {
  it('should load relations plugin', function () {
    var server = new Hapi.Server();

    server.register([
      {
        register: require('../index.js'),
        options: {
            schema: schema,
            client: client,
            clientType: 'redis'
        }
      }
    ], function (err) {
      expect(err).to.be.undefined;
      expect(server.plugins.relations).to.be.a('object');
    });
  });
});
