'use strict';
var chai = require('chai');
var expect = chai.expect;
var Hapi = require('hapi');
var redis = require('redis');
var client = redis.createClient(6379, 'localhost');

describe('relations plugin', function () {
  it('should load relations plugin', function () {
    var server = new Hapi.Server();

    server.register([
      {
        register: require('../index.js'),
        options: {
            template: './test/permission.json',
            client: client
        }
      }
    ], function (err) {
      expect(err).to.be.undefined;
      expect(server.plugins.hapiRelations).to.be.a('object');
    });
  });
});
