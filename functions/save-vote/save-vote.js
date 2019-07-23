const cfg = require("../../src/resources/constants");
const contentful = require("contentful-management");
const dig = require("object-dig");

exports.handler = async (event, context) => {
  let payload = JSON.parse(event.body);

  let client = contentful.createClient({
    accessToken: process.env["CONTENTFUL_MANAGEMENT_TOKEN"]
  });

  return await client
    .getSpace(cfg.CONTENTFUL_SPACE_ID)
    .then(space => space.getEnvironment("master"))
    .then(env => env.getEntry(payload.contentful_id))
    .then(entry => {
      let n = parseInt(dig(entry, "fields", "votes", "en-US")) || 0;
      let count = payload.action == "add" ? n + 1 : n - 1;
      let data = {};
      data["en-US"] = count < 0 ? 0 : count;
      entry.fields.votes = data;
      return entry.update();
    })
    .then(entry => {
      return entry.publish();
    })
    .then(entry => {
      return { statusCode: 200, body: JSON.stringify(payload) };
    })
    .catch(console.error);
};
