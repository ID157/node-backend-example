module.exports = {
   type: 'mongodb',
   host: process.env.DB_HOST,
   port: process.env.DB_PORT,
   username: process.env.DB_USER,
   password: process.env.DB_PASS,
   database: process.env.DB_NAME,
   synchronize: true,
   logging: false,
   entities: ['./src/typeorm/entity/**/*.ts'],
   migrations: ['./src/typeorm/migration/**/*.ts'],
   subscribers: ['./src/typeorm/subscriber/**/*.ts'],
   cli: {
      entitiesDir: 'src/typeorm/entity',
      migrationsDir: 'src/typeorm/migration',
      subscribersDir: 'src/typeorm/subscriber'
   }
}
