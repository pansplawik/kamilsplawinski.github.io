import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ fontFamily: 'monospace' ,textAlign:'left',fontSize:19}}>
        &copy;{new Date().getFullYear()} Copyright: {'Kamil Spławiński'}
      </div>
    </MDBFooter>
  );
}