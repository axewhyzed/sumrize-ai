# Sumrize AI

Sumrize AI is an AI-powered article summarizing application built with React and Redux Toolkit. It allows users to paste article links and generate summaries of those articles. The application utilizes the RapidAPI service for extracting and summarizing articles.

## Features

- Paste article links and generate summaries
- Automatic summarization using AI algorithms
- Browse history of previously summarized articles
- Copy article links to the clipboard
- User-friendly interface

## Technologies Used

- React: A JavaScript library for building user interfaces
- Redux Toolkit: A state management library for React applications
- Tailwind CSS: A utility-first CSS framework
- RapidAPI: An API marketplace for accessing various APIs

API Link : https://rapidapi.com/restyler/api/article-extractor-and-summarizer

## Getting Started

To run Sumrize AI locally, follow these steps:

1. Clone the repository: `git clone https://github.com/axewhyzed/sumrize-ai.git`
2. Install dependencies: `cd sumrize-ai && npm install`
3. Obtain a RapidAPI key for the Article Extractor and Summarizer API. Set the key as an environment variable `VITE_RAPID_API_ARTICLE_KEY`.
4. Start the development server: `npm start`
5. Open the application in your browser: `http://localhost:3000`

## File Structure

The repository contains the following main files and directories:

- `src/components`: Contains the React components for the application, including `Hero` and `Demo`.
- `src/services`: Contains the Redux Toolkit store configuration and API service for article extraction and summarization.
- `src/assets`: Contains the application's static assets, such as images and icons.
- `src/App.jsx`: The main application component that renders the `Hero` and `Demo` components.
- `src/App.css`: The CSS styles for the application.
- `src/index.jsx`: The entry point of the application.

## Development Workflow

The application uses Redux Toolkit for state management and makes API requests to the RapidAPI service for article summarization. The main workflow of the application is as follows:

1. The user pastes an article link into the input field and submits the form.
2. If the article link is already in the browse history, the corresponding summary is retrieved from local storage and displayed.
3. If the article link is not in the browse history, an API request is made to the Article Extractor and Summarizer API to obtain the summary.
4. The summary is displayed to the user, and the article link is added to the browse history.
5. The user can click on previous article links in the browse history to view their summaries.
6. The user can copy an article link to the clipboard by clicking on the copy button.

## Deployment

To deploy Sumrize AI to a production environment, follow these steps:

1. Build the application: `npm run build`
2. The optimized and minified build files will be available in the `build` directory.
3. Serve the build files using a static file server or deploy them to a hosting service.

## License

Sumrize AI is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT)
