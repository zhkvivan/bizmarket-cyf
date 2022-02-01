DROP TABLE sellerAccount CASCADE;
DROP TABLE category CASCADE;
DROP TABLE adListing CASCADE;

CREATE TABLE sellerAccount (
    id serial PRIMARY KEY,
    username VARCHAR(100) NOT NULL, /* This will be the github username which will be unique */
    createdDate TIMESTAMP
);

CREATE TABLE category (
    id serial PRIMARY KEY,
    name VARCHAR(255),
    link VALUES(255)
);

CREATE TABLE adListing (
    id serial PRIMARY KEY,
    adTitle VARCHAR(255),
    accountId INT,
    foreign key (accountId) references sellerAccount(id),
    createdDate TIMESTAMP,
    updatedDate TIMESTAMP,
    expiryDate TIMESTAMP,
    price VARCHAR(50),
    quantity VARCHAR(255),cat
    description VARCHAR(1000),
    location VARCHAR(255),
    imageURL VARCHAR(255),
    categoryId INT,
    foreign key (categoryId) references category(id)
);

