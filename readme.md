> [Template Used](https://github.com/metruzanca/ga-vercel-demo)
>
> - **App Title**: Song Book
- **App Description**: Allow full CRUD for a database of Chord Progressions
- **API**: From Scratch
- **API Snippet**: N/A
- **MVP**: Be able to view, create, update, and delete Songs from the library
- **Post-MVP**: Have a front-end developed to interact with the developed API
- **Goals**: 
- [X] Project Approval
- [X] Boilerplate
- [X] Seeding & Testing
- [X] Deployment/ Full CRUD
- **Data Model**:
- ![Data-Model](imgs/Screenshot%202023-02-17%20at%203.23.55%20PM.png)
- **Routing Table**:
- 
| Route       | HTTP Method | DB Action | Description           |
| ----------- | ----------- | --------- | --------------------- |
| /api/       | GET         | INDEX     | Indexes all the songs |
| /api/       | POST        | CREATE    | Create a song         |
| /api/:title | GET         | SHOW      | Show a single song    |
| /api/:title | PUT         | UPDATE    | Update a song         |
| /api/:title | DELETE      | DELETE    | Delete a song         |
