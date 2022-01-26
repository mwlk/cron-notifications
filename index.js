const cron = require('node-cron');

const {
    db,
    http,
    logger
} = require('./utils');
const axios = require('./utils/axios');

cron.schedule('00 18 * * *', () => {
    VoidMain.getData();
})

class VoidMain {
    static async getData() {

        const name = new Date()
            .toDateString()
            .split(" ")
            .join("_");

        try {
            var response$ = (await http.get('api/notifications/GetNotificaciones'));

            db.setItem(name, JSON.stringify(response$.data));

            logger.customLogger.info(response$.data)

        } catch (error) {
            db.setItem(name, JSON.stringify(error.message));

            logger.customLogger.error(error.message)
        }

    }
}