"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET_KEY = exports.MONGO_CONNECTION_STRING = exports.NODE_ENV = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const NODE_ENV = process.env['NODE_ENV'] || 'development';
exports.NODE_ENV = NODE_ENV;
const PORT = parseInt(process.env['PORT'] || '4000', 10);
exports.PORT = PORT;
const JWT_SECRET_KEY = process.env['JWT_SECRET_KEY'] || 'secret-key';
exports.JWT_SECRET_KEY = JWT_SECRET_KEY;
const MONGO_CONNECTION_STRING = process.env['MONGO_CONNECTION_STRING'] || 'your-mongo-db-connection-string';
exports.MONGO_CONNECTION_STRING = MONGO_CONNECTION_STRING;
//# sourceMappingURL=config.js.map