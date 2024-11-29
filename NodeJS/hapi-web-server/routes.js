// * = semua method namun akan kalah dengan yang spesifik
// {any*} = semua path

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (req, h) => {
            return 'homepage';
        }
    },
    {
        method: '*',
        path: '/',
        handler: (req, h) => {
            return 'halaman tidak dapat diakses dengan method tersebut';
        }
    },
    {
        method: 'GET',
        path: '/user/{username?}', // membuat agar tidak wajib menggunakan parameter username
        handler: (req, h) => {
            const { username = 'stranger' } = req.params; // menetapkan nilai defaultnya yaitu stranger
            const { lang } = req.query;

            if (lang === 'ru') {
                return `cyka, ${username}`
            }

            return `halo, ${username}`;
        }
    },

    {
        method: 'GET',
        path: '/about',
        handler: (req, h) => {
                        
            return 'about';
        }
    },
    {
        method: '*',
        path: '/about',
        handler: (req, h) => {
            return 'halaman tidak dapat diakses dengan method tersebut';
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (req, h) => {
            return 'halaman tidak tersedia';
        } 
    },




    {
        method: 'POST',
        path: '/login',
        handler: (req, h) => {
            const { username, password } = req.payload;
            return `halo ${username}, selamat datang di halaman login`;
        }
    },

    {
        method: 'POST',
        path: '/nyoba/{username?}',
        handler: (req, h) => {
            const { username = 'stranger' } = req.params;
            return h.response(`<h1>halo ${username}, selamat datang di halaman nyoba</h1>`)
                .code(201)
                .type('text/html')
                .header('Custom-Header', 'some-value')
            
        }
    }
]

module.exports = routes;