const Footer = () => {
  return (
    <footer className='bg-gray-100 mt-10 p-4 text-center text-sm text-gray-600'>
      <div className='container mx-auto'>
        <div>
          &copy; {new Date().getFullYear()} CiteR!ght. All rights reserved.
        </div>
        <div>Developed by Thursdaycurry</div>
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
      </div>
    </footer>
  );
};

export default Footer;
