"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elasticsearch_1 = require("@elastic/elasticsearch");
const esClient = new elasticsearch_1.Client({
    node: process.env.ELASTICSEARCH_URL || "http://localhost:9200",
});
(async () => {
    try {
        const health = await esClient.cluster.health();
        console.log(`🟢 Elasticsearch conectado - Status: ${health.status}`);
    }
    catch (error) {
        console.error("Erro ao conectar ao Elasticsearch:", error);
    }
})();
exports.default = esClient;
