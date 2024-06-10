// sowPaymentPlanScheduler.ts

import { createSOWPaymentPlans } from '../services/sowPaymentPlanService';
import cron from 'node-cron';

// Schedule the data generation function to run daily at midnight (00:00)
cron.schedule('0 0 * * *', async () => {
  try {
    await createSOWPaymentPlans();
    console.log('SOW payment plans generated successfully');
  } catch (error) {
    console.error('Error generating SOW payment plans:', error);
  }
});
