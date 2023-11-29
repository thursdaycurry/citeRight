import React, { useState } from 'react';
import html2canvas from 'html2canvas';

function Labeler() {
  const [imageSrc, setImageSrc] = useState(
    'https://via.placeholder.com/400x300'
  );
  const [label, setLabel] = useState('Sketch of Albrecht Dürer');
  const [labelVisible, setLabelVisible] = useState(false);

  const loadImage = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setImageSrc(url);
  };

  const putLabel = () => {
    setLabelVisible(true);
  };

  const downloadLabeledImage = () => {
    const imageContainer = document.querySelector('.image-container');
    html2canvas(imageContainer).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'labeled-image.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  };

  return (
    <div className='container mx-auto p-6 bg-gray-100'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <section>
          <h1>CiteR!ght</h1>
          <h3>Image Labeler</h3>
        </section>
        <main className='flex'>
          {/* Left Section */}
          <div className='w-3/4 pr-4 border-r-2 border-gray-300'>
            <div className='items-center'>
              <div className='image-container pb-3 mb-4 px-2'>
                <img
                  src={imageSrc}
                  alt='Upload an image'
                  className='border border-gray-300'
                />
                {labelVisible && <div className='text-xs'>{label}</div>}
              </div>

              <input type='file' className='mb-2' onChange={loadImage} />
              <input
                type='text'
                placeholder='Enter label text'
                className='border border-gray-300 p-2 mb-2'
                onChange={(e) => setLabel(e.target.value)}
              />
              <button
                onClick={putLabel}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2'
              >
                Put Labeling
              </button>
              <button
                onClick={downloadLabeledImage}
                className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
              >
                Download Labeled Image
              </button>
            </div>
          </div>

          {/* Right Section - Upload History */}
          <div className='w-1/4 pl-4'>
            <h4 className='text-lg font-bold mb-2'>Upload History</h4>
            <div className='bg-gray-100 p-2 rounded shadow'>
              {/* History Content */}
              <div>History items will be displayed here</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Labeler;
