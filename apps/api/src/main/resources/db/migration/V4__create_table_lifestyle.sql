create table lifestyle(
lifestyle_id int not null auto_increment,
lifestyle_name varchar(255) not null,
lifestyle_description text,
lifestyle_icon_url varchar(255),
primary key (lifestyle_id)
);

create table card_lifestyle(
card_id int,
lifestyle_id int,
primary key (card_id, lifestyle_id),
foreign key (card_id) references credit_card (card_id),
foreign key (lifestyle_id) references lifestyle (lifestyle_id)
);
