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
            // Remplacer aContext par la valeur de msg.payload
            node.aContext = msg.payload;

            // Construction de l'objet avec la valeur mise à jour
            var data = {
                payload: {
                    accessGroup: node.accessGroup,
                    aContext: node.aContext,
                    aId: node.aId,
                    aType: node.aType,
                },
            };

            send(data);
            if (done) done(); // appel à done si défini
        });
    }

    RED.nodes.registerType('dt-property', DTProperty);
};
