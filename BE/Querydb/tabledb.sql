create database PetBlog;
use PetBlog;
-- use node_db;

-- CREATE TABLE `products` (
--   `id` int(11) NOT NULL AUTO_INCREMENT,
--   `name` varchar(255) DEFAULT NULL,
--   `color` varchar(255) DEFAULT NULL,
--   `price` decimal(10,0) DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- INSERT INTO `products` VALUES ('1', 'Iphone X', 'Black', '30000000');
-- INSERT INTO `products` VALUES ('2', 'Samsung S9', 'White', '24000000');
-- INSERT INTO `products` VALUES ('3', 'Oppo F5', 'Red', '7000000');
drop database PetBlog;
drop table tbl_tag;
drop table tbl_comment;
drop table tbl_post;
drop table tbl_postcategory;
drop table tbl_user;

create table tbl_user(
 id int primary key,
 name varchar(50) not null,
 avatar varchar(1000) not null,
 phone varchar(20) not null,
 gender varchar(10) not null default 'Male',
 birthday datetime not null
);

create table tbl_postcategory(
id int primary key,
name varchar(150) not null
);

create table tbl_tag(
id int primary key,
user_id int not null,
 comment_id int not null
);
create table tbl_post(
id int primary key,
images varchar(1000) not null,
content text not null,
created datetime not null default(now()),
privicy int not null default('Public'),
feeling int not null,
tagfriend int null,
addresspost varchar(1000) null,
 user_id int,
 constraint fk_user foreign key (user_id) references tbl_user (id),
 postcategory_id int ,
constraint fk_postcategory foreign key (postcategory_id) references tbl_postcategory(id),
tag_id int ,
constraint fk_tag foreign key (tag_id) references tbl_tag( id));

create table tbl_comment(
id int primary key,
content text not null,
images varchar(1000) null,
sticker int null,
reply varchar(1000) null,
tag_id int,
constraint fk_tagcmt foreign key (tag_id) references tbl_tag(id),
post_id int ,
constraint fk_post foreign key(post_id) references tbl_post(id));
