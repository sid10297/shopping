const Joi = require("joi");
const { BASIC } = require("./Constants");

// Middleware to validate user while registering
const registerValidation = (data) => {
  // Create JOI object with required field and validation
  const userValidationSchema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().min(3).email().required(),
    password: Joi.string().min(3).required(),
    role: Joi.string().default(BASIC),
  });

  // Return schema by validating it which can be used as middleware in for the API's
  return userValidationSchema.validate(data);
};

// Validate user while logging in
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
    quantityAvailable: Joi.number().min(1).required(),
    image: Joi.string(),
  });

  return productValidationSchema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.productValidation = productValidation;
