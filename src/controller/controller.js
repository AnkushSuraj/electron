const path = require('path');
const fs = require('fs');
const JavaScriptObfuscator = require('javascript-obfuscator');


const apiResponse = async (req, res) => {
    try {
        const dirPath = path.dirname(__filename);
        const scriptFile = path.join(dirPath, '../script/script.js');
        const scriptText = fs.readFileSync(scriptFile, 'utf8');

        const scriptResult = JavaScriptObfuscator.obfuscate(scriptText)

        let response = {
            "status": 1,
            "message": "Tracking url trigger",
            "status_code": 200,
            "data": scriptResult._obfuscatedCode
        }

        return response


    } catch (error) {
        res.status(401).send(error)
    }
}


module.exports = {
    apiResponse
}