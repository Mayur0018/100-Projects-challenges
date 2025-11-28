const getContact = (req, res) => {
  res.status(200).json({ mesagge: "Get Contact" });
}

module.exports = {getContact};