import { config } from 'dotenv';
import { resolve } from 'path';

export default function initializeEnvironment() {
  config({
    path: resolve(
      process.env.NODE_ENV === 'production'
        ? '.production.env'
        : '.development.env',
    ),
  });
}
