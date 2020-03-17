const seq = require('./sequelize');
require('./model/index');

seq
  .authenticate()
  .then(() => {
    console.log('auth ok');
  })
  .catch(() => {
    console.log('auth error');
  });

seq.sync({ force: true }).then(() => {
  console.log('sync ok');
  process.exit();
});
