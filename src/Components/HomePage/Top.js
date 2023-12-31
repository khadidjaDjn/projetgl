import './top.css'
import LawyerCard from '../LawyerCard';

import { useState } from 'react';

const TOP = () => {
    
    return ( 
        <div className='topLaywers'>
            <h1>top lawyers</h1>
            <div className='cards'  >
                <LawyerCard></LawyerCard>
                <LawyerCard></LawyerCard>
                <LawyerCard></LawyerCard>
                
                
            </div>
            <div className='left' > &lt;</div>
            <div className='right'>&gt;</div>
        </div>
     );
}
 
export default TOP;





