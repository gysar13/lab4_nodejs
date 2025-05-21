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
const UserService = __importStar(require("../services/user.service"));
const getAllUsers = async (_req, res) => {
    const users = UserService.getAllUsers();
    res.json(users.map(user => ({ id: user.id, name: user.name, email: user.email })));
};
exports.getAllUsers = getAllUsers;
const getUserById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).send('User ID is required');
        return;
    }
    const user = UserService.getUserById(id);
    if (user) {
        res.json({ id: user.id, name: user.name, email: user.email });
    }
    else {
        res.status(404).send('User not found');
    }
};
exports.getUserById = getUserById;
const createUser = async (req, res) => {
    const user = UserService.createUser(req.body);
    res.status(201).json({ id: user.id, name: user.name, email: user.email });
};
exports.createUser = createUser;
const updateUser = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).send('User ID is required for update');
        return;
    }
    const user = UserService.updateUser(id, req.body);
    if (user) {
        res.json({ id: user.id, name: user.name, email: user.email });
    }
    else {
        res.status(404).send('User not found');
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).send('User ID is required for deletion');
        return;
    }
    UserService.deleteUser(id);
    res.status(204).send();
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.controller.js.map