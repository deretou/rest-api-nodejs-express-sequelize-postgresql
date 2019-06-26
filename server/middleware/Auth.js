import jwt from 'jsonwebtoken';
import model from '../models';

const dotenv = require('dotenv');

dotenv.config();


const {User} = model;

class Auth  {
    /**
     * Verify Token
     * @param {object} req 
     * @param {object} res 
     * @param {object} next
     * @returns {object|void} response object 
     */
    static verifyToken(req, res, next) {
        const token = req.headers['x-access-token'];          
        if (!token) {
            return res.status(400).send({
                'message': 'Token is not provided'
            });
        }
         try {
            const decoded =  jwt.verify(token, process.env.SECRET);   
              
            if (!decoded) {
                  return res.status(400).send({
                      'message': 'The token you provided is invalid'
                  });
              }

             return User
                 .findOne({
                     where: {
                         uuid: decoded.userId
                     }
                 })
                 .then(userData => {

                     if (!userData) {
                         return res.status(400).send({
                             'message': 'The token you provided is invalid'
                         });
                     }

                     req.user = {
                         id: decoded.userId
                     };

                     next();

                 }).catch(error => res.status(400).send({
                     message: 'There is an error in the request',
                     error
                 }));

             } catch (error) {
                 return res.status(400).send({
                     'message': 'The token you provided is invalid',
                      error
                 });
             }                 
      
    }
}

export default Auth;