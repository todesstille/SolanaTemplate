const { spawn } = require('child_process');

function nameToPath(name) {
    return "./programs/" + name + "/target/deploy/" + name + ".so";
}

async function deployProgram(name) {
    const deploy = spawn('solana', ['program', 'deploy', nameToPath(name) ]);
    
    let data = await new Promise( (resolve, reject) => {
        deploy.stdout.on('data', (data) => resolve(data));
        deploy.stderr.on('data', (err) => {
            reject(err.toString());
        });
    });
    
    data = data.toString().split('Program Id: ');

    if (data.length != 2) {
        throw new Error("Invalid deploy output");
    }
    
    return data[1];
}

module.exports = {
    deployProgram
}