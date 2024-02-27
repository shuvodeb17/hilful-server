const formidable = require("formidable");
const serviceModel = require("../../models/admin/serviceModel");
const { CLOUD_NAME, API_KEY, API_SECRET } = require("../../secret");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
  secure: true,
});

const addService = async (req, res) => {
  const form = new formidable.IncomingForm({ multiples: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Error parsing form data:", err);
      return res.status(500).json({ error: "Error parsing form data" });
    }

    try {
      const { name, shortName, service, message } = fields;
      const postName = name[0];
      const postShortName = shortName[0];
      const serviceName = service[0];
      const description = message[0];
      const image = files.image[0].filepath;

      console.log("Received form data:", {
        postName,
        postShortName,
        serviceName,
        description,
        image,
      });

      const imageUpload = await cloudinary.uploader.upload(image, {
        folder: "serviceImage",
      });
      console.log("Image uploaded to Cloudinary:", imageUpload);

      const services = await serviceModel.create({
        postName,
        postShortName,
        serviceName,
        description,
        image: imageUpload.secure_url,
      });

      res.status(200).json({
        statusCode: 200,
        message: "Data received successfully",
        services,
      });
    } catch (error) {
      res.status(404).json({
        statusCode: 404,
        message: error.message,
      });
    }
  });
};

const getServices = async (req, res) => {
  try {
    const serviceData = await serviceModel.find({});
    res.status(200).json({
      statusCode: 200,
      message: "service data fetched successful",
      services: serviceData,
    });
  } catch (error) {
    res.status(404).json({
      statusCode: 404,
      message: error.message,
    });
  }
};

module.exports = { addService, getServices };
