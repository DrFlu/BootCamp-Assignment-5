//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://flu:rockband2@ds021034.mlab.com:21034/assignment3', //place the URI of your mongo database here.
  }, 
  googleMaps: {
    key: 'AIzaSyCQVNvKJs7WPC8soWWdt53kTDRd2V_Fhls'
  },
  port: 8080
};