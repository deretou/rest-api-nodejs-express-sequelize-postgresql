import model from '../models';
import uuidv4 from 'uuid/v4';
import moment from 'moment';

const {
    ProductCategory,
    Product
} = model;


class Products {
     /**
      * Create
      * @param {object} req 
      * @param {object} res
      * @returns {object} product object 
      */
    static createProduct(req, res) {
         const {
             name,
             description,
             categoryID,
             unitPrice,
             quantityInStock
         } = req.body;
        const expireDate = moment(new Date());        
        const productID = uuidv4();
         if (!req.file) {
             return res.status(500).send({
                 'message': 'The image file is not defined',
                 err
             });

         }
         const pictureType = req.file.mimetype;
         const pictureName = req.file.originalname;
         const pictureData = req.file.buffer;
        return Product
            .create({
                productID,
                name,
                expireDate,
                categoryID,
                unitPrice,
                description,
                quantityInStock,
                pictureType,
                pictureName,
                pictureData
            })
            .then(productData => res.status(201).send({
                success: true,
                message: 'Healthbot successfully created',
                id: productData.productID
            }))
    }

    /**
     * Get product
     * @param {object} req 
     * @param {object} res
     * @returns {object} product object 
     */
    static getProduct(req, res) {

        return Product
            .findOne({
                where: {
                    uuid: req.params.productid
                }
            })
            .then((productData) => res.status(200).send({
                success: true,
                product: productData
            }))
    }


    /**
     * Create
     * @param {object} req 
     * @param {object} res
     * @returns {object} productcategory object 
     */
    static createCategory(req, res) {
        const {
            name,
            description,           
            observation
        } = req.body;
        const categoryCreationDate = moment(new Date());        
        const uuid = uuidv4();        
        if (!req.file) {          
             return res.status(500).send({
                 'message': 'The image file is not defined',
                 err
             });
            
        }
        const pictureType = req.file.mimetype;
        const pictureName = req.file.originalname;
        const pictureData = req.file.buffer;
        return ProductCategory
            .create({
                uuid,
                name,
                categoryCreationDate,
                description,
                pictureType,
                pictureName,
                pictureData,
                observation
            })
            .then(productCatData => res.status(201).send({
                success: true,
                message: 'Product Category successfully created',
                id: productCatData.uuid
            }))
    }

    /**
     * GetList
     * @param {object} req 
     * @param {object} res
     * @returns {object} productcategory object 
     */
    static categoryList(req, res) {
       
        return ProductCategory
            .findAll()
            .then(productCats => res.status(200).send(productCats))
    }

     /**
      * Update
      * @param {object} req 
      * @param {object} res
      * @returns {object} productcategory object 
      */
     static updateCategoryImage(req, res) {
            const pictureType = req.file.mimetype;
            const pictureName = req.file.originalname;
            const pictureData = req.file.buffer;
         return ProductCategory
             .update({
                       
                         pictureType: pictureType,
                         pictureName: pictureName,
                         pictureData: pictureData
                     }, 
                     {
                        where: {
                            uuid: req.params.categoryid
                          }
                     }
             )
             .then((productCat) => res.status(200).send({
                 success: true,
                 message: 'Product Category successfully created',
                 id: productCatData.uuid
             }))
     }
}

export default Products;