import { getMetrics } from "../Controllers/metricController.js";

import express from 'express'

const router = express.Router();

router.get('/metrics', getMetrics)

export default router