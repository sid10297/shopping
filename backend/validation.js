const Joi = require("joi");

const registerValidation = (data) => {
  const userValidationSchema = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).email().required(),
    password: Joi.string().min(6).required(),
  });

  return userValidationSchema.validate(data);
};

const loginValidation = (data) => {
  const loginValidationSchema = Joi.object({
    //   name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).email().required(),
    password: Joi.string().min(6).required(),
  });

  return loginValidationSchema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
