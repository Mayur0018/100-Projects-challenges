const aysncHandler = require("express-async-handler");
const contactModel = require("../models/contactModel");
const getContacts = aysncHandler(async (req, res) => {
  const contacts = await contactModel.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

const getContact = aysncHandler(async (req, res) => {
  const contact = await contactModel.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  res.status(200).json(contact);
});

const CreateContact = aysncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All Fields are mandotory!");
  }

  const contact = await contactModel.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });
  res.status(200).json(contact);
});

const updateContact = aysncHandler(async (req, res) => {
  const Contact = await contactModel.findById(req.params.id);
  if (!Contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  if (Contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error(
      "User don't have permisions to update others user contacts"
    );
  }
  const updateContact = await contactModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updateContact);
});

const deleteContact = aysncHandler(async (req, res) => {
  const contact = await contactModel.findById(req.params.id);
  if (!contact) {
    req.status(400);
    throw new Error("Contact Not Found");
  }
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error(
      "User don't have permisions to update others user contacts"
    );
  }
  await contactModel.deleteOne();
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  getContact,
  CreateContact,
  updateContact,
  deleteContact,
};
