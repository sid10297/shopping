const Joi = require("joi");

const registerValidation = (data) => {
  const userValidationSchema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().min(3).email().required(),
    password: Joi.string().min(3).required(),
    role: Joi.string().required().default("BASIC"),
  });

  return userValidationSchema.validate(data);
};

const loginValidation = (data) => {
  const loginValidationSchema = Joi.object({
    email: Joi.string().min(3).email().required(),
    password: Joi.string().min(3).required(),
  });

  return loginValidationSchema.validate(data);
};

const productValidation = (data) => {
  const productValidationSchema = Joi.object({
    title: Joi.string().max(255).required(),
    description: Joi.string().min(3).max(1024).required(),
    price: Joi.number().min(10).max(100000).required(),
    quantity: Joi.number().min(1).required(),
    image: Joi.string(),
  });

  return productValidationSchema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.productValidation = productValidation;
