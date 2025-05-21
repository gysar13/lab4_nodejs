"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Post {
    id;
    title;
    content;
    userId;
    createdAt;
    constructor({ id = (0, uuid_1.v4)(), title, content, userId, createdAt = Date.now() }) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
        this.createdAt = createdAt;
    }
}
exports.default = Post;
//# sourceMappingURL=post.model.js.map