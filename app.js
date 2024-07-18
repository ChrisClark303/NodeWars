const http = require("http");
const querystring = require("node:querystring");
const narcissisticRequestHandler = require("./Narcissistic Numbers/requestHandler.js");

const server = http.createServer((req, res) => {
  var qs = req.url.split("?")[1];
  const query = querystring.parse(qs);

  const result = narcissisticRequestHandler(query);
  // const number = query.number;
  // if (number === undefined) {
  //   return "";
  // }
  // const numIsNarcissistic = isNarcissistic(number);

  // const result =
  //   number + " is " + (numIsNarcissistic ? "" : "not ") + "narcissistic.";

  console.log(result);
  res.end(result);
});

server.listen(5002, () => {
  console.log("Server listening at port 5002");
});
