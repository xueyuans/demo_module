"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateTokenKey(prefix, id) {
    return "SESS_" + prefix + "_" + id;
}
exports.generateTokenKey = generateTokenKey;
function generateTokenKey1(prefix, id) {
    return "SESS_" + prefix + "_" + id + "_abc";
}
exports.generateTokenKey1 = generateTokenKey1;
function generateTokenKey2(prefix, id) {
    return "SESS_" + prefix + "_" + id + "_def";
}
exports.generateTokenKey2 = generateTokenKey2;
