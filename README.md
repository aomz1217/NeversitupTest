### INSTALLATION ###
1. Run npm i or npm install on the terminal # to install node_modules
2. Run npm start                            # to run website

### Project Structure ###

├── node_modules            # dependencies file (include `lib`).
    ├── ...                 # all dependencies, `lib` files.
    ├── .package-lock.json  # giving dependencies , `lib` version.
├── public                  # index.html , logo and icon for index.html.
├── src                     # Source files .
    ├── assets              # All media files (ex. png,jpg,mp3,... etc) for inner Project.
    ├── components          # none state files , class components , function components
        ├── CSS             # CSS files.
        ├── Toast           # Toast 
            ├── Toast.js    # Toast function component
    ├── mains               # Mains Project 
        ├── Pages 
            ├── Home.js     # Home Page
            ├── Test1.js    # Project Structure Page
            ├── Test2.js    # Permutations Page
            ├── Test3.js    # Find the odd int Page
            ├── Test4.js    # CountSmileys Page
        ├── Route           
            ├── SiderBar.js # SiderBar Layout , Manage nevigate
    ├── App.js              # Main File return Pages,Component
    ├── App.test.js         # Unit test for App.js   
    ├── index.js            # render App component from App.js
    ├── logo.svg            
    ├── reportWebVitals.js  
    ├── setupTests.js
├── .gitignore              # For work with git
├── package-lock.json       # giving dependencies , `lib` version.
├── package.json            # giving dependencies , `lib` version.
└── README.md               # installation & project structure


