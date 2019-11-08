const http= require("http")

const server = http.createServer()


server.on("request",(request,response)=>{
    console.log("收到客户端发出的请求了，请求路径为"+request.url)

    response.end("534645")
})

server.listen(3030,function(){
    console.log("服务器请求成功http://127.0.0.1:3030访问")
})