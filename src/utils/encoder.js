const request = require('request').defaults({ encoding: null });

const encodeImageFromURL = (url) =>
  new Promise((res, rej) => {
    try {
      request.get(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          data =
            'data:' +
            response.headers['content-type'] +
            ';base64,' +
            Buffer.from(body).toString('base64');
          res(data);
        }
      });
    } catch (error) {
      rej(error);
    }
  });

const encodeImage = (image) => {
  const encodedImage =
    'data:' + 'image/jpeg' + ';base64,' + Buffer.from(image).toString('base64');
  return encodedImage;
};

module.exports = { encodeImageFromURL, encodeImage };
