"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const zomato = (0, _express.default)();
zomato.use(_express.default.json);
zomato.get("/", (req, res) => {
  res.json({
    message: "Server running on port 4000"
  });
});
const PORT = 4000;
zomato.listen(PORT, () => {
  console.log("Server running on port 4000!!!");
});