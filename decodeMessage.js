const axios = require('axios');

async function decodeSecretMessage(url) {
    try {
        // Fetch the data from the Google Doc URL
        const response = await axios.get(url);
        const data = response.data;

        // Parse the data to extract characters and their positions
        const lines = data.split('\n');
        const grid = new Map();

        let maxX = 0;
        let maxY = 0;

        for (const line of lines) {
            // Assuming the format is "x-coordinate | Character | y-coordinate"
            const parts = line.split('|').map(part => part.trim());
            if (parts.length === 3) {
                const x = parseInt(parts[0], 10);
                const char = parts[1];
                const y = parseInt(parts[2], 10);
                grid.set(`${x},${y}`, char);

                // Update the maximum x and y values to determine grid size
                if (x > maxX) maxX = x;
                if (y > maxY) maxY = y;
            }
        }

        // Construct and print the grid
        for (let y = 0; y <= maxY; y++) {
            let row = '';
            for (let x = 0; x <= maxX; x++) {
                const key = `${x},${y}`;
                row += grid.has(key) ? grid.get(key) : ' ';
            }
            console.log(row);
        }
    } catch (error) {
        console.error('Error fetching or processing the data:', error);
    }
}

// Example usage:
const googleDocUrl = 'https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub';
decodeSecretMessage(googleDocUrl);