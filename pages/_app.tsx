import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
//import noti from "./noti";
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MyApp({ Component, pageProps }: AppProps) {
  type Props = {
    moveTo: (position: google.maps.LatLngLiteral) => void;
  };

    const notify = () => {
      const max = Math.floor(Math.random() * Math.floor(10000));
        toast("If you shopped here everyday, over the course of a year you would spend around " + max+  " dollars")
    }
  
    
  
  
  return (
    <>
      <div>
          <button onClick={notify}> Spending Calculator </button>
          <ToastContainer />
      </div>
      <Head>
        <title>Businesses Nearby</title>
      </Head>
      <Component {...pageProps} />
      
    </>
  );
}

export default MyApp;
