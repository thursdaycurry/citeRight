import { useState } from 'react';
import FeedbackModal from './Feedback';

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <footer className='bg-gray-100 mt-10 p-4 text-center text-sm text-gray-600'>
      <div className='container mx-auto'>
        <div>
          &copy; {new Date().getFullYear()} CiteR!ght. All rights reserved.
        </div>
        <div className='my-1'>Developed by Thursdaycurry</div>

        {/* Links */}
        <div className='inline-flex'>
          User voice {': '}
          <a
            href='https://open.kakao.com/o/sum0n4Uf'
            data-show-count='false'
            className='ml-1.5'
          >
            <img
              className='w-5 h-5'
              src={process.env.PUBLIC_URL + '/logo-kakao.jpg'}
              alt='Kakao'
            />
          </a>
          <a
            href='https://twitter.com/thursdaycurry?ref_src=twsrc%5Etfw'
            data-show-count='false'
            className='ml-1.5'
          >
            <img
              className='w-4 h-4'
              src={process.env.PUBLIC_URL + '/logo-x.png'}
              alt='Twitter'
            />
          </a>
          <script
            async
            src='https://platform.twitter.com/widgets.js'
            charset='utf-8'
          ></script>
        </div>

        {/* Feedback modal */}
        <div className='my-1'>
          <button
            className='px-4 py-1 text-white bg-gray-500 rounded hover:bg-gray-700'
            onClick={() => setModalOpen(true)}
          >
            Open Feedback
          </button>
          <FeedbackModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
