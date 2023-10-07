<img src="./readme/title1.svg"/>

<img src="./readme/table-of-contents.png"/>

- [Project Philosophy](#project-description)
  - [User stories](#user-stories)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [How to Run](#how-to-run)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)

<br><br>

<!-- project philosophy -->
<a name="project-description"></a>
<img src="./readme/title2.svg"/>



<a name="user-stories"></a>
### User Stories


<br><br>

<!-- Demo -->
<a name="demo"></a>
<img src="./readme/demo.png"/>

| Signup  | Login | Browse Recipes |
| ---| ---| ---|
| ![Landing](./readme/demo/Signup.jpeg) | ![fsdaf](./readme/demo/login.jpeg) | ![fsdaf](./readme/demo/recipes.jpeg) |
###
| Recipe Details  | Create Recipes |  |
| ---| ---| ---|
| ![Landing](./readme/demo/recipe-details.jpeg) | ![fsdaf](./readme/demo/create-recipe.jpeg) |  |

<br><br>

<!-- Tech stack -->
<a name="tech-stack"></a>
<img src="./readme/title5.svg"/>

###  Online Recipes is built using the following technologies:



<br><br>

<!-- How to run -->
<a name="how-to-run"></a>
<img src="./readme/title6.svg"/>

> To set up Online Recipes locally, follow these steps:

### Prerequisites
<a name="prerequisites"></a>

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation
<a name="installation"></a>

1. Ensure you have Node.js installed. We recommend using the latest version available.
2. Clone the repo
   ```sh
   git clone https://github.com/mhmdhussein377/Online-Recipe-website-React-Laravel.git
   ```
3. Navigate to

   ```sh
   cd Online-Recipe-website-React-Laravel/Backend
   ```
4. Run composer install
   
   ```sh
   composer install
   ```
5. Initialize the database
   
   ```sh
   php artisan migrate
   ```
6. Serve to start the server
    
   ```sh
   php artisan serve
   ```
7. Install NPM packages
   ```sh
   cd client
   ```
   ```sh
   npm install
   ```
8. Run the project
   ```sh
   cd client
   ```
   ```sh
   npm run dev
   ```

Now, you should be able to run Online Recipes locally and explore its features.
