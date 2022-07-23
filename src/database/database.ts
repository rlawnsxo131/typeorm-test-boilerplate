import { DataSource } from 'typeorm';

export default class Database {
  private static dataSource: DataSource;

  private constructor() {}

  public static async initialize() {
    if (!this.dataSource?.isInitialized) {
      this.dataSource = new DataSource({
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT!, 10),
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DB_NAME,
        synchronize: true,
        logging: true,
        entities: ['src/**/**/*.entity.ts'],
      });
      await this.dataSource.initialize();
    }
  }

  public static getDataSource() {
    return this.dataSource;
  }
}
