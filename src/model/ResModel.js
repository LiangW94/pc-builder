/**
 * @description response data model
 */

class BassModel {
  constructor({ errno, data, message }) {
    this.errno = errno;
    if (data) {
      this.data = data;
    }
    if (message) {
      this.message = message;
    }
  }
}

class SuccessModel extends BassModel {
  constructor(data = {}) {
    super({
      errno: 0,
      data
    });
  }
}

class ErrorModel extends BassModel {
  constructor({ errno, message }) {
    super({
      errno,
      message
    });
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
};
