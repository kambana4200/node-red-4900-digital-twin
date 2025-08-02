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
            node.value = msg.payload;
            var data = {
                payload: {
                            id: node.id,
                            type: node.type,
                            name: node.name,
                            value: node.value,
                            accessGroup: node.accessGroup,
                            aContext: node.aContext,
                            aId: node.aId,
                            aType: node.aType
                 }
            };
            send(data);
        });
    }
    ;
    RED.nodes.registerType('dt-property', DTProperty);
};
//# sourceMappingURL=dt-property.js.map
