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
exports.deleteComment = exports.updateComment = exports.createComment = exports.getCommentById = exports.getAllComments = void 0;
const commentRepository = __importStar(require("../repositories/memory.repository"));
const getAllComments = () => commentRepository.getComments();
exports.getAllComments = getAllComments;
const getCommentById = (id) => commentRepository.findCommentById(id);
exports.getCommentById = getCommentById;
const createComment = (commentData) => commentRepository.addComment(commentData);
exports.createComment = createComment;
const updateComment = (id, updateData) => {
    const comment = commentRepository.findCommentById(id);
    if (!comment)
        return null;
    Object.assign(comment, updateData);
    return comment;
};
exports.updateComment = updateComment;
const deleteComment = (id) => {
    commentRepository.deleteComment(id);
};
exports.deleteComment = deleteComment;
//# sourceMappingURL=comment.service.js.map