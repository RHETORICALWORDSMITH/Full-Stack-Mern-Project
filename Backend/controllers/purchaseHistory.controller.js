import purchaseHistory from "../models/purchaseHistory.model.js";

const getPurchaseHistory = async (req, res) => {
  try {
    const history = req.body;

    // Sort the history array by dateTime
    const sortedHistory = [...history].sort((a, b) => new Date(a.date) - new Date(b.date));
    console.log(sortedHistory);
    await purchaseHistory.insertMany(sortedHistory); 


    res.status(200).send({ message: 'Purchase history updated successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Failed to save purchase history.' });
  }
};

export default getPurchaseHistory;

