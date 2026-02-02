const {Pool} = require('pg');
const pool = new Pool({
    user:'postgres',host:'localhost',database:'personDB',password:'harsh', port: 5432,
});
pool.on('connect',()=>{
    console.log('PostgreSQL connected ');
})
module.exports  = pool;