# si579_group_project  
The introduction of this project will be completed later. Here we will record the steps to complete a certain task so that team members can learn from each other's work more efficiently.  

## Creating Github codespace and environment setup  

1. In the Github interface, navigate to the branch that you want to create the codespace on.
2. Click **Create a codespace on <branch_name>** to create a codespace using global image.
3. In the terminal, type in `npm install -g create-react-app`.
4. Type in `create-react-app <react_app_name>`.
5. Use `cd` to navigate to the application folder.
6. This is the root folder of your project. Type in `npm start` to open browser preview.

## Running React application created in the codespace on other branches

The necessary node modules are too much to synchronize to the remote repo. As a result, necessary node modules will never reside on the remote repo.  
1. After opening the codespace and navigate to the app root folder, run `npm install` in the terminal. This will install all dependent packages used in the application.