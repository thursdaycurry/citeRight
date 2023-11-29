import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import Modal from './Modal';
import Footer from './Footer';

function Labeler() {
  const [imageSrc, setImageSrc] = useState(
    'https://via.placeholder.com/400x300'
  );

  // Modal
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const [label, setLabel] = useState('');
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
    <div className='container mx-auto p-6'>
      <div className='bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4'>
        <section>
          <h1 class='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
            CiteR!ght
          </h1>
          <p class='mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
            "CiteR!ght, the seamless solution for adding precise text labels to
            your images with just a few clicks!"
            {'  '}
            {/* Tutorial Button */}
            <button
              onClick={openModal}
              className='text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1.5 py-1 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'
            >
              Tutorial
            </button>
            <Modal show={showModal} onClose={closeModal} />
          </p>
        </section>

        <main className='flex'>
          {/* Left Section */}
          <div className='w-3/4 pr-4 border-r-2 border-gray-300'>
            <div className='items-center'>
              {/* Image Container */}
              <div className='image-container pb-3 mb-4 px-2'>
                <img
                  src={imageSrc}
                  alt='default'
                  className='image-placeholder max-w-full max-w-30 h-auto border border-gray-300'
                />
                {labelVisible && <div className='italic text-xs'>{label}</div>}
              </div>

              {/* Processing Container */}
              <div className='flex flex-col'>
                {/* Upload Stage */}
                <div className='pb-4'>
                  <input
                    type='file'
                    id='file-upload'
                    name='file-upload'
                    onChange={loadImage}
                    className='block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-lime-50 file:text-lime-700
                    hover:file:bg-lime-100
                '
                  />
                </div>

                {/* Labeling Stage */}
                <div className='pb-2'>
                  <input
                    type='text'
                    placeholder='Enter label text'
                    className='border border-gray-300 p-2 mb-2 w-3/5 '
                    onChange={(e) => setLabel(e.target.value)}
                  />
                  <button
                    onClick={putLabel}
                    className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 w-auto'
                  >
                    <span class='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                      Put Labeling
                    </span>
                  </button>
                </div>

                {/* Download Stage */}

                <button
                  type='button'
                  onClick={downloadLabeledImage}
                  class='text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
                >
                  Download Labeled Image
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Upload History */}
          <div className='w-1/4 pl-4'>
            <h4 className='text-lg font-bold mb-2'>Upload History</h4>
            <div className='bg-gray-100 p-2 rounded shadow'>
              {/* History Content */}
              <div>Coming soon</div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Labeler;
