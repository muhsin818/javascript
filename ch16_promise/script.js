let myPromise = new Promise(function (resolve, reject) {
  let success = true;

  if (success) {
    resolve("Promise was successful!");
  } else {
    reject("Promise failed!");
  }
});

myPromise
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });
