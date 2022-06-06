const axios = require("axios");
const Print = require("./config/Print");
const urls = require("./config/urls");
const encode = require("nodejs-base64-encode");

const print = new Print(false);

const Token = async (conf, environment = "sandbox", auth_type = "Basic") => {
  if (conf == null || conf == undefined) {
    throw new Error("!! CONSUMER_KEY && CONSUMER_SECRET Required");
  }
  let url = urls[environment].Authorization;
  print.mess(url);
  let key = encode.encode(
    conf.CONSUMER_KEY + ":" + conf.CONSUMER_SECRET,
    "base64"
  );
  let res = await axios({
    method: "GET",
    url: url,
    headers: {
      Authorization: `${auth_type} ${key}$`,
    },
  });
  return res.data;
};

module.exports = Token;
