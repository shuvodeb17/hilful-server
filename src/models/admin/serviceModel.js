const { model, Schema } = require("mongoose");

const serviceSchema = new Schema(
  {
    postName: {
      type: String,
      required: true,
    },
    postShortName: {
      type: String,
      required: true,
    },
    serviceName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: Array,
      required: true,
    },
    
  },
  { timestamps: true }
);

const serviceModel = model("service", serviceSchema);

module.exports = serviceModel;
