"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const handleError = (res, error) => {
    console.error('Error:', error.message);
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: false, message: error.message }));
};
exports.handleError = handleError;
//# sourceMappingURL=errorHandler.js.map