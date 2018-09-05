const cfnTags = require('..');

cfnTags((err, cfndata) => {
  if (err) {
    throw err;
  }

  console.log(cfndata);
});
