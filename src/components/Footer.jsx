const Footer = () => {
  return (
    <footer className='bg-gray-100 mt-10 p-4 text-center text-sm text-gray-600'>
      <div className='container mx-auto'>
        <p>&copy; {new Date().getFullYear()} CiteR!ght. All rights reserved.</p>
        <p>Developed by Thursdaycurry</p>
        <p>
          User voice {'-> '}
          <a
            href='https://open.kakao.com/o/sum0n4Uf'
            class='font-medium text-blue-600 dark:text-blue-500 hover:underline'
          >
            Chat
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
