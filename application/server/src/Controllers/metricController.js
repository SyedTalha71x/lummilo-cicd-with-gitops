import client from 'prom-client'

// Enable collection of default metrics (CPU, memory, etc.)
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ register: client.register });

export const getMetrics = async (req, res) => {
    try {
        res.setHeader('Content-Type', client.register.contentType);
        const metrics = await client.register.metrics();
        res.send(metrics);
    } catch (ex) {
        res.status(500).end(ex);
    }
}
