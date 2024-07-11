import { Request, Response } from "express";
import Contact from "../models/Contacts";

export const handleContactFormSubmission = async (req: Request, res: Response) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).send(contact);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("Unknown error");
    }
  }
};

export const getContacts = async (req: Request, res: Response) => {
  try {
    const contacts = await Contact.findAll();
    res.send(contacts);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("Unknown error");
    }
  }
};

export const getContactById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findOne({ where: { id } });
    if (!contact) {
      return res.status(404).send("Contact not found");
    }
    res.send(contact);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("Unknown error");
    }
  }
};

export const updateContact = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [updated] = await Contact.update(req.body, { where: { id } });
    if (updated) {
      const updatedContact = await Contact.findOne({ where: { id } });
      res.status(200).send(updatedContact);
    } else {
      throw new Error("Contact not found");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("Unknown error");
    }
  }
};

export const deleteContact = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Contact.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send("Contact deleted");
    } else {
      throw new Error("Contact not found");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("Unknown error");
    }
  }
};
