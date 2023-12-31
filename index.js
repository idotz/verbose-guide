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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var playwright_extra_1 = require("playwright-extra");
var stealth = require('puppeteer-extra-plugin-stealth')();
var _a = require('discord-webhook-node'), Webhook = _a.Webhook, MessageBuilder = _a.MessageBuilder;
var hook = new Webhook("https://canary.discord.com/api/webhooks/1190831794157789194/7woA16J43vhLVfh9sXAv2390jfJxTB_OGe3fWOlweP_F5b7-XFkAcSO2Z3XPut3m0lrb");
function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    var counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
;
var ms = require("mailjs-gw");
var time = 0;
var delay = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms * 1000); }); };
var _loop_1 = function (i) {
    time += 20000;
    setTimeout(function () {
        owo(i);
    }, time);
};
for (var i = 0; i < 1; i++) {
    _loop_1(i);
}
;
function owo(ihg) {
    return __awaiter(this, void 0, void 0, function () {
        var mailjs, folderid, browser, zz;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(ihg);
                    mailjs = new ms();
                    folderid = makeid(14);
                    return [4 /*yield*/, playwright_extra_1.firefox.launch({
                            headless: false,
                        })];
                case 1:
                    browser = _a.sent();
                    zz = function () { return __awaiter(_this, void 0, void 0, function () {
                        function d() {
                            return __awaiter(this, void 0, void 0, function () {
                                var err_1;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, x.goto("https://www.youtube.com/@ToolsCracks/live")];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, delay(20)];
                                        case 2:
                                            _a.sent();
                                            return [4 /*yield*/, x.keyboard.press("Space")];
                                        case 3:
                                            _a.sent();
                                            return [4 /*yield*/, delay(20)];
                                        case 4:
                                            _a.sent();
                                            _a.label = 5;
                                        case 5:
                                            _a.trys.push([5, 7, , 8]);
                                            return [4 /*yield*/, x.screenshot({ path: 'screenshot.png' })];
                                        case 6:
                                            _a.sent();
                                            // hook.sendFile('./screenshot.png');
                                            return [3 /*break*/, 8];
                                        case 7:
                                            err_1 = _a.sent();
                                            return [3 /*break*/, 8];
                                        case 8: return [4 /*yield*/, delay(30)];
                                        case 9:
                                            _a.sent();
                                            d();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        }
                        var x;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, browser.newPage()];
                                case 1:
                                    x = _a.sent();
                                    d();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    zz();
                    return [2 /*return*/];
            }
        });
    });
}
