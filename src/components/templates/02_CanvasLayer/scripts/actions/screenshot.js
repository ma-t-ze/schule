// screenshot.js

export async function captureAndDownloadScreenshot(imgContainerRef, logoRef, canvas, html2canvas) {
    try {
        // Capture the entire content of the container
        const contentCanvas = await html2canvas(imgContainerRef, { scale: 1 });

        // Create a new canvas element for combining images
        const combinedCanvas = document.createElement('canvas');
        const context = combinedCanvas.getContext('2d');

        // Set the combined canvas dimensions to match the content canvas
        combinedCanvas.width = contentCanvas.width;
        combinedCanvas.height = contentCanvas.height - 700;

        // Draw the captured content onto the combined canvas
        context.drawImage(contentCanvas, 0, 0);

        const screenshotCanvas = await html2canvas(canvas, { useCORS: true, allowTaint: true, backgroundColor: null, scale: 1  });
        context.drawImage(screenshotCanvas, 0, 0);

        // Capture the logo and draw it on top of the other layers
        const logoCanvas = await html2canvas(logoRef, { backgroundColor: null });
        const logoWidth = logoCanvas.width*0.4;
        const logoHeight = logoCanvas.height*0.4;
        // const logoX = (combinedCanvas.width - logoWidth) / 5; // Center the logo horizontally
        const logoX = 120;
        const logoY = 120; // Position the logo at the top

        context.drawImage(logoCanvas, logoX, logoY, logoWidth, logoHeight);

        // Convert combined canvas to base64 image data with compression
        const quality = 0.8; // Adjust the quality between 0 and 1
        const imageData = combinedCanvas.toDataURL('image/jpeg', quality);

        // Create a download link element and trigger download
        const downloadLink = document.createElement('a');
        downloadLink.href = imageData;
        downloadLink.download = 'combinedScreenshot.jpg'; // Set filename here

        downloadLink.click();
    } catch (error) {
        console.error('Error capturing or downloading screenshot:', error);
        // Handle error as needed (e.g., display error message)
    }
}
