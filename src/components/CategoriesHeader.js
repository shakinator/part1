import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import SearchBox from "./SearchBox";
import '../index.css';
import SideBar from "./SideBar";
import { useState } from "react";
import ReactTooltip from "react-tooltip";
import { Menu, MenuItem, Typography } from "@material-ui/core";

import NestedMenuItem from "material-ui-nested-menu-item";



const CategoriesHeader = () => {
    //clothing
  const [menuPosition, setMenuPosition] = useState(null);

  const handleRightClick = (event: React.MouseEvent) => {
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX
    });
  };
  const handleItemClick = (event: React.MouseEvent) => {
    setMenuPosition(null);
  };
  //footwear
  const [menuPosition1, setMenuPosition1] = useState(null);

  const handleRightClick1 = (event: React.MouseEvent) => {
    if (menuPosition1) {
      return;
    }
    event.preventDefault();
    setMenuPosition1({
      top: event.pageY,
      left: event.pageX
    });
  };
  const handleItemClick1 = (event: React.MouseEvent) => {
    setMenuPosition1(null);
  };
  // Accecories
  const [menuPosition2, setMenuPosition2] = useState(null);

  const handleRightClick2 = (event: React.MouseEvent) => {
    if (menuPosition2) {
      return;
    }
    event.preventDefault();
    setMenuPosition2({
      top: event.pageY,
      left: event.pageX
    });
  };
  const handleItemClick2 = (event: React.MouseEvent) => {
    setMenuPosition2(null);
  };

  return (
    <header>
      <Navbar
        expand="lg"
        className="categoriesNavbar"
        collapseOnSelect
      >
        {/* Footwear */}
        <div onClick={handleRightClick1} className="footwear">
            <Typography style={{color:"black"}} component="h2" variant="h6" data-tip='NEW'>Footwear</Typography>
            <Menu
                open={!!menuPosition1}
                onClose={() => setMenuPosition1(null)}
                anchorReference="anchorPosition"
                anchorPosition={menuPosition1}
            >
                 <NestedMenuItem
                    label="Men"
                    parentMenuOpen={!!menuPosition1}
                    onClick={handleItemClick1}
                >
                    <MenuItem onClick={handleItemClick1}>Sports Shoes</MenuItem>
                    <MenuItem onClick={handleItemClick1}>Causal Shoes</MenuItem>
                    <MenuItem onClick={handleItemClick1}>Formal Shoes</MenuItem>
                    <MenuItem onClick={handleItemClick1} >Sneakers</MenuItem>
                    <MenuItem onClick={handleItemClick1}>Sandals & Floaters</MenuItem>
                    <MenuItem onClick={handleItemClick1}>Flip Flops</MenuItem>
                    <MenuItem onClick={handleItemClick1}>Flip Flops</MenuItem>
                </NestedMenuItem>
                <NestedMenuItem
                    label="Womens"
                    parentMenuOpen={!!menuPosition1}
                    onClick={handleItemClick1}
                >
                    <MenuItem onClick={handleItemClick1}>Flats</MenuItem>
                    <MenuItem onClick={handleItemClick1}>Causal Shoes</MenuItem>
                    <MenuItem onClick={handleItemClick1}>Heels</MenuItem>
                    <MenuItem onClick={handleItemClick1}>Boots</MenuItem>
                    <MenuItem onClick={handleItemClick1}>Sandal</MenuItem>
                    <MenuItem onClick={handleItemClick1}>Sports Shoes & Floaters</MenuItem>
                </NestedMenuItem>
                <NestedMenuItem
                    label="Kids"
                    parentMenuOpen={!!menuPosition1}
                    onClick={handleItemClick1}
                >
                    <NestedMenuItem
                        label="Boys"
                        parentMenuOpen={!!menuPosition1}
                        onClick={handleItemClick1}
                    >
                        <MenuItem onClick={handleItemClick1}>Causals Shoes</MenuItem>
                        <MenuItem onClick={handleItemClick1}>Sports Shoes</MenuItem>
                        <MenuItem onClick={handleItemClick1}>Sandals</MenuItem>
                        <MenuItem onClick={handleItemClick1}>Flip Flops</MenuItem>
                        <MenuItem onClick={handleItemClick1}>Schools Shoes</MenuItem>

                    </NestedMenuItem>
                    <NestedMenuItem
                        label="Girls"
                        parentMenuOpen={!!menuPosition1}
                        onClick={handleItemClick1}
                    >
                        <MenuItem onClick={handleItemClick1}>Flats</MenuItem>
                        <MenuItem onClick={handleItemClick1}>Causal  Shoes</MenuItem>
                        <MenuItem onClick={handleItemClick1}>Sports Shoes</MenuItem>
                        <MenuItem onClick={handleItemClick1}>Heels</MenuItem>
                        <MenuItem onClick={handleItemClick1}>Flip Flops</MenuItem>
                        <MenuItem onClick={handleItemClick1}>School Shoes</MenuItem>
                    </NestedMenuItem>
                </NestedMenuItem>
            </Menu>
        </div>

        {/* Clothing */}
        
        <div onClick={handleRightClick} className="clothing">
            <Typography className="categories" data-tip='NEW' variant="h6" component="h2" data-tip='NEW' >Clothing</Typography>
            <Menu
                open={!!menuPosition}
                onClose={() => setMenuPosition(null)}
                anchorReference="anchorPosition"
                anchorPosition={menuPosition}
            >
                    <NestedMenuItem
                        label="Men"
                        parentMenuOpen={!!menuPosition}
                        onClick={handleItemClick}
                    >
                        <NestedMenuItem
                            label="Topwear"
                            parentMenuOpen={!!menuPosition}
                            onClick={handleItemClick}
                        >
                            <MenuItem onClick={handleItemClick}>T-shirts</MenuItem>
                            <MenuItem onClick={handleItemClick}>Causal Shirts</MenuItem>
                            <MenuItem onClick={handleItemClick}>Formal Shirts</MenuItem>
                            <MenuItem onClick={handleItemClick}>Sweatshirts</MenuItem>
                            <MenuItem onClick={handleItemClick}>Sweaters</MenuItem>
                            <MenuItem onClick={handleItemClick}>Jackets</MenuItem>
                            <MenuItem onClick={handleItemClick}>Blazers & Costs</MenuItem>
                            <MenuItem onClick={handleItemClick}>Suits</MenuItem>
                            <MenuItem onClick={handleItemClick}>Rain Jackets</MenuItem>
                        </NestedMenuItem>
                        <NestedMenuItem
                            label="Bottomwear"
                            parentMenuOpen={!!menuPosition}
                            onClick={handleItemClick}
                        >
                            <MenuItem onClick={handleItemClick}>Jeans</MenuItem>
                            <MenuItem onClick={handleItemClick}>Casual Trousers</MenuItem>
                            <MenuItem onClick={handleItemClick}>Formal Trousers</MenuItem>
                            <MenuItem onClick={handleItemClick}>Shorts</MenuItem>
                            <MenuItem onClick={handleItemClick}>Track Pant & Joggers</MenuItem>
                        </NestedMenuItem>
                        <NestedMenuItem
                            label="Innerware/Sleepware"
                            parentMenuOpen={!!menuPosition}
                            onClick={handleItemClick}
                        >
                            <MenuItem onClick={handleItemClick}>Briefs & Trunks</MenuItem>
                            <MenuItem onClick={handleItemClick}>Boxers</MenuItem>
                            <MenuItem onClick={handleItemClick}>Vests</MenuItem>
                            <MenuItem onClick={handleItemClick}>Sleepwear & Loungewar</MenuItem>
                            <MenuItem onClick={handleItemClick}>Thermals</MenuItem>
                        </NestedMenuItem>
                    </NestedMenuItem>

                    <NestedMenuItem
                        label="Womens"
                        parentMenuOpen={!!menuPosition}
                        onClick={handleItemClick}
                    >
                        <NestedMenuItem
                            label="Indian Wear"
                            parentMenuOpen={!!menuPosition}
                            onClick={handleItemClick}
                        >
                            <MenuItem onClick={handleItemClick}>Kurtas & Suits</MenuItem>
                            <MenuItem onClick={handleItemClick}>Kurtis & Tops</MenuItem>
                            <MenuItem onClick={handleItemClick}>Leggings & Churidars</MenuItem>
                            <MenuItem onClick={handleItemClick}>Palazzos</MenuItem>
                            <MenuItem onClick={handleItemClick}>Sarees</MenuItem>
                            <MenuItem onClick={handleItemClick}>Dupattas & Shawls</MenuItem>
                            <MenuItem onClick={handleItemClick}>Lehenga Chollis</MenuItem>
                        </NestedMenuItem>
                        <NestedMenuItem
                            label="Western Wear"
                            parentMenuOpen={!!menuPosition}
                            onClick={handleItemClick}
                        >
                            <MenuItem onClick={handleItemClick}>Tops</MenuItem>
                            <MenuItem onClick={handleItemClick}>Jens</MenuItem>
                            <MenuItem onClick={handleItemClick}>Trousers & Capris</MenuItem>
                            <MenuItem onClick={handleItemClick}>Shorts & Skirts</MenuItem>
                            <MenuItem onClick={handleItemClick}>Jackets & Coats</MenuItem>
                            <MenuItem onClick={handleItemClick}>Blazers & Waistcoats</MenuItem>
                        </NestedMenuItem>
                        <NestedMenuItem
                            label="Liningerie &sleepwear"
                            parentMenuOpen={!!menuPosition}
                            onClick={handleItemClick}
                        >
                            <MenuItem onClick={handleItemClick}>Bra</MenuItem>
                            <MenuItem onClick={handleItemClick}>Briefs</MenuItem>
                            <MenuItem onClick={handleItemClick}>Shapewear</MenuItem>
                            <MenuItem onClick={handleItemClick}>Thermals</MenuItem>
                        </NestedMenuItem>
                    </NestedMenuItem>
                    <NestedMenuItem
                        label="Kids"
                        parentMenuOpen={!!menuPosition}
                        onClick={handleItemClick}
                    >
                        <NestedMenuItem
                            label="Boys"
                            parentMenuOpen={!!menuPosition}
                            onClick={handleItemClick}
                        >
                            <MenuItem onClick={handleItemClick}>T-Shirts</MenuItem>
                            <MenuItem onClick={handleItemClick}>Shirts</MenuItem>
                            <MenuItem onClick={handleItemClick}>Shorts</MenuItem>
                            <MenuItem onClick={handleItemClick}>Jeans</MenuItem>
                            <MenuItem onClick={handleItemClick}>Trousers</MenuItem>
                            <MenuItem onClick={handleItemClick}>Clothing Sets</MenuItem>
                            <MenuItem onClick={handleItemClick}>Ethnic Wear</MenuItem>
                            <MenuItem onClick={handleItemClick}>Track Pants & Pyjamas</MenuItem>
                            <MenuItem onClick={handleItemClick}>Jackets Sweater & Sweatshirts</MenuItem>
                        </NestedMenuItem>
                        <NestedMenuItem
                            label="Girls"
                            parentMenuOpen={!!menuPosition}
                            onClick={handleItemClick}
                        >
                            <MenuItem onClick={handleItemClick}>Dresses</MenuItem>
                            <MenuItem onClick={handleItemClick}>Tops</MenuItem>
                            <MenuItem onClick={handleItemClick}>T shirts</MenuItem>
                            <MenuItem onClick={handleItemClick}>Clothing Sets</MenuItem>
                            <MenuItem onClick={handleItemClick}>Ethnic Wear</MenuItem>
                            <MenuItem onClick={handleItemClick}>Shorts</MenuItem>
                            <MenuItem onClick={handleItemClick}>Leggings</MenuItem>
                            <MenuItem onClick={handleItemClick}>Jeans Trouser & Capris</MenuItem>
                            <MenuItem onClick={handleItemClick}>Jackets Sweater & Sweatshirts</MenuItem>
                        </NestedMenuItem>
                    </NestedMenuItem>
            </Menu>
        </div>

        {/* Accessories*/}

        <div onClick={handleRightClick2} className="accessories">
            <Typography style={{color:"black"}}  className="categories"  variant="h6" component="h2" >Accessories</Typography>
            <Menu
                open={!!menuPosition2}
                onClose={() => setMenuPosition2(null)}
                anchorReference="anchorPosition"
                anchorPosition={menuPosition2}
            >
                    <NestedMenuItem
                        label="Men"
                        parentMenuOpen={!!menuPosition2}
                        onClick={handleItemClick2}
                    >
                        <MenuItem onClick={handleItemClick2}>Wallets</MenuItem>
                        <MenuItem onClick={handleItemClick2}>Belts</MenuItem>
                        <MenuItem onClick={handleItemClick2}>Perfumes & Deodarants</MenuItem>
                        <MenuItem onClick={handleItemClick2}>Ties</MenuItem>
                        <MenuItem onClick={handleItemClick2}>Cap & Hats</MenuItem>
                        <MenuItem onClick={handleItemClick2}>Trimmers</MenuItem>
                    </NestedMenuItem>
                    <NestedMenuItem
                        label="Womens"
                        parentMenuOpen={!!menuPosition2}
                        onClick={handleItemClick2}
                    >
                        <MenuItem onClick={handleItemClick2}>Belts</MenuItem>
                        <MenuItem onClick={handleItemClick2}>Wallets</MenuItem>
                        <MenuItem onClick={handleItemClick2}>Perfumes & Deodarants</MenuItem>
                        <MenuItem onClick={handleItemClick2}>Cap & Hats</MenuItem>
                        <MenuItem onClick={handleItemClick2}>Bags</MenuItem>
                    </NestedMenuItem>
            </Menu>
        </div>
        <ReactTooltip />
      </Navbar>
    </header>
  );
};

export default CategoriesHeader;