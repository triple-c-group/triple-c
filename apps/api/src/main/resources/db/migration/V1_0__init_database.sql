create table bank(
bank_id varchar(25) not null,
bank_name varchar(255) not null,
bank_website varchar(255) not null,
primary key (bank_id)
);

create table credit_card(
card_id int not null auto_increment,
card_name varchar(255) not null,
card_description text not null,
network varchar(25) not null,
bank_id varchar(25) not null,
minimum_income int not null,
minimum_credit_score int not null,
minimum_age tinyint not null,
annual_fee int not null,
interest_rate float not null,
validity_month int not null,
cashback_percentage float not null,
highlight_benefits text not null,
welcome_offer text not null,
image_url varchar(255) not null,
additional_detail text not null,
official_detail_url varchar(255) not null,
affiliate_application_url varchar(255) not null,
point_per_baht int not null,
primary key (card_id),
foreign key (bank_id) references bank (bank_id)
);

create table lifestyle(
lifestyle_id int not null auto_increment,
lifestyle_name varchar(255) not null,
lifestyle_description text not null,
lifestyle_icon_url varchar(255) not null,
primary key (lifestyle_id)
);

create table card_lifestyle(
card_id int not null,
lifestyle_id int not null,
primary key (card_id, lifestyle_id),
foreign key (card_id) references credit_card (card_id),
foreign key (lifestyle_id) references lifestyle (lifestyle_id)
);

create table user(
user_id int not null auto_increment,
line_id varchar(255) not null,
email varchar(255) not null,
phone_number varchar(25) not null,
profile_picture_url varchar(255) not null,
primary key (user_id)
);

create table user_lifestyle(
user_id int not null,
lifestyle_id int not null,
lifestyle_rank tinyint not null,
primary key (user_id, lifestyle_id),
foreign key (user_id) references user (user_id),
foreign key (lifestyle_id) references lifestyle (lifestyle_id)
);

create table user_like_card(
user_id int not null,
card_id int not null,
primary key (user_id, card_id),
foreign key (user_id) references user (user_id),
foreign key (card_id) references credit_card (card_id)
);

create table user_owned_card(
user_id int not null,
card_id int not null,
card_nickname varchar(255),
comment text,
rating tinyint,
payment_due_date date,
accept_promotion_notification boolean not null,
accept_due_date_notification boolean not null,
primary key (user_id, card_id),
foreign key (user_id) references user (user_id),
foreign key (card_id) references credit_card (card_id)
);

create table admin(
admin_id int not null auto_increment,
line_id varchar(255) not null,
email varchar(255) not null,
phone_number varchar(25) not null,
profile_picture_url varchar(255) not null,
primary key (admin_id)
);

create table advertisement(
advertisement_id int not null auto_increment,
title varchar(255) not null,
image varchar(255) not null,
link varchar(255) not null,
shown_from datetime not null,
shown_to datetime not null,
classification varchar(255) not null,
creator_id int not null,
primary key (advertisement_id),
foreign key (creator_id) references admin (admin_id)
);

create table user_deny_advertisement(
user_id int not null,
advertisement_id int not null,
primary key (user_id, advertisement_id),
foreign key (user_id) references user (user_id),
foreign key (advertisement_id) references advertisement (advertisement_id)
);

create table article(
article_id int not null auto_increment,
title varchar(255) not null,
content text not null,
posted_on datetime not null,
creator_id int not null,
primary key (article_id),
foreign key (creator_id) references admin (admin_id)
);

create table promotion_category(
category_id int not null auto_increment,
name varchar(255) not null,
primary key (category_id)
);

create table lifestyle_promotion_category(
lifestyle_id int not null,
category_id int not null,
weight float not null,
primary key (lifestyle_id, category_id),
foreign key (lifestyle_id) references lifestyle (lifestyle_id),
foreign key (category_id) references promotion_category (category_id)
);

create table promotion(
promotion_id int not null auto_increment,
title varchar(255) not null,
description text not null,
baht_per_point int not null,
valid_from datetime not null,
valid_to datetime not null,
category_id int not null,
poster_id int not null,
credit_card_id int,
bank_id varchar(25),
primary key (promotion_id),
foreign key (category_id) references promotion_category (category_id),
foreign key (poster_id) references admin (admin_id),
foreign key (credit_card_id) references credit_card (card_id),
foreign key (bank_id) references bank (bank_id)
);

create table store(
store_id int not null auto_increment,
name varchar(255) not null,
owner varchar(255) not null,
primary key (store_id)
);

create table branch(
branch_id int not null auto_increment,
store_id int not null,
branch_name varchar(255) not null,
link varchar(255) not null,
beacon_device_id varchar(255),
primary key (branch_id, store_id),
foreign key (store_id) references store (store_id)
);

create table promotion_available_branch(
promotion_id int not null,
branch_id int not null,
store_id int not null,
primary key (promotion_id, branch_id, store_id),
foreign key (promotion_id) references promotion (promotion_id),
foreign key (branch_id, store_id) references branch (branch_id, store_id)
);
























