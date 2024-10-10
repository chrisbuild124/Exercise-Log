# Exercise-Log
A NodeJS Dynamic Website that tracks exercises using the MERN Stack

**Description**

This is a NodeJS full stack application that tracks a log of your exercises. It will update in real time as your add/edit/delete exercises.
This is the UI:
![image](https://github.com/user-attachments/assets/0340aefa-5f7f-46e2-9cf2-70bb5104af78)

These two buttons either 1) take you to the edit page or 2) delete the exercise from the chart.

![image](https://github.com/user-attachments/assets/72104e04-2c0d-4ede-90a0-cb978f8fddb6)

**Create & Edit Pages**

Here is the create page, follow the format that is specified here to add in an exercise:

![image](https://github.com/user-attachments/assets/d4c1ca0f-2b48-42c7-936d-04d8d8163124)
It will sent an error message if not successful. 

Here is the edit page, same idea:

![image](https://github.com/user-attachments/assets/3d805bec-f5b2-4a92-8495-a582827556db)
Here you can save your edits by clicking "edits". It will also sent an error message if not successful. 

**Background**
- This runs on NodeJS. It uses express to handle API calls, MongoDB for the database, and react for the user interface (UI) for a Single Page Application.
- This uses the Model-View-Controller setup.
- The .ENV file is removed for now, since having those credentials could expose the database to attacks. NOTE: This will make the website not run update the backend. 
- A HTTP request tester file is included here as a guide to forming the website.
- This is not currently run on an external server; to run form two terminals (one for backend, one for front end).
    - Do "npm init" on both terminals to install the packages.
    - Do "npm run dev" for the react portion and "npm start" for the RESTful portion.
 
NOTE: In order to use the program, you will need to do the two steps above, and also set up a database in the .ENV file on MongoDB. 

