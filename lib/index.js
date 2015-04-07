var instance = require("ec2-instance-data");

module.exports = cfnTags;

function cfnTags(callback) {
  instance.init(function(err, data) {
    if (err) {
      return callback(err);
    }

    instance.initTags(function(err, tags) {
      if (err) {
        return callback(err);
      }

      callback(null, {
        stackId: tags['aws:cloudformation:stack-id'],
        stackName: tags['aws:cloudformation:stack-name'],
        logicalId: tags['aws:cloudformation:logical-id'],
      });
    });
  });
}
