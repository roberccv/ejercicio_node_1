const http = require('http');
const port = 3000;
const os = require('os');
const process = require('process');
const fs = require('fs');

console.log("Información del Sistema:");
console.log(`Sistema Operativo: ${os.type()} ${os.release()} (${os.platform()})`);
console.log(`Arquitectura de CPU: ${os.arch()}`);
console.log(`Versión de Node.js: ${process.version}\n`);

// Coge el intervalo del tiempo del archivo config.json
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
const interval = config.interval * 1000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, World!</h1>');
});

server.listen(port, () => {
console.log(`Server running at port ${port}`);
});
function getNodeUptime() {
    return process.uptime();
  }

  function showPeriodicInfo() {
    const cpuUsage = process.cpuUsage(); 
    const memoryUsage = process.memoryUsage();
    const systemUptime = os.uptime(); 
  
    console.log('Información periódica:');
    console.log(`Uso de CPU: User: ${(cpuUsage.user / 1000).toFixed(2)} ms, System: ${(cpuUsage.system / 1000).toFixed(2)} ms`);
    console.log(`Uso de Memoria: ${(memoryUsage.rss / (1024 * 1024)).toFixed(2)} MB (RSS)`);
    console.log(`Tiempo que el sistema lleva activo: ${(systemUptime / 60).toFixed(2)} minutos`);
    console.log(`Tiempo que lleva ejecutándose Node.js: ${(getNodeUptime() / 60).toFixed(2)} minutos\n`);
  }
  
  setInterval(showPeriodicInfo, interval);
