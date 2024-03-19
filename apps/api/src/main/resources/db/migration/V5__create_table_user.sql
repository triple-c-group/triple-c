create table user(
user_id int,
salary int,
primary key (user_id)
);

create table user_lifestyle(
user_id int,
lifestyle_id int,
primary key (user_id, lifestyle_id),
foreign key (user_id) references user (user_id),
foreign key (lifestyle_id) references lifestyle (lifestyle_id)
);

create table user_like_card(
user_id int,
card_id int,
primary key (user_id, card_id),
foreign key (user_id) references user (user_id),
foreign key (card_id) references credit_card (card_id)
);