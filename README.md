
# hapi-relations
A plugin for hapi using the [relations](https://github.com/carlos8f/node-relations) ACL.


# Dependencies
#### relations
See [relations](https://github.com/carlos8f/node-relations) for supported clients and ACL structure.

# Usage
Pass in your relations schema and choosen client as options.
```js
var Hapi = require('hapi');
var redis = require('redis');

var client = redis.createClient(6379, 'localhost');
var server = new Hapi.Server();

server.register([
  {
    register: require('hapi-relations'),
    options: {
        template: './schema.json',
        client: redis
    }
  }
], function (err) {
    console.log(err);
});
```
And access realtions from the plugins
```js
server.plugins.hapiRelations.coins('Can TEST GET from EXAMPLE);
```
# Configuration
The `template` contains a listing of contexts, which will be added to relations. A context defines an application in which the user's privileges will be evaulated. For instance, if the context is `inventory`, then the roles and actions listed within the context correspond to a user's ability to use or add to `inventory`.

The context consists of roles, and which actions they are allowed to perform. Please see the `test/permission.json` for an example.

# Contributing
Please follow the MRN Javascript Style Guide (forked from AirBnB). Use `grunt lint` to check yo-self
