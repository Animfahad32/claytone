import React from 'react';
import Fade from 'react-reveal/Fade';
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';
import icon3 from '../../images/icon3.png';
import icon4 from '../../images/icon4.png';
import './Support.css';

const Support = () => {
    return (
       
        <div className="padding-support">
           <div className="container">
           <div className="row">
           <Fade bottom>
                <div className="col-md-3 mt-3">
                    <div className="card card-support">
                            <div className="row no-gutters">
                                <div className="col-auto">
                                    <img src={icon1} className="img-fluid" alt=""/>
                                </div>
                                <div className="col items-style" >
                                    <div className="card-block">
                                        <h4 className="card-title">24/7 <br /> SUPPORT</h4>
                                        
                                    
                                    </div>
                                </div>
                            </div>
                     </div>
                </div>
                <div className="col-md-3 mt-3">
                    <div className="card card-support">
                            <div className="row no-gutters">
                                <div className="col-auto">
                                    <img src={icon2} className="img-fluid" alt=""/>
                                </div>
                                <div className="col items-style" >
                                    <div className="card-block">
                                        <h4 className="card-title">QUICK SHIPPING</h4>
                                        
                                    
                                    </div>
                                </div>
                            </div>
                     </div>
                </div>
                <div className="col-md-3 mt-3">
                    <div className="card card-support">
                            <div className="row no-gutters">
                                <div className="col-auto">
                                    <img src={icon3} className="img-fluid" alt=""/>
                                </div>
                                <div className="col items-style" >
                                    <div className="card-block">
                                        <h4 className="card-title">SECURE PAYMENT</h4>
                                        
                                    
                                    </div>
                                </div>
                            </div>
                     </div>
                </div>
                <div className="col-md-3 mt-3">
                    <div className="card card-support">
                            <div className="row no-gutters">
                                <div className="col-auto">
                                    <img src={icon4} className="img-fluid" alt=""/>
                                </div>
                                <div className="col items-style" >
                                    <div className="card-block">
                                        <h4 className="card-title">SPECIAL OFFERS</h4>
                                        
                                    
                                    </div>
                                </div>
                            </div>
                     </div>
                </div>
                </Fade>
            </div>
           </div>
        </div>
        
    );
};

export default Support;