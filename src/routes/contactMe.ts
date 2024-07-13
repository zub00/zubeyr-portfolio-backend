import express from "express";
import {
  createContact,
  getAllContacts,
} from "../controllers/contactMeController";

const router = express.Router();

/**
 * @openapi
 * /api/contacts:
 *   post:
 *     summary: Create a new contact
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 *       '500':
 *         description: Internal Server Error
 */

router.post("/contacts", createContact);

/**
 * @openapi
 * /api/contacts:
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
 *                 $ref: '#/components/schemas/Contact'
 *       '500':
 *         description: Internal Server Error
 */

router.get("/contacts", getAllContacts);

export default router;
