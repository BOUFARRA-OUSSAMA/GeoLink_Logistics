## Backend

### Technologies Used

- React.js
- Mangodb
- Node.js
- Firebase
- Maven

## Backend Project Structure

The backend code follows a modular and organized structure, leveraging the power of React.js for building a robust and scalable application.

### 1. `GeoLink_Logistics.application`

- **Main GeoLink_Logistics Class:** `GeoLink_Logistics` serves as the entry point for the React.js application. It includes the `main` method to start the application.

### 2. `tryCatch.js.controller`

- **tryCatch.js:** This utility function wraps controller functions, handling any errors that occur during their execution by logging the error and sending an appropriate error response with a status code of 500, providing a layer of error handling abstraction for HTTP request processing.
  
### 3. `GeoLink_Logistics.service`

- **checkOwner.js:** This service function checks if the authenticated user is the owner of a specific offer by querying the database with the offer ID and the user ID, returning true if the user is the owner, false otherwise, or 'error' in case of an error.

- **offerPermissions.js:** This service module defines permissions for updating and deleting offers based on user roles and ownership, utilizing the checkOwner service function to determine ownership status, and provides a layer of abstraction between controllers and repositories by encapsulating business logic related to offer permissions.

- **userPermissions.js:** This service module defines permissions for listing users and updating user status based on user roles, adhering to the structure where roles determine access levels within the application. It encapsulates business logic and serves as an intermediary between controllers and repositories, providing a clean abstraction layer for managing user-related operations.


### 4. `GeoLink_Logistics.model`

- **Offer.js:**  This model defines the structure and constraints for offers in the application, including geographical location, price, title, description, images, and user information, and maps to the MongoDB collection with timestamps.

- **User.js:** This model defines the structure and constraints for user accounts in the application, including name, email, password, photo URL, role, and active status, and maps to the MongoDB collection with timestamps.
  
### 5. `GeoLink_Logistics.repository`

- **Repository Interfaces:** The repository package houses interfaces that facilitate database interactions using MongoDB and Mongoose, providing methods for fundamental CRUD operations for the Breadcrumbs GeoLink_Logistics application.


### Dependencies


1. **React.js:**
   - Purpose: A JavaScript library for building user interfaces, particularly single-page applications. 

  
2 **Supercluster:**
   - Purpose: A JavaScript library for fast geospatial indexing and clustering of spatial data.
   - Description: Supercluster offers efficient algorithms for clustering large sets of spatial data, enhancing performance and scalability in mapping applications.

 3. **Material UI5 (MUI5):**
   - Purpose: A user interface library for building responsive web applications with modern design principles.
   - Description: MUI5 provides a set of reusable UI components based on Google's Material Design guidelines, facilitating the development of visually appealing and consistent user interfaces.

 4. **Node.js:**
   - Purpose: A JavaScript runtime built on Chrome's V8 JavaScript engine for server-side applications.
   - Description: Node.js allows the execution of JavaScript code outside a web browser, enabling the development of scalable and high-performance server-side applications.

5. **Express.js:**
   - Purpose: A minimalist web application framework for Node.js.
   - Description: Express.js simplifies the process of building web applications and APIs with Node.js by providing a robust set of features for routing, middleware, and HTTP request handling.

6. **MongoDB:**
   - Purpose: A NoSQL document database for storing and retrieving data in JSON-like documents.
   - Description: MongoDB offers flexibility and scalability for managing structured and unstructured data, making it suitable for a wide range of use cases, including real-time analytics, content management, and mobile applications.

7. **Mongoose:**
   - Purpose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
   - Description: Mongoose simplifies interactions with MongoDB databases by providing a schema-based solution for modeling application data, enforcing data validation, and defining query interfaces.

 8.**Firebase Storage:**
   - Purpose: A cloud storage solution provided by Google Firebase for storing user-generated content.
   - Description: Firebase Storage offers scalable and secure file storage for web and mobile applications, allowing developers to upload and download files easily while leveraging Firebase's authentication and security features.

 9.**Mapbox:**
   - Purpose: A mapping platform for building custom maps and location-based applications.
   - Description: Mapbox provides APIs and SDKs for integrating interactive maps, geocoding, and navigation features into web and mobile applications, offering customization options and real-time data visualization capabilities.

10. **React-Map-GL:**
   - Purpose: A React component library for creating interactive maps using Mapbox GL JS.
   - Description: React-Map-GL simplifies the integration of Mapbox GL JS functionality into React applications, enabling developers to build dynamic and responsive mapping experiences with React components.

11. **Global Context Provider:**
    - Purpose: A pattern or mechanism for managing global state and sharing data across components in a React application.
    - Description: The Global Context Provider pattern allows centralized management of application state, reducing prop drilling and providing a convenient way to share data and functionality across components without the need for prop passing at every level.


12. **RESTful APIs:** Enable efficient communication between the front-end and the back-end using REST architectural principles, providing web services for exchanging data and functionalities in a flexible manner.
  
13. **Maven:** Is a project management and build tool that streamlines the development process by automating tasks such as compilation, dependency management, and deployment.
