alter table promotion
drop foreign key promotion_ibfk_3;

alter table promotion
drop foreign key promotion_ibfk_4;

alter table promotion
drop column credit_card_id;

alter table promotion
drop column bank_id;

create table credit_card_promotion_eligibility(
card_id int not null,
promotion_id int not null,
primary key (card_id, promotion_id),
foreign key (card_id) references credit_card (card_id),
foreign key (promotion_id) references promotion (promotion_id)
);
