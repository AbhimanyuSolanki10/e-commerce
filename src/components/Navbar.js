import React from "react";
import style from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Head = style.nav`
    width: 100vw;
    display: flex;
    flex-direction: column;
`;

const NavbarTop = style.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100vw;
    align-item: center;
    margin-bottom: 20px;
`;

const Logo = style.div`
    display: flex;
    flex-direction: row;
    width: 15%;
    margin-left: 10px;
    align-item: center;
    img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
    h1{
      font-size: 40px;
      margin: 0px;
      padding: 0px;
    }
`;

const Search = style.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
    width: 60%;
    input{
        width: 90%;
        padding: 0px 10px;
        border: none;
    }
    border-radius: 25px;
    border: 1px solid grey;
    height: 60%;
    padding: 10px;
`;

const Fav = style.div`
    width: 20%;
    display: flex;
    flex-direction: row;
    justify-content: right;
    gap: 10px
`;

const NavbarBottom = style.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: left;
    select{
        border-radius: 25px;
        padding: 5px;
    }
`;

const Navbar = () => {
  return (
    <Head>
      <NavbarTop>
        <Logo>
          <img src="images/logo.jpg" className="logo" alt="" />
          <h1>Vibezter</h1>
        </Logo>
        <Search>
          <input
            type="text"
            placeholder="search gift and experince more"
            className="search-input"
          />
          <SearchIcon/>
        </Search>
        <Fav>
          <ShoppingCartIcon/>
          <PersonOutlineIcon/>
        </Fav>
      </NavbarTop>
      <NavbarBottom className="navbar-down-section">
        <select>
          <option>Birthday</option>
        </select>
        <select>
          <option>Anniversary</option>
        </select>
        <select>
          <option>Gifts</option>
        </select>
        <select>
          <option>Experiences</option>
        </select>
        <select>
          <option>Occasions</option>
        </select>
        <select>
          <option>Cakes</option>
        </select>
        <select>
          <option>Flowers</option>
        </select>
        <select>
          <option>Combo & Hampers</option>
        </select>
      </NavbarBottom>
    </Head>
  );
};

export default Navbar;
