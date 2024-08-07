import { Emotes, type EmoteDefinition } from "@common/definitions/emotes";
import { type ReifiableDef } from "@common/utils/objectDefinitions";

import { type Player } from "./player";

export class Emote {
    readonly definition: EmoteDefinition;

    readonly player: Player;
    readonly playerID: number;

    constructor(definition: ReifiableDef<EmoteDefinition>, player: Player) {
        this.definition = Emotes.reify(definition);
        this.player = player;
        this.playerID = player.id;
    }
}
