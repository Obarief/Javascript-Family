const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const init = async () => { 
    const server = Hapi.server({
        port: 3001,
        host: 'localhost',
    });


    server.route(routes);




    await server.start();
    console.log(`server ini berjalan pada ${server.info.uri}`);
}

init();