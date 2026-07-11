import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const env = {
  baseUrl: process.env.BASE_URL || 'https://www.visakhvijayan.com/',
  headless: process.env.HEADLESS !== 'false',
  testRunId: process.env.TEST_RUN_ID || `run-${Date.now()}`,
};

export default env;
