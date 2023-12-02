const { execSync } = require('child_process');

module.exports = async (req, res) => {
    try {
        // Jalankan perintah directus start
        execSync('npx directus start', { stdio: 'inherit' });
        res.status(200).send('Directus started successfully.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error starting Directus.');
    }
};
