import { Client } from "@elastic/elasticsearch";

const esClient = new Client({
  node: process.env.ELASTICSEARCH_URL || "http://localhost:9200",
});

(async () => {
  try {
    const health = await esClient.cluster.health();
    console.log(`🟢 Elasticsearch conectado - Status: ${health.status}`);
  } catch (error) {
    console.error("Erro ao conectar ao Elasticsearch:", error);
  }
})();

export default esClient;
