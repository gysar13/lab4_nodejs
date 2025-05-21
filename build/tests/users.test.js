"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
describe('User API', () => {
    it('GET /users - success', async () => {
        const result = await (0, supertest_1.default)(app_1.default).get('/users').expect(200);
        expect(result.body).toBeInstanceOf(Array);
    });
    it('POST /users - success', async () => {
        const userData = { name: 'John Doe', email: 'john@example.com' };
        const result = await (0, supertest_1.default)(app_1.default)
            .post('/users')
            .send(userData)
            .expect(201);
        expect(result.body.name).toEqual(userData.name);
        expect(result.body.email).toEqual(userData.email);
    });
});
//# sourceMappingURL=users.test.js.map