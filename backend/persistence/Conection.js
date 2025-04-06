import mysql from 'mysql2/promise.js';

export default async function ToConect(params) {
    if (global.poolConnection){
        return await global.poolConnection.getConnection();
    } else {
        global.poolConnection = await mysql.createPool({
            host:'localhost',
            user:'root',
            password:'admin951',
            database:'achados_perdidos',
            waitForConnections:true,
            connectionLimit:10,
            idleTimeout:60000,
            queueLimit:0,
            enableKeepAlive:true,
            keepAliveInitialDelay:0,
            maxIdle:10
        })
        return await global.poolConnection.getConnection()
    }
}