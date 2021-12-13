### TripTrack!

## TripTrack is an application that lets user keep track of upcoming trips !

- users should be able add the location of a trip

- user should be able to delete and edit trips

| path        | action                                  |
| ----------- | --------------------------------------- |
| "/trips"    | renders all the trips in the index page |
| "/edit"     | edits a trip                            |
| "/trips/:id | renders the specified trip              |
| "/new"      | adds a trip                             |

## model

place: String
type: String
date: Date or String
description: String

### component wire

Header-component
Footer-component
Home-page
All trips page-page
single trip -page

## Technologies -frontend

- JavaScript
- React
- React-router-dom
- React-reveal

## Technologies -backend

- Python

- postgres

## challanges

- I was having a problem with my create route due to the boolean in my backend schema.
  solution

```
<option value={true}>true</option>
          <option value={false}>false</option>
```
