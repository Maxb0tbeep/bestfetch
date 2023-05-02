const distro = require('@nexssp/os/legacy').name()
const os = require('os');

var uptime = Math.floor(os.uptime());
if (uptime > 86400){
    uptime = Math.floor(uptime / 86400) + "d";
}
else if(uptime > 3600){
    uptime = Math.floor(uptime / 3600) + "h";
}
else if(uptime > 60){
    uptime = Math.floor(uptime / 60) + "m";
}
else{
    uptime = uptime + "s"
}




const full = `
distro: ${distro}
host: ${os.hostname()}
arch: ${os.arch()}
kernel: ${os.type()}
uptime: ${uptime}
`;
console.log(full)