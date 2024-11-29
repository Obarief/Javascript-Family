// // import library built-in
// const http = require('http');

// // file apa yang dibaca
// const requestListener = function (req, res) {
//     const { method } = req;

//     res.setHeader('Content-Type', 'text/html');
//     res.statusCode = 200;



//     if(method === 'GET') {
        
//         res.end('<h1>GET</h1>');
//     }

//     if (method === 'POST') {
//         let body = []

//         // ketika data diminta maka jadikan chunk (kumpulan terkecil dari data) -> masukkan chunk tersebut ke body
//         req.on('data', (chunk) => {
//             body.push(chunk);
//         })

//         // ketika data selesai diminta maka gabungkan chunk tersebut dan jadikan string -> lalu key name jadikan string dari json -> tampillkan hasilnya dari key tersebut
//         req.on('end', () => {
//             body = Buffer.concat(body).toString();
            
//             // name adalah key di dalam object
//             const {name} = JSON.parse(body);

//             // pemanggilan bukan lagi body (karena kalau body masih object) maka yang dipanggil adalah keynya dari object
//             res.end(`<h1>hai, ${name}</h1>`);
//         })
//     }

// }


// // server listen
// const server = http.createServer(requestListener);

// const port = 3001;
// const host = 'localhost';

// server.listen(port, host, () => {
//     console.log(`server berjalan pada http://${host}:${port}`);
// })










// coba request GET POST
// coba selain GET dan POST
// coba statuCode

// add: setHeader powered-by nodejs

const http = require('http');

const requestListener = (req, res) => {

    // header untuk memberikan informasi ke client bagaimana mereka harus menampilkan data 
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Powered-By','NodeJS');
    
    // penempatan statuscode diawal tidak sepenuhnya benar, lebih baik letakkan pada setiap request
    res.statusCode = 200;
    
    const { url, method } = req

    if (url === '/') {
        if (method === 'GET') { 
            res.end('<h1>Home</h1>');
        } else {
            res.statusCode = 404
            
            // mengganti dari html ke json agar bisa diakses
            // res.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);

            res.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method} request`
            }));
        }

    } else if (url === '/about') {
        if (method === 'GET') { 
            res.end('<h1>About dengan GET</h1>');
        } else if (method === 'POST') {
            
            let body = [];

            req.on('data', (chunk) => {
            body.push(chunk);
            });
    
            req.on('end', () => {
            body = Buffer.concat(body).toString();
            const {name} = JSON.parse(body);
            res.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
            });




        } else {
            res.statusCode = 404
            res.end(`<h1>Halaman tidak dapat diakses dengan selain GET dan POST bukan dengan ${method} request</h1>`);    
        }



    } else {
        res.end('<h1>404</h1>');
    }

}

    const server = http.createServer(requestListener);

    const port = 3001;
    const host = 'localhost';

    server.listen(port, host, () => {
        console.log(`server berjalan pada http://${host}:${port}`);
    })
