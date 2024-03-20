# Reci-pie


## About the app
> The app is a recipe sharing and discovery app. It will allow users to share and discover various recipes shared by other users. The app will also include an additional option of adding the ingredients of the recipe to a grocery-list to avoid last minute trips to the store. The app will also make use of an API which will allow users to discover recipes not shared by other users or have an option of searching for an alternate recipe. 



## Team

The building of the site will be a team effort. The team was composed of:

- [Zainab](https://github.com/zynbahmed)
- [Nayef](https://github.com/nakz57)
- [Nabeel](https://github.com/nabeelmaklai)

The development of the app was organized using a Trello board linked below. 


## Development Outline

> The site will be developed using the Express JS framework as the back-end and React JS as the front-end . A dedicated API will be used to fetch the searched recipes. There will be two types-of user authentication, a custom authentication and a Google OAuth.  User will be able to create an account, share recipes, browse recipes and search recipes as well as add reviews of other recipes. The site will be developed and designed using the conceptualized ERD below. The ERD has three four (Recipe, User, Ingredient, Review) with recipe and ingredients having a many to-many relationship along with the user to ingredient relationship. However the user to review has a one to-many relationship along with the user to recipe relationship.

![Alt text](https://github.com/zynbahmed/recipie/blob/main/images/image.png)

> The wireframe of the conceptualized app is included below. The wireframe includes the recipe search page, user register and login page, saved recipe page, recipe card and profile page listing the recipes of a user.

![Alt text](https://github.com/zynbahmed/recipie/blob/main/images/wireFrame.png)

> The component hierarchy diagram is included below and highlights the relationship between various components of the app.

![Alt text](https://github.com/zynbahmed/recipie/blob/main/images/hierarchy.png)




## Coding the App

The app will be developed using the ExpressJS framework as the back-end and which will use MongoDB as the database and React JS as the front-end. Mongoose will be used in the ExpressJS framework to interact with the Mongo database. An API will be used  to fetch recipes in the search function. To manage the database, a user, recipe, review and ingredient schema will be created.

## :computer: Technologies Used

- ![HTML badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- ![JS badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
- ![Express badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=express&logoColor=F7DF1E)
- ![ReactJS](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)
