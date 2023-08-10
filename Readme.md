# Image Processing API Project

## Project Details

### project has the following files in it:
  - **node_modules** folder : containing the modules used in the project.
  - **spec** folder which support folder in it that's containing the jasmine.json file
    that used for configurating the testing environment.
  - **src** folder has in it :
    - **images** folder containig the **Original Images** that will be **resized**.
    - **Middleware** folder contains the Middleware modules i built for the endpoint.
    - **tests** folder has in it:
      - **helpers** folder contains the reporter.ts script.
      - the **endPointSpec.ts** file : for testing the endpoint.
      - the **g&rSpec.ts** file: for testing the resizing function.
    - **thumb** folder for the resized images.
    - **get&resize.ts** file : resizing function.
    - **index.ts** file : the main file to start **the server** and observe **the get request**.
    - **methodCallback.ts** file : the call back function after hitting the **endpoint** using **get request**.
  - **configuration** files for **prettier** and **eslint** >> **.eslintrc** , **.prettierrc**.
  - **package json files**.
  - **tsconfig.json**.

### Project scripts needed for:
  - **styling** : "lint": "eslint \"src/**/*.ts\""
              "prettier": "prettier --config .prettierrc \"src/**/*.ts\" --write"
  - **building**: "build": "npx tsc"
  
  - **copying Images folder and create thumb folder**:
    - "copy": "copyfiles -u 1 \"src/images/**\" dist", "thumb": "mkdirp ./dist/thumb"

  - **testing** : "jasmine": "jasmine" , "test": "npm run build && npm run copy && npm run thumb && npm run jasmine"

  - **starting**: "start": "nodemon src/index.ts"

  

#### We can use  this endpoint to ensure that the resizing happened for backgrauand.png image:

**/image?name=backgrauand.png&width=500&height=500**



