-- CREATE DATABASE dis_farmacos;


CREATE TABLE sucursal (
	num_sucursal int not null primary key,
    nombre_sucursal varchar(50) not null,
    capacidad_entrega int
);

CREATE TABLE cliente (
	num_cliente int not null primary key,
	nombre_cliente varchar(30),
    ubicacion varchar(20)
);

CREATE TABLE pedido_detalles(
	num_pedido int not null primary key,
    fecha_agendado date,
    fecha_entregado date,
    estado_entrega varchar(10),
    costo_total int
);

CREATE TABLE pedido (
    num_pedido INT,
    num_cliente INT,
    num_sucursal INT,
    FOREIGN KEY (num_pedido) REFERENCES pedido_detalles(num_pedido),
    FOREIGN KEY (num_cliente) REFERENCES cliente(num_cliente),
    FOREIGN KEY (num_sucursal) REFERENCES sucursal(num_sucursal)
);


-- DROP TABLE sucursal;
-- DROP TABLE cliente;
-- DROP TABLE pedido_detalles;
-- DROP TABLE pedido;