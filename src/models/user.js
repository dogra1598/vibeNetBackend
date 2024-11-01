import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  password: {
    type: String,
    required: true,
    min: [8, "password must be atleast 8 characters long"],
    max: [16, "passowrd can't be longer than 16 characters"],
    validate: {
      validator: function (value) {
        return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(
          value
        );
      },
      message: (props) => `${props.value} does not meet the requirements!`,
    },
  },
});

const User = mongoose.model("User", userSchema);

export default User;
