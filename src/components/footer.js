import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ fontFamily: 'monospace' ,color:'white' ,textAlign:'left',fontSize:19}}>
        &copy; {new Date().getFullYear()} Copyright:{'Kamil Spławiński'}
      </div>
    </MDBFooter>
  );
}