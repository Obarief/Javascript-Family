// event emitter

// const { EventEmitter } = require('events');

// const emitter = new EventEmitter();

// // inisialisasi function
// function useUmbrella(color = 'black') {
//     console.log(`Using umbrella color: ${color}`)
// }

// function workFromHome() {
//     console.log(`bekerja dari rumah`)
// }

// // define
// emitter.on('rain', useUmbrella);
// emitter.once('rain', workFromHome);

// // jalankan
// emitter.emit('rain');
// emitter.emit('rain', 'white');

// // hapus listener useUmbrella
// emitter.removeListener('rain', useUmbrella);

// emitter.emit('rain');

// ============================================================

// file system

// const fs = require('fs');

// // try {
    
// //     const file = fs.readFileSync('./NodeJS/berkas.txt', 'utf-8');
// //     console.log(file);
    
// // } catch {
// //     console.log('file not found');
// // }

// try {
//     fs.writeFileSync('./NodeJS/lirik.txt', 'halo halo jakarta');
//     console.log('berhasil');
// } catch (error) {
//     console.log(error);
// }


// ============================================================


// stream, efesiensi memory
const fs = require('fs');

const stream = fs.createReadStream('./NodeJS/berkas.txt', 'utf-8');

stream.on('data', (chunk) => {
    console.log(chunk); // chunk digunakan agar memory yang digunakan tidak terpakai semua, dengan kata lain file akan dibaca bertahap
});
