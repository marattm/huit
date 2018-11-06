# huit

## BookApp

http://thebookapp.maratmonnie.com/
https://thebookapp.herokuapp.com/

### Todo and possible improvements

- [x] Google Books API exploitation
    - [x] Volumes
        - [x] Pagination
        - [x] Sorting
        - [x] Print Type
        - [x] Filtering
        - [x] Language
    - [ ] Bookshelves
    - [ ] Bookshelves "My Librairy"
- [x] Data display (Frontend)
    - [x] Display the result with a thumbnail, title, publisher and date information
    - [x] Display the result with extra information
    - [ ] Highlight the result with the term of the query searched
    - [x] Enhanced UI
        - [x] Local storage saved state
        - [x] Better design
        - [x] More responsive
- [ ] Backend implementation
    - [x] Implemented a very simple Python / Flask app
    - [x] Containerized the app
    - [x] Implement a first check health API
    - [x] Features:
        - [ ] Account, profile, etc..
        - [ ] My library functionality, etc..
        - [ ] Data processing, ML, suggestion features etc..
- [x] Tests
    - [x] Unit testing, almost all static rendering is covered
    - [x] Unit testing for logic, some done but still work to do..
    - [ ] Continue Unit Testing & Integration testing
- [x] Refactor
    - [x] 1st iteration of refactoring app -> better structure for testing
    - [x] 2nd iteration:
        - [x] General housekeeping and code DRYing
        - [x] Removed the local storage save of actual research -> not useful at all.. (hydrateStateWithLocalStorage and saveStateToLocalStorage functions)
        - [x] SRP applied as most as possible
            - [x] Reduce large functions and large components
        - [x] Improved UI
        - [x] Features:
            - [x] Updated the API health check feature
            - [x] Changed the language selection
            - [x] Improve the form part of the code with Formik


### Getting started

```
cd bookapp/
npm i
npm start
```
### Testing

```
cd bookapp/
npm test --verbose
```

### Deployment

1. Deploy react app

__NB:__ PRE-REQUISITE: heroku account, heroku CLI installed.

```
cd bookapp/
heroku login
git init
heroku create -b https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "react-create-app on Heroku"
git push heroku master
heroku open
heroku apps:rename newname --app oldname
```

2. Deploy whole app with backend to local using docker.

__NB:__ PRE-REQUISITE: docker installed, from root directory.

```
make deploy
```

3. Deploy whole app with backend to heorku.

__NB:__ PRE-REQUISITE: docker installed, heroku account, heroku CLI installed, from root directory.

```
make setup
make heroku
```

### Makefile commands

1. Deploy a containerized app in the localhost.
```
make deploy
```

2. Clean environment.
```
make clean
```

3. Setup heroku. (to do it one time)
```
make setup
```

4. Deploy the containerized app the production environment to heroku.
```
make heroku
```
