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
            // Remplacer le champ aContext avec msg.payload seulement pour l'envoi
            var updatedNode = {
                accessGroup: node.accessGroup,
                aContext: msg.payload, // Remplace avec le payload injecté
                aId: node.aId,
                aType: node.aType
            };

            var data = {
                payload: updatedNode
            };

            send(data);
            if (done) done();
        });
    }

    RED.nodes.registerType('dt-property', DTProperty);
};

