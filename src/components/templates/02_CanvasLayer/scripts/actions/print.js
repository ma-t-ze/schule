// screenshot.js

// Helper function to adjust the contrast of a canvas
function adjustContrast(context, width, height, contrast) {
    const imageData = context.getImageData(0, 0, width, height);
    const data = imageData.data;

    const factor = (259 * (contrast + 255)) / (255 * (259 - contrast));

    for (let i = 0; i < data.length; i += 4) {
        data[i] = factor * (data[i] - 128) + 128; // Red
        data[i + 1] = factor * (data[i + 1] - 128) + 128; // Green
        data[i + 2] = factor * (data[i + 2] - 128) + 128; // Blue
    }

    context.putImageData(imageData, 0, 0);
}

export async function captureAndPrintScreenshot(imgContainerRef, logoRef, canvas, html2canvas) {
    try {
        // Capture the entire content of the container
        const contentCanvas = await html2canvas(imgContainerRef, { scale: 1 });

        // Create a new canvas element for combining images
        const combinedCanvas = document.createElement('canvas');
        const context = combinedCanvas.getContext('2d');

        // Set the combined canvas dimensions to match the content canvas
        combinedCanvas.width = contentCanvas.width;
        combinedCanvas.height = contentCanvas.height - 600;

        // Draw the captured content onto the combined canvas
        context.drawImage(contentCanvas, 0, 0);

        const screenshotCanvas = await html2canvas(canvas, { useCORS: true, allowTaint: true, backgroundColor: null, scale: 1 });
        context.drawImage(screenshotCanvas, 0, 0);

        // Capture the logo and draw it on top of the other layers
        const logoCanvas = await html2canvas(logoRef, { backgroundColor: null });
        const logoWidth = logoCanvas.width*1.2;
        const logoHeight = logoCanvas.height*1.2;
        // const logoX = (combinedCanvas.width - logoWidth) / 5; // Center the logo horizontally
        const logoX = 700;
        const logoY = 120; // Position the logo at the top

        context.drawImage(logoCanvas, logoX, logoY, logoWidth, logoHeight);

        // Adjust the contrast of the combined canvas
        // adjustContrast(context, combinedCanvas.width, combinedCanvas.height, 15);

        const quality = 0.8; // Adjust the quality between 0 and 1
        const imageData = combinedCanvas.toDataURL('image/jpeg', quality);

        // Create an iframe for printing
        const iframe = document.createElement('iframe');
        iframe.style.position = 'fixed';
        iframe.style.width = '0';
        iframe.style.height = '0';
        iframe.style.border = 'none';

        document.body.appendChild(iframe);

        const doc = iframe.contentWindow.document;

        doc.open();
        doc.write(`
              <html>
              <head>
                  <style>
                      @media print {
                          img {
                              height: 100vh;
                              width: auto;
                              object-fit: cover;
                          }
                          @page {
                            size: 127mm 178mm landscape;
                            margin: 0;
                          }
                          body {
                              margin: 0;
                              display: flex;
                              justify-content: center;
                              align-items: center;
                              height: 100vh;
                          }
                      }
                  </style>
              </head>
              <body>
                  <img src="${imageData}" />
              </body>
              </html>
          `);
        doc.close();

        // Wait for the image to load before printing
        iframe.onload = () => {
            iframe.contentWindow.focus();
            iframe.contentWindow.print();
            document.body.removeChild(iframe);
        };


    } catch (error) {
        console.error('Error capturing or downloading screenshot:', error);
        // Handle error as needed (e.g., display error message)
    }
}
