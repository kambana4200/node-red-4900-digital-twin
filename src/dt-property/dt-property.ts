import { randomUUID } from "crypto";
import * as nodered from "node-red";
import { DTPropertyNode, DTPropertyNodeDef, DTPropertyNodeMessage } from "../resources/types";

export = (RED: nodered.NodeAPI): void => {
    function DTProperty(this: DTPropertyNode, config: DTPropertyNodeDef): void {
        RED.nodes.createNode(this, config);
        this.accessGroup = config.accessGroup;
        this.aContext = config.aContext;
        this.aId = config.aId;
        this.aType = config.aType;

        const node = this;

        this.on('input', (msg: any, send, done): void => {
            node.value = msg.payload;

            // Stocker msg.payload dans aContext
            node.aContext = msg.payload;

            const data: DTPropertyNodeMessage = {
                payload: node,
            };

            send(data);
            if (done) done();
        });
    }

    RED.nodes.registerType('dt-property', DTProperty);
};
