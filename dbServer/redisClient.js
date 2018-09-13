const redis = require("redis"),
    client = redis.createClient();

const bluebird = require("bluebird");

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

client.on("error", function (err) {
    console.log("Error " + err);
});


module.exports = client;