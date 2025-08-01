"use strict";
module.exports = function (RED) {
    function DTProperty(config) {
        RED.nodes.createNode(this, config);
        this.accessGroup = config.accessGroup;
        this.aContext = config.aContext;
        this.aId = config.aId;
        this.aType = config.aType;
        var node = this;

        this.on('input', function (msg, send, done) {
            // Ajouter la valeur de aContext par msg.payload
            node.aContext = msg.payload;

            var data = {
                payload: node,
            };

            send(data);
            if (done) done();
        });
    }

    RED.nodes.registerType('dt-property', DTProperty);
};
