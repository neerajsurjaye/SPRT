"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vec3_1 = __importDefault(require("./vec3"));
const vec = new vec3_1.default(1, 2, 34);
const vec2 = new vec3_1.default(1, 2, 3);
vec.add(vec);
console.log(vec.vec);
