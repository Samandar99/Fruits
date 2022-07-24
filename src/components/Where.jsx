import React from 'react';
import '../styles/where.css'
import dala from '../img/dala.png'
const Where = () => {
    return (
        <div className='W-wrap'>
            <div className='W-left'>
               <img src={dala} alt="" />
            </div>
            <div className='W-right'>
             <i className='eco'>Eco Friendly</i>
             <h6 className='Fromour'>From our Farm</h6>
             <h6 className='Fromour'>To Your Home.</h6>
             <p className='choose'>Choose Your Products</p>
             <p className='have'>In our listing, we have several collections of organic products. This is the place where you need to choose the product you want.</p>
            
             <p className='choose'>Choose Your Products</p>
             <p className='have'>In our listing, we have several collections of organic products. This is the place where you need to choose the product you want.</p>
            
             <p className='choose'>Choose Your Products</p>
             <p className='have'>In our listing, we have several collections of organic products. This is the place where you need to choose the product you want.</p>
            
            </div>
        
        
        </div>
    );
};

export default Where;