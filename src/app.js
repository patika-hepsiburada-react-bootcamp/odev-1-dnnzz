import getData from "./lib/service.js";

(async () => {
  const data = await getData(3);
  console.log(data);
})();
