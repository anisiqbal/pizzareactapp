import React from 'react';
import '../assets/css/cart.css';

function Cart() {
    return(
        <div>
            <div className = "cart">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12">
                            <h3>Cart</h3>
                        </div>

                        <div className="col-md-12">
                            <div className="row main">

                                <div className="col-md-2">
                                    <p>#</p>
                                </div>

                                <div className="col-md-3">
                                    <h6>PRODUCT</h6>
                                </div>

                                <div className="col-md-2">
                                    <h6>PRICE</h6>
                                </div>

                                <div className="col-md-3">
                                    <h6>QUANTITY</h6>
                                </div>

                                <div className="col-md-2">
                                    <h6>TOTAL   </h6>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="row second">

                                <div className="col-md-2">
                                    <a href="#">X</a>
                                </div>

                                <div className="col-md-3">
                                    <h6>Chicken Tikka Supreme</h6>
                                </div>

                                <div className="col-md-2">
                                    <h6>3</h6>
                                </div>

                                <div className="col-md-3">
                                    <input type="number" id="quantity" name="quantity" min="1" max="5"/>
                                </div>

                                <div className="col-md-2">
                                   <h6>3</h6>
                                </div>

                            </div>
                        </div>

                        <hr/>
                               
                        



                        

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cart;