import model from '../models';
import Helper from './Helper';
import uuidv4 from 'uuid/v4';

const {User} = model;

class Users {
    /**
     * Create
     * @param {object} req 
     * @param {object} res
     * @returns {object} user object 
     */
    static create(req, res) {
        const {
            firstname,
            lastname,
            username,
            email
        } = req.body;

        if (!req.body.email || !req.body.password) {
            return res.status(400).send({
                message: 'Some values are missing'
            });
        }

        if (!Helper.isValidEmail(req.body.email)) {
            return res.status(400).send({
                message: 'Please enter a valid email address'
            });
        }

        const uuid = uuidv4();
        const password = Helper.hashPassword(req.body.password);
    
        return User
            .create({
                uuid,
                firstname,
                lastname,
                username,
                email,
                password
            })
            .then(userData => res.status(201).send({
                success: true,
                message: 'User successfully created',
                userData
            }))
    }

    /**
     * Login
     * @param {object} req 
     * @param {object} res
     * @returns {object} user object 
     */

    static login(req, res) {
        const {
            email,
            password
        } = req.body;
    // console.log(email);
      return User
          .findOne({where:{email:email}})
          .then(userData => {
                     
                     if(!userData){
                       return res.status(400).send({
                           message: 'User Not Found',
                       });
                     }

                     if (!Helper.comparePassword(userData.password, password)) {
                         return res.status(400).send({
                             message: 'The credentials you provided is incorrect',
                         });
                     }

                     const token = Helper.generateToken(userData.uuid);

                     return res.status(200).send({                          
                          token: token
                      })
                  }
          )
          .catch(error => res.status(400).send({
              message: 'There is an error in the request',
              error
          }));

    }
}

export default Users;