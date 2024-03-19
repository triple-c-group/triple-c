create table owned_card(
owned_card_id int not null auto_increment,
user_id int not null,
card_id int not null,
owned_card_name varchar(255),
comment text,
rating tinyint,
payment_due_date date,
accept_promotion_notification boolean,
accept_due_date_notification boolean,
primary key (owned_card_id, card_id),
foreign key (user_id) references user (user_id),
foreign key (card_id) references credit_card (card_id)
);