"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Comment {
    id;
    text;
    userId;
    postId;
    createdAt;
    constructor({ id = (0, uuid_1.v4)(), text, userId, postId, createdAt = Date.now() }) {
        this.id = id;
        this.text = text;
        this.userId = userId;
        this.postId = postId;
        this.createdAt = createdAt;
    }
}
exports.default = Comment;
//# sourceMappingURL=comment.model.js.map