import "reflect-metadata"
import { DataSource } from "typeorm"

//MSSQL
export const AppDataSource = new DataSource({
    type: "mssql",
    host: "localhost",
    username: "sa",
    password: "P@ssword1234",
    database: "easypos",
    synchronize: true,
    logging: false,
    entities: ['src/entity/*.ts'],
    migrations: ['src/migration/*.ts'],
    subscribers: [],
    extra: { trustServerCertificate: true }
})

//MYSQL
// export const AppDataSource = new DataSource({
//   type: "mysql",
//   host: "localhost",
//   port: 3309,
//   username: "root",
//   password: "P@ssword1234",
//   database: "easypos",
//   synchronize: true,
//   logging: false,
//   entities: [User],
//   migrations: [],
//   subscribers: [],
// })

//SQLITE
// export const AppDataSource = new DataSource({
//   type: "sqlite",
//   database: "easypos_local.db",
//   synchronize: true,
//   logging: false,
//   entities: [User],
//   migrations: [],
//   subscribers: [],
// })