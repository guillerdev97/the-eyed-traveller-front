# Project Name: The Eyed Traveller

## Description
This website aims to be a travel portal for users. We could say that it is a portal for consultation and storage of images for those travelers who want to plan their trip, choose the images according to their tastes and get an idea of what they are going to find.

It aims to be an interactive portal, hence each user can upload their images, and the portal shows a top 8 of the images with the highest number of likes (users who save that image).

The philosophy of the app is to offer users a quick overview of sites they might like. 

## Views and Design

[Click here to see the application views and design](https://docs.google.com/document/d/1UDq8bJ4Uqii_thj4N3PO7T0fsqef16rsvZYvWxhjsqk/edit?usp=sharing)

## Technical test developed for Factoría F5

Develop a web application to manage "my favorite images".

## Requirementes

As a user it will be necessary to be able to view a list of my
images (image and a title).

As a user it will be necessary to be able to add pictures to a
database.

As a user you will need to be able to delete an image.

As a user you will need to be able to edit an existing image.

Good software development practices:
    Test (TDD)
    SOLID
    Git and commits
    
You can use any technology, framework and architecture but
we hope you remember what is important (quality is better than quantity).

## Run Locally

### Backend

Clone the project
```bash
  git clone https://github.com/guillerdev97/the-eyed-traveller-back.git
```
Go to the project directory
```bash
  cd the-eyed-traveller-back
```
Install dependencies
```bash
  composer update
  npm install
```
Start the server
```bash
  run Apache and MySQL server in XAMPP
  php artisan serve
  npm run dev
```

Import the database of the project the_eyed_traveller.sql into phpMyAdmin.
Name of the database: the_eyed_traveller.
Execute migration: "php artisant migrate".

### Frontend

Clone the project
```bash
  git clone https://github.com/guillerdev97/the-eyed-traveller-front.git
```
Go to the project directory
```bash
  cd the-eyed-traveller-front
```
Install dependencies
```bash
  npm install
```
Start the server
```bash
  npm run dev
```

## Technical requirements

- PHP 8.1.6
- Composer 2.3.10

## Run tests

To execute tests uncomment 2 lines of "phpunit.xml":
```php
    <server name="DB_CONNECTION" value="sqlite"/>
    <server name="DB_DATABASE" value=":memory:"/>
```
        
- vendor/bin/phpunit 
- php artisan test

## Presentation:

<ul>
<li>GitHub link.</li>
<li>Readme.</li>
</ul>

## Work methodology

- TDD
- Agile
- Scrum

## Tools and technologies used

| Front End | Back End | Diseño y organización | 
| :---: | :---: | :---: |
| <img src="https://github.com/Yelose/Yelose/blob/main/img/vscode.png"> <img src="https://github.com/Yelose/Yelose/blob/main/img/html.png"> <img src="https://github.com/Yelose/Yelose/blob/main/img/bootstrap.png">  <img src="https://github.com/Yelose/Yelose/blob/main/img/css.png"> <img src="https://github.com/Yelose/Yelose/blob/main/img/vue.png"> | <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU3_893T2dAaGeZ6fb9y9rZxc9Cu-TnUKx0Q&usqp=CAU"> <img src="https://github.com/Yelose/Yelose/blob/main/img/php.png">  <img src="https://github.com/Yelose/Yelose/blob/main/img/mysql.png"> | <img src="https://github.com/Yelose/Yelose/blob/main/img/figma.png"> <img src="https://github.com/Yelose/Yelose/blob/main/img/jira.png"> <img src="https://github.com/Yelose/Yelose/blob/main/img/google.png">  |

## Documentation
- [Click here to see the explanation and documentation of the project](https://docs.google.com/document/d/1sP-c3P6gIKExmUr-jU6kb-p7Py0Wyx31cFFtpbM7NJM/edit?usp=sharing)

## Authors

| Nombre | Roll | <img src="https://github.com/Yelose/Yelose/blob/main/img/github.png" width="30px" height="30px"> |
| :--- | :---: | :---: |
| Guillermo García | Web Developer | https://github.com/guillerdev97 |

## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)


