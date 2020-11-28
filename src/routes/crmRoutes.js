import { addNewContact, getContacts, getContactByID, upateContact, deleteContact } from '../controllers/crmController'

const routes = (app) => {
  app
    .route("/contact")
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request from: ${req.method}`);
        next();
    }, getContacts)

    .post(addNewContact);

  app
    .route("/contact/:contactID")

    .get(getContactByID)

    .put(upateContact)

    .delete(deleteContact);
};


export default routes;
