import dotenv from 'dotenv'
dotenv.config()
export const dbConfig = {
    development: {
        client: "mysql",
        connection: {
            filename: "../../db/ecommerce.mysql",
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            port: 3306,
            password: process.env.DB_PASSWORD,
            database: "ecommerce",
        },
    },
};