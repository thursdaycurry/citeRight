const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div
      className='fixed z-20 inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full'
      height
      onClick={onClose}
    >
      <div
        className='relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 border w-2/4 max-h-[80vh] overflow-y-auto shadow-lg rounded-md bg-white'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-end'>
          <button
            type='button'
            onClick={onClose}
            className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
            data-modal-toggle='defaultModal'
          >
            <svg
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.293 7.293a1 1 0 011.414 0L10 7.586l.293-.293a1 1 0 011.414 1.414L11.414 9l.293.293a1 1 0 01-1.414 1.414L10 10.414l-.293.293a1 1 0 01-1.414-1.414L8.586 9l-.293-.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
        <img
          src={process.env.PUBLIC_URL + '/image/citeright_tutorial.gif'}
          alt='Animated content'
        />
        <ol>
          <li>1. Upload</li>
          <li>2. Label it!</li>
          <li>3. Download</li>
        </ol>
      </div>
    </div>
  );
};
export default Modal;
