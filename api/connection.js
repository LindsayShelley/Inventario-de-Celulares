

var promise = require('bluebird');

var pgp = require('pg-promise')(
        {
            promiseLib: promise
        }
);

var cn = {
    host: 'localhost',
    port: 5432,
    database: 'marcas',
    user: 'marcas',
    password: 'marcas'
};

module.exports = {
    db: pgp(cn)
};