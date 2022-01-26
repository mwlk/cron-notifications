const cron = require('node-cron');
const { db, http } = require('./utils');
const axios = require('./utils/axios');

cron.schedule('* * 22 * * *', ()=> {
    VoidMain.getData();
})

class VoidMain{
    static async getData(){
        try {
            var response$ = (await http.get('/Scorpion'));

            // console.log(response$.status);
    
            const name = new Date()
                        .toDateString()
                        .split(" ")
                        .join("_");
    
            db.setItem(name, JSON.stringify(response$.data));
        } catch (error) {
            console.error(error.message);
        }
       
    }
}