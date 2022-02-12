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
    'The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apples iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.',
    'Glasgow',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/IPhone_13_Pro_vector.svg/372px-IPhone_13_Pro_vector.svg.png',
    3
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
    'Printers', 
    'Jaydon Haworth', 
    'Company', 
    '+ 44 0000 000 000',
    'person@forsurerealbusiness.com',
    current_timestamp,
    current_timestamp,
    '96',
    '4000',
    '60',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    'Glasgow',
    'https://bit.ly/3uSjqga',
    3
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
    'Sand', 
    'Zachariah Webb', 
    '', 
    '+ 44 0000 000 000',
    'person@forsurerealbusiness.com',
    current_timestamp,
    current_timestamp,
    '39',
    '4000',
    '60',
     'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    'Glasgow',
    'https://www.trn-news.ru/Ru/Upload/Image/leto-seascape-summer-pliazh-volny-sand-more-pesok-sea-blue-1.jpg',
    8
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
    'Fashionable bags', 
    'Lukas Proctor', 
    '', 
    '+ 44 0000 000 000',
    'person@forsurerealbusiness.com',
    current_timestamp,
    current_timestamp,
    '2',
    '4000',
    '60',
     'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    'Glasgow',
    'https://images.ru.prom.st/707705393_w500_h500_sumka-dzhutovaya-razmer.jpg',
    4
);