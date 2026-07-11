import { test as base } from '@playwright/test';

import { HomePage } from '../pages/HomePage';

import { logger } from '../utils/logger';
import type { Logger } from 'winston';

type Fixtures = {

  homepage: HomePage;

  logger: Logger;
};

export const test = base.extend<Fixtures>({

  homepage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  logger: async ({}, use) => {
    await use(logger);
  },
});

export { expect } from '@playwright/test';
