const Service = require('node-windows').Service;

const _svc = new Service({
    name: "fecac-notificaciones-svc",
    description: "service para el envio de notificaciones de listado de acciones de hallazgos de FECAC by mwlk",
    script: "C:\\Users\\User1\\Desktop\\prod-fecac-26-01\\cron node\\cron-notifications\\index.js"
});

_svc.on('install', function() {
    _svc.start()
});

_svc.install();