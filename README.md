# huit

## BookApp

https://thebookapp.maratmonnie.com/

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
    - [ ] Enhanced UI
        - [x] Local storage saved state
        - [ ] Better design
        - [ ] More responsive
- [ ] Backend implementation
    - [ ] Account, profile, etc..
    - [ ] My library functionality, etc..
    - [ ] Data processing, ML, suggestion features etc..
- [x] Tests
    - [x] Unit testing, almost all static rendering is covered
    - [ ] Unit testing for logic, work in progress..
    - [ ] Integration testing
- [x] Refactor
    - [x] 1st iteration of refactoring app -> better structure for testing
    - [ ] ...

### Get started

```
cd bookapp/
npm i
npm start
```
### Test

```
cd bookapp/
npm test --verbose
```

### Deployment

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