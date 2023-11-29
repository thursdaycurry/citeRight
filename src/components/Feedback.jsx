import React, { useState } from 'react';

const StarRating = ({ count, value, onChange }) => {
  return (
    <div>
      {Array.from({ length: count }, (_, i) => i + 1).map((idx) => (
        <span
          key={idx}
          className={`cursor-pointer ${
            idx <= value ? 'text-yellow-500' : 'text-gray-300'
          }`}
          onClick={() => onChange(idx)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const FeedbackModal = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formId = process.env.REACT_APP_FORMID;
    const formEntryRating = process.env.REACT_APP_FORMENTRYRATING;
    const formEntryComment = process.env.REACT_APP_FORMENTRYCOMMENT;
    const googleFormUrl = `https://docs.google.com/forms/d/e/${formId}/formResponse`;

    const formData = new FormData();
    formData.append(formEntryRating, rating);
    formData.append(formEntryComment, comment);

    try {
      await fetch(googleFormUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Necessary to avoid CORS error
      });

      // The response is opaque due to 'no-cors', so we can't check if it was successful
      console.log('Form submitted');
      onClose(); // Close the modal
    } catch (error) {
      console.error('Submission error', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full'>
      <div className='relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white'>
        <div className='mt-3 text-center'>
          <h3 className='text-lg leading-6 font-medium text-gray-900'>
            Feedback
          </h3>
          <div className='mt-2 px-7 py-3'>
            <StarRating
              count={5}
              value={rating}
              onChange={(value) => setRating(value)}
            />
            <textarea
              className='mt-1 p-2 w-full rounded-md border'
              rows='4'
              placeholder='Leave a comment...'
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <div className='items-center px-4 py-3'>
            <button
              className='px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300'
              onClick={handleSubmit}
            >
              Open Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
