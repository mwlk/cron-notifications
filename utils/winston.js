const {createLogger, transports, format } = require('winston');

const customLogger = createLogger({
    transports: [
        new transports.File({
            maxsize: 5120000,
            maxFiles: 5,
            dirname: `E:\LogServiceFecac`,
            filename: `${__dirname}/../logs/log-fecac.log`,
            format: format.combine( format.json(), format.timestamp())
        })
    ]
})

module.exports = {customLogger}