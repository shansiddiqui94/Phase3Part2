const db = require("../db");
const dish = require("../models/Dish");
const country = require("../models/Country");

db.on("error", console.error.bind(console, "MongoDB Connection Error!"));

const main = async () => {
  const location1 = await new country({
    name: "Italy",
  });
  location1.save();

  const location2 = await new country({
    name: "Pakistan",
  });
  location2.save();

  const location3 = await new country({
    name: "Morocco",
  });
  location3.save();

  const location4 = await new country({
    name: "Yemen",
  });
  location4.save();

  const dish = [{
      title:"Italian Lamb Stew",
      ingrediants:"lamb, onions, carrots, celery, potatoes, peas, white wine",
      linkfoto:"https://photos.bigoven.com/recipe/hero/italian-lamb-stew.jpg?h=500&w=500"
  }, {}, {}, {}];
};
