import joi from "joi";

// export const validRequiredString = (string) => {
//   const Schema = joi.object({
//     string: joi.string().required(),
//   });

//   return Schema.validateAsync(string);
// };

export const validateId = (id) => {
  const Schema = joi.object({
    _id: joi.string().required(),
  });

  return Schema.validateAsync(id);
};

export const validateCategory = (category) => {
  const Schema = joi.object({
    category: joi.string().required(),
  });

  return Schema.validateAsync(id);
};