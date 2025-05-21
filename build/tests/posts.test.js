"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
describe('Post API', () => {
    it('GET /posts - success', async () => {
        const result = await (0, supertest_1.default)(app_1.default).get('/posts').expect(200);
        expect(result.body).toBeInstanceOf(Array);
    });
    it('POST /posts - success', async () => {
        const postData = { title: 'New Post', content: 'Post content', userId: 1 };
        const result = await (0, supertest_1.default)(app_1.default)
            .post('/posts')
            .send(postData)
            .expect(201);
        expect(result.body.title).toEqual(postData.title);
        expect(result.body.content).toEqual(postData.content);
    });
});
//# sourceMappingURL=posts.test.js.map