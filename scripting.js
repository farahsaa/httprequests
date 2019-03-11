var https = require('https');


function getAndPrintHTMLChunks () {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
    };
  
    https.get(requestOptions, function (response) {
       
        response.setEncoding('utf8');

        response.on('data', function (data) {
            console.log('data',data,'\n' );
        
        response.on('end', function() ) {
            console.log('Data has been recieved!');
        }

  });

}

getAndPrintHTMLCHUNCKS ();






































var https = require('https');

function getAndPrintHTMLCHUNCKS(){
    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step1.html'
      };

      https.get(requestOptions, function (response){
         
        response.setEncoding('utf8');

        response.on('data', function (data) {
            console.log(data + "\n");
          });
        response.on('end', function() {
            console.log('Response stream complete.');
          });

      });
    }

    getAndPrintHTMLCHUNCKS();