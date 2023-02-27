ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY '1234';

flush privileges;

create database IF NOT EXISTS test;

use test;

CREATE TABLE IF NOT EXISTS data(
   ID   INT              NOT NULL,
   val  nvarchar(5000) NOT NULL
);

truncate test.data;

insert into data values (1,"placeholder");

-- select * from test.data;

