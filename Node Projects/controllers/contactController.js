const getContacts = (req, res) => {
  res.status(200).json({ mesagge: "Get Contact" });
};

const getContact = (req, res) => {
  res.status(200).json({ mesagge: `Get Contact for ${req.params.id}` });
};

const CreateContact = (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All Fields are mandotory!");
  }
  res.status(200).json({ mesagge: "Create A Contact" });
};

const updateContact = (req, res) => {
  res.status(200).json({ mesagge: `Update Contact for ${req.params.id}` });
};

const deleteContact = (req, res) => {
  res.status(200).json({ mesagge: `Delete Contact for ${req.params.id}` });
};
module.exports = {
  getContacts,
  getContact,
  CreateContact,
  updateContact,
  deleteContact,
};
