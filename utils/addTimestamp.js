// Utility function to add a timestamp to a string
function addTimestamp(input) {
    const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, '');
    return `${input}_${timestamp}`;
}

// Exporting the function for reuse
module.exports = { addTimestamp };
