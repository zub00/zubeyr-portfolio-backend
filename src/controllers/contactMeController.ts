import { Request, Response } from 'express';
import Contact from '../models/Contacts'; // Ensure the Contact model is correctly implemented

export const getAllContacts = async (req: Request, res: Response) => {
  try {
    const contacts = await Contact.findAll();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
};

export const createContact = async (req: Request, res: Response) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create contact' });
  }
};
