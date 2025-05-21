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
const postRepository = __importStar(require("../repositories/memory.repository"));
const getAllPosts = () => postRepository.getPosts();
exports.getAllPosts = getAllPosts;
const getPostById = (id) => postRepository.findPostById(id);
exports.getPostById = getPostById;
const createPost = (postData) => postRepository.addPost(postData);
exports.createPost = createPost;
const updatePost = (id, updateData) => {
    const post = postRepository.findPostById(id);
    if (!post)
        return null;
    Object.assign(post, updateData);
    return post;
};
exports.updatePost = updatePost;
const deletePost = (id) => {
    postRepository.deletePost(id);
};
exports.deletePost = deletePost;
//# sourceMappingURL=post.service.js.map