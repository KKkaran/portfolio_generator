const generatePage1 = (fname,github)=> {
    console.log(fname,github)
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${fname}'s Website</title>
        <style>
            body{
                background:cadetblue
            }
        </style>
    </head>
    <body>
        <h1>${fname}</h1>
        <p>This is the link to my repo: <a href="https://github.com/${github}"><strong>${github}</strong></a></p>
    </body>
    </html>
        `;
    }

module.exports = {generatehtml : generatePage1}