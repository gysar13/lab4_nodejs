"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.deletePost = exports.deleteUser = exports.updateComment = exports.updatePost = exports.updateUser = exports.findCommentById = exports.findPostById = exports.findUserById = exports.addComment = exports.addPost = exports.addUser = exports.getComments = exports.getPosts = exports.getUsers = void 0;
let users = [];
let posts = [];
let comments = [];
// функции для работы с данными
const getUsers = () => users;
exports.getUsers = getUsers;
const getPosts = () => posts;
exports.getPosts = getPosts;
const getComments = () => comments;
exports.getComments = getComments;
const addUser = (user) => {
    users.push(user);
    return user;
};
exports.addUser = addUser;
const addPost = (post) => {
    posts.push(post);
    return post;
};
exports.addPost = addPost;
const addComment = (comment) => {
    comments.push(comment);
    return comment;
};
exports.addComment = addComment;
const findUserById = (id) => users.find(user => user.id === id);
exports.findUserById = findUserById;
const findPostById = (id) => posts.find(post => post.id === id);
exports.findPostById = findPostById;
const findCommentById = (id) => comments.find(comment => comment.id === id);
exports.findCommentById = findCommentById;
const updateUser = (id, userData) => {
    const user = (0, exports.findUserById)(id);
    if (user) {
        Object.assign(user, userData);
        return user;
    }
    return null;
};
exports.updateUser = updateUser;
const updatePost = (id, postData) => {
    const post = (0, exports.findPostById)(id);
    if (post) {
        Object.assign(post, postData);
        return post;
    }
    return null;
};
exports.updatePost = updatePost;
const updateComment = (id, commentData) => {
    const comment = (0, exports.findCommentById)(id);
    if (comment) {
        Object.assign(comment, commentData);
        return comment;
    }
    return null;
};
exports.updateComment = updateComment;
const deleteUser = (id) => {
    users = users.filter(user => user.id !== id);
    posts = posts.filter(post => post.userId !== id);
    comments = comments.filter(comment => comment.userId !== id);
};
exports.deleteUser = deleteUser;
const deletePost = (id) => {
    posts = posts.filter(post => post.id !== id);
    comments = comments.filter(comment => comment.postId !== id);
};
exports.deletePost = deletePost;
const deleteComment = (id) => {
    comments = comments.filter(comment => comment.id !== id);
};
exports.deleteComment = deleteComment;
//# sourceMappingURL=memory.repository.js.map