 import Healthbots from '../controllers/healthbot';
 import Users from '../controllers/user';
 import Products from '../controllers/product';
 import Inventories from '../controllers/inventory';
 import Auth from '../middleware/Auth';
 import uploadMem from '../middleware/memoryStorage';

 export default (app) => {

     app.get('/api', (req, res) => res.status(200).send({
         message: 'Welcome to the CORE API!',
     }));

     //************** HEALTHBOTS ******************** */

     app.post('/api/healthbots', Auth.verifyToken, Healthbots.create); // API route for creating a healthbot
     app.get('/api/healthbot/inventory/:healthbotname', Auth.verifyToken, Healthbots.inventory); // API route for getting healthbot inventory

    
     //************** USERS ******************** */

     app.post('/api/users', Users.create); // API route for user to signup
     app.post('/api/users/login', Users.login); // API route for user to signup login
     app.post('/api/notifications', Auth.verifyToken, Users.addNotification); // API route for creating a notification

    
     //************** PRODUTCS ******************** */

     app.post('/api/products', Auth.verifyToken, uploadMem.single("file"), Products.createProduct); // API route for user to create a new product
     app.get('/api/products/:productid', Products.getProduct); // API route for user to get a product
     app.put('/api/products/update/:productid', Auth.verifyToken, Products.updateProduct); // API route for user to update a product
     app.post('/api/product/category', Auth.verifyToken, uploadMem.single("file"), Products.createCategory); // API route for user to create a new product category
     app.get('/api/product/category/list', Products.categoryList); // API route for user to get the list of product category
     app.put('/api/product/category/:categoryid/image', Auth.verifyToken, uploadMem.single("file"), Products.updateCategoryImage); // API route for user to update a product category image
     
   
     //************** INVENTORIES ******************** */

    app.post('/api/inventories', Auth.verifyToken, Inventories.create); // API route for creating an Inventory


 };