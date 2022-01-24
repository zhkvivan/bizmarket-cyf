CREATE TABLE sellerAccount (
    id              INT SERIAL PRIMARY KEY,
    name            VARCHAR(75) NOT NULL,
    email           VARCHAR(255)NOT NULL,
    password        VARCHAR(255)NOT NULL,
    telNum          VARCHAR(50),
    companyName     VARCHAR(255),
    location        VARCHAR(255),
    createdDate     TIMESTAMP,
    updatedDate     TIMESTAMP
);

CREATE TABLE adListing (
    id              INT SERIAL PRIMARY KEY,
    listingName     VARCHAR(255),
    owner           INT REFERENCES sellerAccount(id),
    createdDate     TIMESTAMP,
    updatedDate     TIMESTAMP,
    expiryDate      TIMESTAMP,
    price           VARCHAR(50),
    quantity        VARCHAR(255),
    header          VARCHAR(255), 
    description     VARCHAR(1000),
    location        VARCHAR(255),
    imageURL        VARCHAR(255),
    categoryID      INT REFERENCES category(id)
);

CREATE TABLE category (
    id              INT SERIAL PRIMARY KEY,
    name            VARCHAR(255)
);