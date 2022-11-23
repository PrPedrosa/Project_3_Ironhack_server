# Project Name

<br>

# Quick Compo

<br>

## Description

This is an app to allow fishermen to log their fisheries 

## User Stories

-  **404:** As a user I get to see a 404 page with a feedback message if I try to reach a page that does not exist so that I know it's my fault.
-  **Signup:** As an anonymous user I can sign up on the platform so that I can start logging and saving my fisheries.
-  **Login:** As a user I can login to the platform so that I can access my profile and start logging and saving my fisheries.
-  **Logout:** As a logged in user I can logout from the platform so no one else can use it.
-  **Profile Page**: As a logged in user I can visit my profile page so that I can access the edit page and see the list of fisheries I have logged.
-  **Add Fisheries:** As a logged in user I can access the add fisheries page so that I can create a new fisherie.
-  **Edit Fisheries:** As a logged in user I can access the edit fisherie page so that I can edit the fisherie I created.
-  **Add fishes:** As a user I can add fishes to a fisheries.
<!-- -  **View Tournament Table:** As a user I want to see the tournament details, players list and the time table.
-  **View Ranks:** As a user I can see the rankings list for the tournament. -->




<!-- ## Backlog

- Add weather widget
- lottie interactions
- users can bet
- add geolocation to events when creating -->


<br>


# Client / Frontend

## React Router Routes (React App)

| Path                         | Component            | Permissions                | Behavior                                                  |
| ---------------------------- | -------------------- | -------------------------- | --------------------------------------------------------- |
| `/login`                     | LoginPage            | anon only `<AnonRoute>`    | Login form, navigates to home page after login.           |
| `/signup`                    | SignupPage           | anon only  `<AnonRoute>`   | Signup form, navigates to home page after signup.         |
| `/`                          | HomePage             | public `<Route>`           | Home page.                                                |
| `/user-profile`              | ProfilePage          | user only `<PrivateRoute>` | User and player profile for the current user.             |
| `/user-profile/edit`         | EditProfilePage      | user only `<PrivateRoute>` | Edit user profile form.                                   |
| `/fisheries/add`           | CreateFisheriesPage | user only `<PrivateRoute>` | Create new Fisherie form.                               |
| `/fisheries`               | FisheriesListPage   | user only `<PrivateRoute>` | See all user Fisheries                                         |
| `/fisheries/:fisheriesId` | FisheriesDetailPage | user only `<PrivateRoute>` | Fisheries details. |
| `/fish`    | AvailableFishesList    | user only `<PrivateRoute>` | Display Fishes list                                    |
| `/fish/fishId`    | Fish Details        | user only `<PrivateRoute>` | Display Fish details                                 |




## Components

Pages:

- LoginPage

- SignupPage

- HomePage

- ProfilePage

- EditProfilePage

- CreateFisheriesPage

- FisheriesListPage

- FishListPage

- FishDetailsPage

- RankingsPage

  

Components:

- FishCard
- FisherieCard
- Navbar





<!-- 
## Services

- **Auth Service**

  - `authService` :
    - `.login(user)`
    - `.signup(user)`
    - `.logout()`
    - `.validate()`

- **User Service**

  - `userService` :
    - `.updateCurrentUser(id, userData)`
    - `.getCurrentUser()`

- **Tournament Service**

  - `tournamentService` :
    - `.addTournament(tournamentData)`
    - `.getTournaments()`
    - `.getOneTournament(id)`
    - `.deleteTournament(id)`

- **Player Service**

  - `playerService` :
    - `.createPlayer(id)`
    - `.getPlayerDetails(id)` -->

  



<br>


# Server / Backend


## Models

**User model**

```javascript
{
  email: { type: String, required: true, unique: true, trim: true },

  password: { type: String, required: true },

  name: { type: String, required: true, trim: true, },

  image: String

  sustainableFisherNumber : {type: String, trim: true, unique: true}

  fisheries: [ { type: Schema.Types.ObjectId, ref:'Fisherie' } ]
}
```



**Fisherie model**

```javascript
 {
   name: { type: String, required: true, unique: true },

   image: { type: String },

   fishes: [ { species: {type: Schema.Types.ObjectId, ref:'Fish'}, amount: Number, weight: Number } ],

   date: {type: String, required: true},
   
   location: {lat: {type: String, required: true}, long: {type: String, required: true}},

   overallWeight: {type: Number, default: null}

   sustainableFisherNumber: String
 }
```



**Fish model**

```javascript
{
  commonName: { type: String, required: true, unique: true, trim: true },

  scientificName: {type: String, unique: true, trim: true},

  image: { type: String },

  description: { type: String, trim: true },

  threatCategory: {type: String, trim: true},

  habitat: {type: String, trim: true},

  maxLength: {type: Number, default: null},

  areaFound: {type: String, trim: true},

  minCatchSize: {type: Number, default: null},

  totalAmountCatched: Number,

  weight: Number,

  height: Number,

  userCreated: {type: Boolean, default: false}
}
```




<br>


## API Endpoints (backend routes)

| HTTP Method | URL                    | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | ---------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/api/verify    `    | Saved session                | 200            | 404          | Check if user has jwt token           |
| POST        | `/api/signup`         | {name, email, password, cardNumber}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password |
| POST        | `/api/login`          | {name, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then creates jwt token |
| POST        | `/api/logout`         |                              | 204            | 400          | Logs out the user                                            |
| GET         | `/api/fishes`     |                              |                | 400          | Show all fishes                                         |
| GET         | `/api/fishes/:id` |                              |                |              | Show specific fish details                                     |
| POST        | `/api/fisheries`     | { name, img, players }       | 201            | 400          | Create and save a new fisherie                             |
| PUT         | `/api/fisheries/:id` | { name, img, players }       | 200            | 400          | edit fisheries                                              |
| DELETE      | `/api/fisheries/:id` |                              | 201            | 400          | delete fisheries                                            |
| GET         | `/api/fisheries/:id`     |                              |                |              | show specific fisherie details                                         |
| POST        | `/api/fishes`         | { name, img, tournamentId }  | 200            | 404          | add fish                                                   |
| PUT         | `/api/profile/:id`     | { name, img }                | 201            | 400          | edit user profile                                                  |
| DELETE      | `/api/profile/:id`     |                              | 200            | 400          | delete account                                                |
| DELETE         | `/api/fishes/:id`           |                              | 201            | 400          | delete fish                                                   |



<br>

## API's
Google Maps Api

<br>

## Packages
styled-components
cloudinary

<br>


## Links

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/PrPedrosa/Project_3_Ironhack_server)

[Server repository Link](https://github.com/PrPedrosa/Project_3_Ironhack_client)



### Slides

[Slides Link](http://slides.com) - The url to your *public* presentation slides

### Contributors

Pedro Pedrosa - [GitHub](https://github.com/PrPedrosa) || [Linkedin](https://www.linkedin.com/in/prpedrosa/)

