var https = require('https')

function getAndPrintHTML (options) {

    var recieved = ''
    https.get(options, function (response){
         
        response.setEncoding('utf8');
        
        response.on('data', function (data) {
            console.log(recieved+=data);
          });
        response.on('end', function() {
            console.log('Response stream complete.');
          });

      });
    
    console.log(recieved);
    }

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  }
  
  getAndPrintHTML(requestOptions);