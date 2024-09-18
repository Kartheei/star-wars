# Star Wars Episodes Listing Application

This project is a Star Wars site that lists all the episodes of Star Wars, utilizing Apollo GraphQL to fetch and display data. It is built with React (Typescript), and hosted on AWS.

## Installation

To install the necessary dependencies, run:

```bash
npm install
```

## Running the Application

To start the application locally, run:

```bash
npm start
```

This will launch the application on http://localhost:3000.

## URLs

- **GitHub Repository**: 
    - [Star Wars Repo Link](https://github.com/Kartheei/star-wars)
    - [Star Wars with Redux implementation](https://github.com/Kartheei/star-wars/tree/utils/redux-state-management)
- **Hosted Application**: [Star Wars Live](https://star-wars.karthickks.com)

## Features
- **Apollo GraphQL Integration**: Utilized Apollo Client to interact with a GraphQL API to fetch data from the Star Wars universe.
- **Star Wars Episodes Listing**: Displays a complete list of all the Star Wars episodes.
- **Responsive UI**: Optimized for various screen sizes, ensuring a seamless experience on desktop and mobile devices.
- **Sorting Functionality**: Users can sort the list of Star Wars episodes based on:
  - **Episode Number**: Sort by the chronological order of the episodes.
  - **Title**: Alphabetically sort by the title of the episode.
  - **Release Date**: Sort by the release date, allowing users to view episodes from oldest to newest or vice versa.
- **Episode Details Page**: Each episode has a dedicated page with detailed information, including:
  - Episode title
  - Episode release date
  - Opening crawl (a summary of the movie)
  - Director and producer information
- **Hosted on AWS**: The application is deployed and hosted on AWS for high availability and scalability.

## Movie Page Details
Each episode’s dedicated page provides the following details:
- **Title**: The name of the Star Wars episode.
- **Release Date**: When the episode was released in theaters.
- **Opening Crawl**: The famous opening crawl that summarizes the plot of the episode.
- **Director & Producer**: The people responsible for directing and producing the episode.

## Sorting Feature
The list of Star Wars episodes can be sorted by:
1. **Episode**: View the episodes in the chronological order of release (Episode I through Episode IX).
2. **Title**: Sort episodes alphabetically by their titles.
3. **Release Date**: Sort the episodes based on their release date (ascending or descending).

## Technologies Used

- **React**: Frontend framework for building UI components.
- **Apollo Client**: For querying data using GraphQL.
- **AWS**: Application hosted on AWS for scalability and reliability.

## Project Structure

```bash
src/
├───film/
│   ├───component/
│   ├───dto/
│   │   ├───request/
│   │   └───response/
│   ├───graphql/
│   │   ├───mutation/
│   │   └───query/
│   ├───page/
│   └───service/
└───utils/
    ├───api/
    ├───assets/
    │   └───images/
    │       ├───common/
    │       └───poster/
    ├───helpers/
    └───hook/
```