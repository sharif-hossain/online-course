import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Course.css";

const Course = (props) => {
    console.log(props);
    const {img,title,author,price,} = props.product;
    return (
        <div className="product">
            <div>
                <img className="course-img" src={img} alt=""/>
            </div>
            <div className="course-detail">
              <h1 className="product-name">{title}</h1>
              <br/>
              <p><small>Instructor : {author}</small></p>
              <h3>${price}</h3>
              <br/>
            
              <button onClick={()=>props.handleAddCourse(props.product)}  type="button" class="btn btn-success"> <FontAwesomeIcon icon={faShoppingCart} /> Enroll Now</button>
            </div>
        </div>
    );
};
 
export default Course;