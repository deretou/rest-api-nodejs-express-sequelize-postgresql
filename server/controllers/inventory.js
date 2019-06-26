import model from '../models';
import moment from 'moment';

const {
    Inventory
} = model;

class Inventories {
    /**
     * Create
     * @param {object} req 
     * @param {object} res
     * @returns {object} Inventory object 
     */
    static create(req, res) {
        const {
            productID,
            healthbotId,
            selectionID,
            quantityInStock
        } = req.body;
        const settingDate = moment(new Date());           
        return Inventory
            .create({
                productID,
                healthbotId,
                settingDate,
                selectionID,
                installdate,
                quantityInStock
            })
            .then(inventoryData => res.status(201).send({
                success: true,
                message: 'Healthbot successfully created',
                inventoryData
            }))
    }
}

export default Inventories;