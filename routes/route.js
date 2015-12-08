'use strict';

exports.setRoutes = function(app){

  app.use('/', require('./routers/index'));
  app.use('/data', require('./routers/data'));

};
