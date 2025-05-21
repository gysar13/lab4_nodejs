"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
describe('Comment API', () => {
    it('GET /comments - success', async () => {
        const result = await (0, supertest_1.default)(app_1.default).get('/comments').expect(200);
        expect(result.body).toBeInstanceOf(Array);
    });
    it('POST /comments - success', async () => {
        const commentData = { text: 'Nice post!', userId: 1, postId: 1 };
        const result = await (0, supertest_1.default)(app_1.default)
            .post('/comments')
            .send(commentData)
            .expect(201);
        expect(result.body.text).toEqual(commentData.text);
    });
});
//# sourceMappingURL=comments.test.js.map