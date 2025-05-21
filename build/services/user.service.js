"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const userRepository = __importStar(require("../repositories/memory.repository"));
const getAllUsers = () => userRepository.getUsers();
exports.getAllUsers = getAllUsers;
const getUserById = (id) => userRepository.findUserById(id);
exports.getUserById = getUserById;
const createUser = (userData) => userRepository.addUser(userData);
exports.createUser = createUser;
const updateUser = (id, updateData) => {
    const user = userRepository.findUserById(id);
    if (!user)
        return null;
    Object.assign(user, updateData);
    return user;
};
exports.updateUser = updateUser;
const deleteUser = (id) => {
    userRepository.deleteUser(id);
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.service.js.map