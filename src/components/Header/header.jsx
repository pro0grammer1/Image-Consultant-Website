import { useState } from 'react';
import { Link } from "react-router-dom";
import xmark from './../../assets/xmark.svg';
import bar from './../../assets/lines.svg';
import settings from './../../components/config.jsx'

function Header() {
  const links = [{ text: "Home", link: './' }, { text: "About", link: './about' }, { text: "Contact", link: './contact' }, { text: "Blogs", link: blog_address }];
  const linkRender = Array.from(links).map((item, index) => { return (<Link key={index} to={item.link} className="m-4 hover:drop-shadow-[0.2em_0.3em_5px_#000]">{item.text}</Link>) })
  const small_linkRender = Array.from(links).map((item, index) => { return (<li id={index} key={index}><Link to={item.link} className="m-4 hover:drop-shadow-[0.2em_0.3em_5px_#000]">{item.text}</Link></li>) })
  const [isOpen, setIsOpen] = useState(false);
  function grey_click(e) {
    if (e.target == document.getElementById('whitespace') || e.target == document.getElementById('list_parent') || Number.isInteger(parseInt(e.target.id))) return;
    setIsOpen(prev => false)
  }

  return (
    <>
      {/** Navigation model for large devices */}
      <nav id='med+' className='hidden md:flex justify-between w-full h-10 bg-gray-300'>
        <div className='mt-auto mb-auto ml-20 flex'><img className='mr-2' alt='Logo' src='./logo.png'></img><span>Fatema Image Consultancy</span></div>
        <div className='mt-auto mb-auto mr-20'>{linkRender}</div>
      </nav>

      {/** Navigation model for small devices */}
      <nav id='small' className='md:hidden flex  w-full h-10 bg-gray-300'>
        <div></div>
        <div className='mt-auto ml-5 grow justify-center mb-auto flex'><img className='mr-2' alt='Logo' src='./logo.png'></img><span className='hidden vsm:block'>Fatema Image Consultancy</span><span className='vsm:hidden'>Fatema Consultant</span></div>
        <div className='mt-auto mb-auto mr-4'>
          <img src={bar} onClick={() => setIsOpen(prev => true)} className='w-5 h-5'></img>
          <div onClick={grey_click} className={`fixed top-0 right-0 w-screen h-screen bg-black/50 duration-500 ${isOpen ? '' : 'invisible bg-black/0'}`}>
            <div id="whitespace" className={`fixed right-0 top-0 ${isOpen ? '' : 'translate-x-48'} w-[10.75rem] h-screen bg-white duration-500 ease-out`}>
              <ul id="list_parent" className='mt-9 text-center'>{small_linkRender}</ul>
              <img src={xmark} className='absolute top-2 w-5 h-5'></img>
            </div>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Header
