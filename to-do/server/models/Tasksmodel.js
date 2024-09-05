const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {
      type: "string",
      required: true,
    },
    type: {
      type: "string",
    },
    description: {
      type: "string",
    },
    dueDate: { type: "string" },
    status: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
