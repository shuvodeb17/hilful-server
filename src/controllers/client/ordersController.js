const ordersModel = require("../../models/client/ordersModel");

const ordersPost = async (req, res) => {
  const { name, email, phone, message, service } = req.body;
  try {
    const orders = await ordersModel.create({
      name,
      email,
      phone,
      message,
      service,
    });
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: "Orders created successfully",
      orders,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const ordersGet = async (req, res) => {
  try {
    const result = await ordersModel.find({});
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: "Orders data fetched successfully",
      orders: result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { ordersPost, ordersGet };
