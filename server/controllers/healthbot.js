import model from '../models';
import uuidv4 from 'uuid/v4';
import moment from 'moment';

const {
    Healthbot,
    Inventory
} = model;

class Healthbots {
     /**
      * Create
      * @param {object} req 
      * @param {object} res
      * @returns {object} healtbot object 
      */
    static create(req, res) {
        const {           
            name,
            location,
            serialnumber, status
        } = req.body;
          const installdate = moment(new Date());
          const timestamp = moment(installdate).unix();
          const codeid = uuidv4();
        return Healthbot
            .create({
                codeid,
                name,
                location,
                serialnumber,
                installdate,
                timestamp,
                status
            })
            .then(healthbotData => res.status(201).send({
                success: true,
                message: 'Healthbot successfully created',
                id: healthbotData.codeid
            })).catch(error => res.status(400).send({
                message: 'There is an error in the request',
                error
            }));
    }

    /**
     * Get inventory
     * @param {object} req 
     * @param {object} res
     * @returns {object} I object 
     */
    static inventory(req, res) {
        
        const name = req.params.categoryid;
        return Healthbot
            .findOne({
                where: {
                    name: name
                }
            })
            .then(healthbotData => {
                 if (!healthbotData) {
                     return res.status(400).send({
                         'message': 'The healthbot name you provided is invalid'
                     });
                 }
                
                
              return Inventory
                  .findOne({
                      where: {
                          healthbotId: healthbotData.id
                      }
                  })
                  .then(inventoryData => {

                      if (!inventoryData) {
                          return res.status(400).send({
                              message: 'Inventory not found',
                          });
                      }


                      return res.status(200).send({
                         healthbotInventory: inventoryData
                      })
                  })
                  .catch(error => res.status(400).send({
                      message: 'There is an error in the request',
                      error
                  }));


              
             
          }
            ).catch(error => res.status(400).send({
                message: 'There is an error in the request',
                error
            }));
    }
}

export default Healthbots;