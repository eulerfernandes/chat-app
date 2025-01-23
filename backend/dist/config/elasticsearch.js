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
const elasticsearch_1 = require("@elastic/elasticsearch");
const esClient = new elasticsearch_1.Client({
    node: process.env.ELASTICSEARCH_URL || "http://localhost:9200",
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const health = yield esClient.cluster.health();
        console.log(`🟢 Elasticsearch conectado - Status: ${health.status}`);
    }
    catch (error) {
        console.error("Erro ao conectar ao Elasticsearch:", error);
    }
}))();
exports.default = esClient;
