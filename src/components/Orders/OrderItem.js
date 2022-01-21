import React from 'react';
import "./order.css";
import {Link} from "react-router-dom"

const OrderItem = (props) => {

    const data = {
        "shippingInfo": {
            "address": "Pune",
            "city": "Pune",
            "state": "Maharashtra",
            "country": "India",
            "pinCode": "411038",
            "phoneNo": "7875594848"
        },
        "paymentInfo": {
            "id": "paymentId",
            "status": "paid"
        },
        "_id": "61ea5cccb5fe137eef56e218",
        "itemPrice": "300",
        "taxPrice": "20",
        "shippingPrice": "20",
        "totalPrice": "340",
        "orderStatus": "Payment Done",
        "orderItems": [
            {
                "product": "61d54971152ed535cd205600",
                "name": "Condom",
                "price": "400",
                "image": "image",
                "quantity": "1",
                "_id": "61ea5cccb5fe137eef56e219"
            }
        ],
        "user": "61e91462bcf7ad909625792c",
        "paidAt": "2022-01-21T07:12:12.384Z",
        "createdAt": "2022-01-21T07:12:12.389Z",
        "__v": 0
    }

    const { shippingInfo, paymentInfo, itemPrice, _id, createdAt, paidAt, orderItems, orderStatus, totalPrice, shippingPrice, taxPrice } = props.order;

    return (
        <>
            <div className="orderContainer">
                <div className={`card-header orderContainer-header`}>
                    <div>Order Status: {orderStatus}</div>
                    <div>Order Date: {String(createdAt).substr(0, 10)}</div>
                </div>
                <div className="orderInfoContainer">
                    <div className="orderInfoContainer">
                        {orderItems.map((order, index) => (
                            <>
                                <div className="orders">
                                    <div className="orders-left">
                                        {/* Product Image: {order.image} */}
                                        <img src={order.image} alt="" />
                                    </div>
                                    <div className="orders-right">
                                        Product Id: {order.product}<br />
                                        Product Name: {order.name}<br />
                                        Product Price: {order.price}<br />
                                        Product Quantity: {order.quantity}<br />
                                    </div>
                                </div>
                            </>
                        ))}
                        {/* <Link to={`${_id}`} className="btn-sm my-2 btn-primary" role="button">Order Info</Link> */}
                        <Link to={`${_id}`} ><button className='btn-sm btn-primary my-2'>OrderInfo</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default OrderItem;
