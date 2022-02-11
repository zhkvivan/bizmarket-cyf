DELETE FROM adListing; -- TODO: do we really want to wipe all ads each delpoyment (probably not...)
DELETE FROM category;

INSERT INTO category(id, name, link) VALUES(1, 'Food, Drinks', 'food-drink');
INSERT INTO category(id, name, link) VALUES(2, 'Automotive', 'automotive');
INSERT INTO category(id, name, link) VALUES(3, 'Electronics', 'electronics');
INSERT INTO category(id, name, link) VALUES(4, 'Fashion, Clothing', 'fashion-clothing');
INSERT INTO category(id, name, link) VALUES(5, 'Floral, Garden', 'floral-garden');
INSERT INTO category(id, name, link) VALUES(6, 'Health, Beauty', 'health-beauty');
INSERT INTO category(id, name, link) VALUES(7, 'Home, Decor', 'home-decor');
INSERT INTO category(id, name, link) VALUES(8, 'Industrial, Materials', 'industrial-materials');
INSERT INTO category(id, name, link) VALUES(9, 'Pets, Animals', 'pets-animals');
INSERT INTO category(id, name, link) VALUES(10, 'Sports, Outdoors', 'sports-outdoors');
INSERT INTO category(id, name, link) VALUES(11, 'Toys, Games', 'toys-games');
INSERT INTO category(id, name, link) VALUES(12, 'Other', 'other');

INSERT INTO adListing(
    adTitle, 
    sellerName, 
    sellerCompany, 
    sellerPhone, 
    sellerEmail, 
    createdDate, 
    expiryDate, 
    price, 
    quantity, 
    minQuantity, 
    description, 
    location, 
    imageUrl, 
    categoryId
) VALUES(
    'Kittens for sale!', 
    'Liam G', 
    'Cat sale Corp.', 
    '+ 44 0000 000 000',
    'person@forsurerealbusiness.com',
    current_timestamp,
    current_timestamp,
    '3.99',
    '4000',
    '6',
    'Ginger cats for sale (I know 6 cats is a lot for a minimum order but I want to get rid of them).',
    'Glasgow',
    'https://placekitten.com/g/200/300',
    9
);

INSERT INTO adListing(
    adTitle, 
    sellerName, 
    sellerCompany, 
    sellerPhone, 
    sellerEmail, 
    createdDate, 
    expiryDate, 
    price, 
    quantity, 
    minQuantity, 
    description, 
    location, 
    imageUrl, 
    categoryId
) VALUES(
    'iPhones', 
    'Tim Cook', 
    'Apple', 
    '+ 44 0000 000 000',
    'person@forsurerealbusiness.com',
    current_timestamp,
    current_timestamp,
    '399',
    '4000',
    '60',
    'Ginger cats for sale (I know 6 cats is a lot for a minimum order but I want to get rid of them).',
    'Glasgow',
    'https://placekitten.com/g/200/300',
    3
);