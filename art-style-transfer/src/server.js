// const express = require('express');
// const { exec } = require('child_process');

// const app = express();

// app.post('/run-scripts', (req, res) => {
//     const scripts = ['frame.py', 'img_color.py', 'reframe.py', 'delf.py'];
//     const executeNextScript = (index) => {
//         if (index >= scripts.length) {
//             res.json({ message: 'All scripts executed successfully' });
//             return;
//         }

//         exec(`python ${scripts[index]}`, (error, stdout, stderr) => {
//             if (error) {
//                 res.status(500).json({ error: error.message });
//                 return;
//             }

//             console.log(`${scripts[index]} output: ${stdout}`);
//             console.error(`${scripts[index]} errors: ${stderr}`);

//             // Execute the next script recursively
//             executeNextScript(index + 1);
//         });
//     };

//     // Start executing the first script
//     executeNextScript(0);
// });

// app.listen(3001, () => {
//     console.log('Server is running on port 3001');
// });
