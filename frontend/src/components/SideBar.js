import React,{useState} from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Typography,Button } from '@material-ui/core';
import { useDispatch , useSelector} from 'react-redux';
import { LinkContainer } from "react-router-bootstrap";
import {Link } from 'react-router-dom';


const SideBar=(_id,name,mrp,rating,discountPrice,category,subcategory) => {
    const[filter1,setFilter1]= useState("")
    const[filter2,setFilter2]= useState("")
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList)
    const { loading, error, products, pages, page } = productList

    
   /*
    const applyFilters =() => {
        if(filter1===products.category){
            dispatch({
                item:{
                    id:_id,
                    name:name,
                    mrp:mrp,
                    category:category,
                    subcategory:subcategory,
                    DicountPrice:discountPrice,
                },
            })
        }
    }
    */
    
  return (
    <Menu>
        <div className="filter">
            <div className="filter-result">
              <h1>Filter Products</h1>
            </div>
            <div className="filter-sort">
                Order{" "}
                <select
                value={filter1}
                onChange={(e) => setFilter1(e)
                }
                >
                    <option value="latest">Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
            </select>
            </div>
            <br />
            <div className="filter-size">
              Price Range {" "}
                <select
                    value={filter2}
                    onChange={(e) =>setFilter2(e)
                    }
                >
                    <option value="">ALL</option>
                    <option value="0-1000">0-1000</option>
                    <option value="100-2000">100-2000</option>
                    <option value="2000-3000">2000-3000</option>
                    <option value="3000-4000">3000-4000</option>
                    <option value="4000-5000">4000-5000</option>
                </select>
            </div>
            <br />
            <div className="filter-size">
              Sizes {" "}
                <select
                    value={filter2}
                    onChange={(e) =>setFilter2(e)
                    }
                >
                    <option value="">ALL</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
            <br />
            <div className="filter-size">
               Category{" "}
                <select
                    value={filter2}
                    onChange={(e) =>setFilter2(e)
                    }
                >
                    <option value="">ALL</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
            <br />
                <Button 
                variant="contained"
                color="secondary"
                //onClick={applyFilters}
                >
                    <Link to={`/filtered`}>
                        Apply
                    </Link>

                </Button>
                
      </div>
    </Menu>
  );
};

export default SideBar;