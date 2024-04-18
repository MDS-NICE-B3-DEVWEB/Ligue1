"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Common_1 = require("../../Common");
class KeyGenerate extends Common_1.default {
    static run() {
        return __awaiter(this, void 0, void 0, function* () {
            let update = yield this.getYesNo('Should I update the env file?');
            let command = `key:generate ${!update ? '--show' : ''}`;
            this.execCmd(command, (info) => __awaiter(this, void 0, void 0, function* () {
                if (info.err) {
                    this.showError('The key could not be generated', info.err);
                }
                else {
                    let key = info.stdout.match(/base64:([^\] \b]*)/ig)[0] || '';
                    if (update && key.length > 0) {
                        this.showMessage('The key was generated (' + key + ')');
                    }
                    else if (!update && key.length > 0) {
                        this.showMessage('Here is a key: (' + key + ')');
                    }
                    else {
                        this.showError('A key was not generated');
                    }
                }
            }));
        });
    }
}
exports.default = KeyGenerate;
//# sourceMappingURL=Generate.js.map