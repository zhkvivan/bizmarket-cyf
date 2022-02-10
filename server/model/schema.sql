CREATE TABLE sellerAccount (
    id serial PRIMARY KEY,
    username VARCHAR(100) NOT NULL, /* This will be the github username which will be unique */
    createdDate TIMESTAMP
);

CREATE TABLE category (
    id serial PRIMARY KEY,
    name VARCHAR(255),
    link VARCHAR(75)
);

CREATE TABLE adListing (
    id serial PRIMARY KEY,
    adTitle VARCHAR(255),
    sellerName VARCHAR(255),
    sellerCompany VARCHAR(255),
    sellerPhone VARCHAR(50),
    sellerEmail VARCHAR(75),
    createdDate TIMESTAMP,
    updatedDate TIMESTAMP,
    expiryDate TIMESTAMP,
    price VARCHAR(50),
    quantity VARCHAR(255),
    minQuantity VARCHAR(255),
    description VARCHAR(1000),
    location VARCHAR(255),
    imageURL VARCHAR(255),
    categoryId INT,
    foreign key (categoryId) references category(id)
);

