insert into customer (age, email, name) values (17, 'tvadost2003@gmail.com', 'Vadym')
insert into customer (age, email, name) values (17, 'ulyanakovalenko2@gmail.com', 'Ulyana')

insert into employer (address, name) values ('Kiev', 'test_company')
insert into employer (address, name) values ('Lviv', 'company')

insert into account (balance, currency, number) values (18.2, 1, '123')
insert into account (balance, currency, number) values (11.2, 2, '942')

insert into accounts_to_customer (customer_id, account_id) values (1, 1)
insert into accounts_to_customer (customer_id, account_id) values (2, 2)

insert into employers_to_customers (employer_id, customer_id) values (1, 1)
insert into employers_to_customers (employer_id, customer_id) values (1, 2)
insert into employers_to_customers (employer_id, customer_id) values (2, 1)
insert into employers_to_customers (employer_id, customer_id) values (2, 2)