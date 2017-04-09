
DROP TABLE IF EXISTS marcas CASCADE;

CREATE TABLE marcas
(
    id bigserial NOT NULL,
    nombre text NOT NULL,
    paterno text NOT NULL,
    materno text,
    PRIMARY KEY(id)
);