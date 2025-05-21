"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class User {
    id;
    name;
    email;
    password;
    constructor({ id = (0, uuid_1.v4)(), name, email, password }) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
exports.default = User;
//# sourceMappingURL=user.model.js.map