import joi from "joi";

export const ValidateRestaurantCity = (restaurantObject) => {
  const Schema = joi.object({
    city: joi().string().required(),
  });

  return Schema.validateAsync(restaurantObject);
};

export const ValidateSearchString = (restaurantObject) => {
  const Schema = joi.object({
    searchString: joi().string().required(),
  });

  return Schema.validateAsync(restaurantObject);
};