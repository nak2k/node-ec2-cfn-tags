var cfnTags = require('..');

cfnTags(function(err, cfndata) {
  if (err) {
    throw err;
  }

  console.log(cfndata);
});
