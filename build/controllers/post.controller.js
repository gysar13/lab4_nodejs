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
exports.deletePost = exports.updatePost = exports.createPost = exports.getPostById = exports.getAllPosts = void 0;
const PostService = __importStar(require("../services/post.service"));
const getAllPosts = async (_req, res) => {
    const posts = PostService.getAllPosts();
    res.json(posts);
};
exports.getAllPosts = getAllPosts;
const getPostById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).send('Post ID is required');
        return;
    }
    const post = PostService.getPostById(id);
    if (post) {
        res.json(post);
    }
    else {
        res.status(404).send('Post not found');
    }
};
exports.getPostById = getPostById;
const createPost = async (req, res) => {
    const post = PostService.createPost(req.body);
    res.status(201).json(post);
};
exports.createPost = createPost;
const updatePost = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).send('Post ID is required for update');
        return;
    }
    const post = PostService.updatePost(id, req.body);
    if (post) {
        res.json(post);
    }
    else {
        res.status(404).send('Post not found');
    }
};
exports.updatePost = updatePost;
const deletePost = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).send('Post ID is required for deletion');
        return;
    }
    PostService.deletePost(id);
    res.status(204).send();
};
exports.deletePost = deletePost;
//# sourceMappingURL=post.controller.js.map