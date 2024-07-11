"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var connectDB = function (url) {
    return mongoose_1.default
        .connect(url)
        .then(function () { return console.log("DB connection established..."); });
};
exports.connectDB = connectDB;
//# sourceMappingURL=connect.js.map