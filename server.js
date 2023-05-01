const http = require("http");
const fs = require('fs')
const PORT = 3000;

const server = http.createServer((req, res) =>{

  const handleHtmlFile = (statusCode, filePath)=>{
  fs.readFile(filePath, (err, data)=>{
    res.writeHead(statusCode, {"Content-Type":"text/html"});
    res.write(data);
    res.end();
  })
}

  if(req.url === '/'){
    handleHtmlFile(200, "./public/index.html")
  }

  else if(req.url === '/about'){
    handleHtmlFile(200, "./public/about.html")
  }

  else if(req.url === '/contact'){
    handleHtmlFile(200, "./public/contact.html")
  }

  else {
    handleHtmlFile(404, "./public/404.html")
  }

})

server.listen(PORT, ()=>{
  console.log(`Server is running...`)
})