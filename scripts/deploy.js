const { spawn } = require('child_process');

async function deployProgram(pathToProgram) {
    const deploy = spawn('solana', ['program', 'deploy', pathToProgram ]);
    
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