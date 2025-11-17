import express_prom_bundle from "express-prom-bundle";

const metricsMiddleware = express_prom_bundle({
    includeMethod: true,
    includePath: true,
    includeStatusCode: true,
    includeUp: true,
    customLabels: {
        project_name: 'lummilo',
        app_version: '1.0.0'
    },
    promClient: {
        collectDefaultMetrics: {
            timeout: 10000
        }
    }
});


export default metricsMiddleware