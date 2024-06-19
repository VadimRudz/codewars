/* eslint-disable no-undef */
import 'dotenv/config';
import sql from 'mssql';

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: String(process.env.DB_SERVER),
    database: process.env.DB_NAME,
    options: {
        encrypt: true, // If we use encryption
        enableArithAbort: true,
        trustServerCertificate: true // Ignore server certificate
    }
};

const connectToDatabase = async () => {
    try {
        // Connect to db
        await sql.connect(config);
        console.log('Connected to the database');

        // SQL request
        const result = await sql.query`SELECT * FROM users`;
        console.log(result.recordset);
    } catch (err) {
        console.error('Database connection failed:', err);
    } finally {
        // Close connection
        await sql.close();
    }
};

connectToDatabase();
