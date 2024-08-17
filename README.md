# Help Center API Assignment

## Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/iAmritMalviya/fullstack-assignment
   cd fullstack-assignment
   ```

2. **Frontend:**

   - Create a React app in the `frontend` folder.
   - Follow the instructions in `frontend.md` to complete the frontend.

3. **Backend:**

   - Create a Node.js app in the `backend` folder.
   - Follow the `backend.md` instructions to complete the backend.

4. **Push Your Work:**

   - Push both the frontend and backend apps to the same repository.
   - Make sure the repository is public.

5. **Submit Your Work:**
   - Paste the GitHub repository link in the Google form you received after pushing your code.

---

## Project Run Instructions

To run the project, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/iAmritMalviya/fullstack-assignment
   cd fullstack-assignment
   ```

2. **Frontend:**

   - Navigate to the `frontend` folder.
   - Install the dependencies by running `npm install`.

   - Start the frontend server by running `npm start`.

   ```
   To access the Backend Apis, please make sure to create a `.env` file in the root directory of your frontend app. In the `.env` file, add the following line:

   REACT_APP_URL=<your_react_app_url>
   ```

   ```

   Replace `<your_react_app_url>` with the actual URL of your backend server.

   This will allow your frontend to connect to the backend app Make sure to include the `.env` file in your `.gitignore` to keep your credentials secure.


   ```

3. **Backend:**

   - Navigate to the `backend` folder.
   - Install the dependencies by running `npm install`.
   - Start the backend server by running `npm start`.

   ```

   To access the MongoDB URL, please make sure to create a `.env` file in the root directory of your backend app. In the `.env` file, add the following line:

   MONGODB_URL=<your_mongodb_url>

   ```

   ```
   Replace `<your_mongodb_url>` with the actual URL of your MongoDB database.

   This will allow your backend app to establish a connection with the MongoDB database. Make sure to include the `.env` file in your `.gitignore` to keep your credentials secure.

   ```

4. **Access the Application:**
   - Open your web browser and go to `http://localhost:3000` to access the application.

Remember to stop the servers by pressing `Ctrl + C` in the terminal when you are done.

To create card data, you can send a POST request to the backend server. Here are the steps to do that:

1. Open Postman or any API testing tool.

2. Set the request method to POST.

3. Enter the URL of the backend server endpoint where you want to create the card data.

4. In the request body, provide the necessary details for the card, such as the card title, description.

5. Send the request and check the response to ensure that the card data was successfully created.

## API Routes

Here are the API routes that are created in this project for easy understanding and testing:

1. **GET /api/cards**

   - This route retrieves all the card data from the database.

2. **POST /api/cards**
   - This route creates a new card in the database.
   - The request body should include the necessary details for the card, such as the card title and description.
3. **GET /api/cards/:title**
   - This route retrieves a specific card by its title from the database.
   - Replace `:title` with the actual title of the card you want to retrieve.

Remember to replace `:title` with the actual title value when making requests to the routes that require it.
