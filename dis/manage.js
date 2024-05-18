const { Client } = require('pg');

const client = new Client({
    user: 'fitnesspalsuser',
    host: 'localhost',
    database: 'fitnesspalsdb',
    password: 'fitnesspals123',
    port: 5432,
});

client.connect();
