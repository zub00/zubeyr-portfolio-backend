import express from "express";
import {
  handleContactFormSubmission,
  getContacts,
  getContactById,
  updateContact,
  deleteContact
} from "../controllers/contactMeController";

const router = express.Router();

/**
 * @openapi
 * /api/contact:
 *   post:
 *     summary: Create a new contact
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contacts'
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contacts'
 *       '500':
 *         description: Internal Server Error
 */

router.post("/contacts", handleContactFormSubmission);

/**
 * @openapi
 * /api/contact:
 *   get:
 *     summary: Get all contacts
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contacts'
 *       '500':
 *         description: Internal Server Error
 */

router.get("/contacts", getContacts);
/**
 * @openapi
 * /api/contact/{id}:
 *   get:
 *     summary: Get a contact by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the contact to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 *       '404':
 *         description: Profile not found
 *       '500':
 *         description: Internal Server Error
 */
router.get("/contacts/:id", getContactById);

/**
 * @openapi
 * /api/contact/{id}:
 *   put:
 *     summary: Update a contact by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the contact to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 *       '500':
 *         description: Internal Server Error
 */
router.put("/contacts/:id", updateContact);

/**
 * @openapi
 * /api/contact/{id}:
 *   delete:
 *     summary: Delete a contact by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the contact to delete
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: No Content
 *       '500':
 *         description: Internal Server Error
 */
router.delete("/contacts/:id", deleteContact);

export default router;
