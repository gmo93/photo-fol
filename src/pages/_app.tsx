import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {useEffect, useState} from 'react'
import NavBar from './components/NavBar';
import Menu from './components/Menu';

export default function App({ Component, pageProps }: AppProps) {
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollTop(window.scrollY);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
  // const [scrollTop, setScrollTop] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollTop(window.scrollY);
  //     console.log(scrollTop);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // });

  return <Component 
  {...pageProps} />
}
