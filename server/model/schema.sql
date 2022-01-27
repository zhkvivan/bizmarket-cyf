CREATE TABLE sellerAccount (
    id serial PRIMARY KEY,
    name VARCHAR(75) NOT NULL,
    email VARCHAR(255)NOT NULL,
    password VARCHAR(255)NOT NULL,
    telNum VARCHAR(50),
    companyName VARCHAR(255),
    location VARCHAR(255),
    createdDate TIMESTAMP,
    updatedDate TIMESTAMP
);

CREATE TABLE category (
    id serial PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE adListing (
    id serial PRIMARY KEY,
    adTitle VARCHAR(255),
    foreign key (id) references sellerAccount(id),
    createdDate TIMESTAMP,
    updatedDate TIMESTAMP,
    expiryDate TIMESTAMP,
    price VARCHAR(50),
    quantity VARCHAR(255),
    description VARCHAR(1000),
    location VARCHAR(255),
    imageURL VARCHAR(255),
    foreign key (id) references category(id)
);

