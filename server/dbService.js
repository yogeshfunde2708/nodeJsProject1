const mysql2 = require('mysql2');
const dotenv = require('dotenv');
// const Connection = require('mysql2/typings/mysql/lib/Connection');
let instance  = null;
dotenv.config();

const connection = mysql2.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT,


});
connection.connect((err)=>{
    if(err){
        console.log(err.message);

    }
    // console.log('db' + connection.state)
});

class dbService {
    static getDbserviceInstance(){
        return instance ? instance : new dbService();

    }
    async getAllData(){
        try{
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM names;";

                connection.query(query, (err, results)=>{
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            return response;

        }catch(error){
            console.log(error);
        }
    }
}

module.exports = dbService;