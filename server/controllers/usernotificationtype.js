import model from '../models';
import uuidv4 from 'uuid/v4';


const {
    UserNotificationType
} = model;

class UserNotificationTypes {
    static create(req, res) {
        const {        
            name,
            description
        } = req.body;
          const uuid = uuidv4();
        return UserNotificationType
            .create({                
                name,
                uuid,
                description
            })
            .then(notifTypeData => res.status(201).send({
                success: true,
                message: 'Notification type successfully created',
                notifTypeData
            }))
    }
}

export default UserNotificationTypes;