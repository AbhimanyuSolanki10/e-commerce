import React from "react";
import style from "styled-components";

const Container = style.section`
    display: flex;
    flex-direction: row;
    gap: 20px
    width: 100vw;
    padding: 10px 20px;
`;

const Left = style.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 10px;
`;

const Line = style.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    img{
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 20px;
    }
    `;

const Main = style.div`
    img{
        width: 470px;
        height: 480px;
        object-fit: cover;
        border-radius: 20px;
    }
`;

const Image = style.div`
    
`;

const Right = style.div`
    width: 30%;
`;

const SubHead = style.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-item: center;
    .rating{
        display: flex;
        flex-direction: row;
        width: 80px;
        background-color: green;
        border-radius: 15px;
        color: white;
        p{
            display: flex;
            justify-content: center;
            align-item: center;
            padding: 0px;
            margin: 0px;
            margin-right: 10px; 
        }
        height: 25px;
        padding: 3px 1px;
        justify-content: center;
        align-item: center;
        margin: 0px;
    }
    .review{
        text-decoration-line: underline;
        color: grey;
    }
`;
const Price = style.div`
    font-size: 20px;
    margin-top: 20px;
    display: flex;
    gap: 15px;
`;

const Weight = style.div`
    display: flex;
    flex-direction: column;
`;

const Head = style.h3`

`;

const Radio = style.div`
    display: flex;
    gap: 10px;
    div{
        display: flex;
        gap: 5px;
    }
`;

const Address = style.div`
    margin-top: 20px;
    input{
        border: 1px solid grey;
        border-radius: 25px;
        padding: 5px 11px;
        margin-right: 15px;
    }
`;

const Details = style.div`
`;

const Delivery = style.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    .delivery-main-box{
        display: flex;
        flex-direction: row;
        gap: 10px;
        div{
            width: 100px;
            height: 35px;
            text-align: center;
            border-radius: 25px;
            border: 1px solid grey;
            padding 8px 10px;
            p{
                margin: 0px;
            }
        }
    }
    select{
        width: 150px;
        text-align: center;
        padding: 5px;
        border-radius: 25px;
        border: 1px solid grey;
    }
`;

const Buy = style.div`
    display: flex;
    gap: 30px;
    margin-top: 25px;
    button{
        padding: 5px;
        text-align: center;
        border: 1px solid grey;
        border-radius: 15px;
        width: 200px;
        height: 50px;
    }
`;

const Home = () => {
  return (
    <Container className="display-main-container">
      <Left className="display-left">
        <Line>
          <Image>
            <img src="images/cake.jpg" alt="" />
          </Image>
          <Image>
            <img src="images/cake1.jpg" alt="" />
          </Image>
          <Image>
            <img src="images/cake2.jpg" alt="" />
          </Image>
        </Line>
        <Main>
          <Image>
            <img src="images/cake3.jpg" alt="" />
          </Image>
        </Main>
      </Left>
      <Right className="display-right">
        <h1>Chocolate Truffle</h1>
        <SubHead>
          <div className="rating">
            <p style={{ color: "white" }}>&#9733;</p>
            <p>4.92</p>
          </div>
          <div className="review">Review 5</div>
        </SubHead>
        <Price>
          <div style={{ fontWeight: "800" }}>₹ 599</div>
          <div>
            <strike>₹ 599</strike>
          </div>
          <div style={{ color: "green" }}>9% OFF</div>
        </Price>
        <Weight>
          <Head>Select Weight</Head>
          <Radio>
            <div>
              <input type="radio" name="0.5" />
              <label htmlFor="0.5">0.5 Kg</label>
            </div>
            <div>
              <input type="radio" name="1" />
              <label htmlFor="1">1 Kg</label>
            </div>
            <div>
              <input type="radio" name="2" />
              <label htmlFor="2">2 Kg</label>
            </div>
          </Radio>
        </Weight>

        <Address>
          <input type="text" placeholder="Enter Pincode" />
          <input type="text" placeholder="Select Date" />
        </Address>

        <Delivery>
          <h3>Select Delivery Type</h3>
          <div className="delivery-main-box">
            <div style={{ backgroundColor: "lightgrey" }}>
              Standard
              <p style={{ color: "green" }}>(Free)</p>
            </div>
            <div>
              First Time
              <p style={{ color: "green" }}>₹ 200</p>
            </div>
            <div>
              Mid Night
              <p style={{ color: "green" }}>₹ 250</p>
            </div>
          </div>

          <select name="Select Time" id="">
            <option value="">Select Time</option>
            <option value="">9:00 am</option>
            <option value="">10:00 am</option>
            <option value="">11:00 am</option>
            <option value="">12:00 am</option>
            <option value="">01:00 pm</option>
            <option value="">02:00 pm</option>
          </select>
        </Delivery>

        <Buy>
          <button>Add to Cart</button>
          <button style={{ backgroundColor: "#7E1717", color: "white" }}>
            Buy Now
          </button>
        </Buy>

        <Details>
          <div>
            <h3>Product Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur voluptatem error ipsam dolor eum. Excepturi odit
              inventore illum! Reprehenderit, quasi iusto explicabo quaerat
              dolores fugit aliquam omnis tempora error blanditiis eius aperiam
              illum, quam ut dolor qui autem perspiciatis dolorem rem, doloribus
              tenetur laudantium! Minima, labore quis! Provident, quibusdam
              vero.
            </p>
            <ul>
              <li>Weight: 500gm</li>
              <li>Flavour Choclate</li>
              <li>Shape Round</li>
              <li>Country of Origin India</li>
            </ul>
          </div>

          <div>
            <h3>Disclaimer</h3>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
                eum.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
                eum.
              </li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
        </Details>
      </Right>
    </Container>
  );
};

export default Home;
