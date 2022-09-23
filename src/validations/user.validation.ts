import Joi from "joi";
import { SignupData } from "../types";

export default (data: SignupData) => {
  const schema = Joi.object({
    full_name: Joi.string()
      .required()
      .error(new Error("full name is required")),
    email: Joi.string()
      .email()
      .required()
      .error(new Error("valid email is required")),
    password: Joi.string().allow("").min(8).required(),
  });

  const result = schema.validate(data);
  if (result.error) {
    return result.error.message;
  } else {
    return null;
  }
};
