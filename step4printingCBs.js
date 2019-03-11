var https= require('https');
function getHTML (options, callback) {
    var recieved = ''
    https.get(options, function (response){
         
        response.setEncoding('utf8');
        
        response.on('data', function (data) {
            recieved+=data
          });
        response.on('end', function() {
            console.log('Response stream complete.');
            callback(recieved);
          });

      });
    
    
  }
  

  function printHTML (html) {
    console.log(html);
  }
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };


  getHTML (requestOptions, printHTML);