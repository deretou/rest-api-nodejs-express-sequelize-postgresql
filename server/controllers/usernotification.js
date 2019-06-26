import model from '../models';
import uuidv4 from 'uuid/v4';

const {
    UserNotification
} = model;

class UserNotifications {
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
            .then(notifData => res.status(201).send({
                success: true,
                message: 'Notification successfully created',
                notifData
            }))
    }
}

export default UserNotifications;