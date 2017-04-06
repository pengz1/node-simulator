'use strict';

var Waterline = require('waterline');

var nodeCollection = Waterline.Collection.extend({
    identity: 'nodes',
    connection: 'mongo',
    attributes: {
        ip: 'string',
        mac: 'string',
        nodeId: 'string'
    }
});

module.exports = nodeCollection;