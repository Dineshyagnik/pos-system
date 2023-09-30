import React, { useState } from 'react';
import { AiFillCloseCircle, AiOutlinePlus } from 'react-icons/ai';
import { GrFormSubtract } from 'react-icons/gr';

const Cart = ({ cartItems }) => {

    const [show, setShow] = useState(false);

    const openModal = () => {
        setShow(true);
    };

    const closeModal = () => {
        setShow(false);
    };

    const handleClick = () => {
        window.location.reload();
    }
    return (
        <>
            <nav>
                <div className='nav-item'>
                    <h5>Products</h5>
                </div>
                <div className='nav-item'>
                    <h5>Price</h5>
                </div>
                <div className='nav-item'>
                    <h5 className='quant'>Quantity</h5>
                </div>
                <div className='nav-item'>
                    <h5>Total</h5>
                </div>
            </nav>

            {cartItems.length === 0 ? (
                <div className='message'>
                    <p>There are no products</p>
                </div>
            ) : (
                <div className='product-added'>
                    {cartItems.map((item) => (
                        <div key={item.id} className='cart-item'>
                            <div className='removebtn'>
                                <AiFillCloseCircle />
                            </div>
                            <div className='product-details'>
                                <p>{item.name}</p>
                            </div>
                            <div className='price-details'>
                                <p>₹{item.price}</p>
                            </div>
                            <div className='product-quan'>
                                <p>
                                    <button><GrFormSubtract /></button>
                                    &nbsp;{item.quantity} &nbsp;
                                    <button ><AiOutlinePlus /></button>
                                </p>
                            </div>
                            <div className='product-total'>
                                <p>₹{(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div className='pricing-table'>
                <table>
                    <tr>
                        <th>SubTotal</th>
                        <td>₹0.000</td>
                        <td>0items</td>
                    </tr>
                    <tr>
                        <th>VATtax</th>
                        <td>10%</td>
                        <td>₹0.000</td>
                    </tr>
                    <tr>
                        <th>Discount</th>
                        <td>10%</td>
                        <td>₹0.000</td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td className='color'>0.000EUR</td>
                        <td>&nbsp;</td>
                    </tr>
                </table>
                <div className='btn'>
                    <button onClick={handleClick} className='btn1'>Cancel Sale</button>
                    <button className='btn2' onClick={openModal}>Process Sale</button>
                </div>
            </div>
            {
                show ? (

                    <div className='modal'>
                        <div className='modal-head'>
                            <h3>Receipt</h3>
                        </div>
                        <div className='modal-content'>
                            <p>Sale No.:00101</p>

                            <div className='modal-detail'>
                                <p>
                                    Date:01-18-2023 12:03:14
                                </p>
                                <table>
                                    <tr>
                                        <thead>#</thead>
                                        <thead>Products</thead>
                                        <thead>Quantity</thead>
                                        <thead>SubTotal</thead>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Sweater</td>
                                        <td>2</td>
                                        <td>₹799</td>
                                    </tr>
                                </table>
                                <table>
                                    <tr>
                                        <thead>Total Item</thead>
                                        <thead>2 Total</thead>
                                        <thead>₹799</thead>
                                    </tr>
                                    <tr>
                                        <td>&nbsp;</td>
                                        <td>Discount</td>
                                        <td>10%</td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp;</td>
                                        <td>VAT</td>
                                        <td>10%</td>
                                    </tr>
                                </table>
                                <button onClick={closeModal}>Close</button>
                            </div>
                        </div>
                    </div>
                ) : null
            }



        </>
    )
}

export default Cart;