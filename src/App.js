import React, {useState} from 'react';
import styled from 'styled-components';
import {QrCodeOutline, WifiOutline} from 'react-ionicons';

const StyledDiv = styled.div`
  header{

    nav{
      display: flex;
      justify-content: flex-end;
      padding: 7.5rem 5rem;
      padding-bottom: 12rem;

      li{
        margin-right: 5rem;
      }

      ul{
        display: flex;
      }

      a{
        font-size: 2.5rem;
        text-transform: uppercase;
        font-weight:600;
        color: #484848;
        border-bottom: 1px solid transparent;
        padding-bottom: 2.5rem;

        &:hover{
          border-bottom: 1px solid #484848;
          color: #484848;
          transition: all .8s;
        }

      }
    }

    .avi{
      width: 7.5rem;
      height: 7.5rem;
      border-radius: 10rem;
      overflow: hidden;
      transform: translate(2.5rem, -2.5rem);

      img{
        width: 100%;
      }
    }
  }

  .divider{
    height: 1px;
    width: 80%;
    background-color: #ccc;
    padding: 0 7.5rem;
    margin: auto;
  }

  .payment{
    padding: 7.5rem 5rem 0;

    &-header{
      display: flex;
      justify-content: space-between;
      padding: 0 2.5rem;

      h1{
        padding-bottom: 2rem;
      }

      h2{
        color: #ccc;
      }
    }

    &-platform{
      display: flex;
      align-items: center;
      transform: translateY(-5rem);
      
      &--img{
        width: 10rem;

        img{
          width: 100%;
        }
      }

      &--img-small{
        width: 3.5rem;
        height: 3.5rem;
        margin-right: 2.5rem;

        img{
          width: 100%;
          height: 100%;
        }
      }

      .bg-blue{
        background-color: #065e91;
      }

      .bg-grey{
        background-color: #ccc;
      }

      &--label{
        display: flex;
        align-items: center;
        margin-left: 5rem;
      }
    }

    &-details{
      padding: 5rem 2.5rem;
      display: flex;
      justify-content: space-between;

      @media only screen and (max-width: 75em) {
        padding: 5rem 0;
      }

      @media only screen and (max-width: 71.25em) {
        flex-direction: column;
        align-items: center;
      }
    }

    &-card{
      display: inline-block;
      width: 50rem;
      height: 30rem;
      border-radius: 5px;
      background: linear-gradient(to top right, #f64f59, #1565C0);
      padding: 5rem;
      color: #fff;
      font-size: 1.6rem;
      letter-spacing: 2px;
      position: relative;

      .master-card{
        position: absolute;
        right: 5rem;
        bottom: 0;
        width: 15rem;

        img{
          width: 100%
        }
      }
      
      h3{
        padding-bottom: 2.5rem;

        &:nth-child(2){
          padding-bottom: 0;
        }
      }

      .wifi{
        fill: transparent;
        color: #fff;
        width: 5rem;
        height: 5rem;
        transform: rotate(90deg);
      }

      .qr-code{
        color: #D35400;
        fill: #D35400;
        stroke: #000;
        width: 7.5rem;
        height: 7.5rem;
        transform: scale(1.1);
      }

      .qr-wrapper{
        width: 7.5rem;
        height: 7.5rem;
        background-color: #F4B350cc;
        border-radius: 5rem;
        display: flex;
        justify-content: center;
        margin-left: 2.5rem;
      }

      .card-chip{
        display: flex;
        align-items: center;
        transform: translateX(-5rem);
        padding: 2.5rem 0;
      }

      @media only screen and (max-width: 75em) {
        margin-bottom: 5rem;
      }
    }

    &-form{
      display: inline-block;
    }

    &-form form{
      display: grid;
      grid-template-columns: 30rem 30rem;
      grid-template-rows: auto auto;
      column-gap: 5rem;
      row-gap: 2.5rem;
      margin-bottom: 2.5rem;

      div{
        display: flex;
        flex-direction: column;
        margin-bottom: 2.5rem;
        //padding-left: 1rem;
      }

      label{
        color: #6a6a6a;
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      input{
        height: 4rem;
        background-color: #ccc;
        border: 1px solid #bbb;
        font-size: 2rem;
        color: #6a6a6a;
        border-radius: 5px;
        padding: 1rem 2rem;

        &:focus{
          outline: none;
        }
      }
    }

    .save-card{
      display: flex;
      align-items: center;
      margin-top: 1rem;

      input{
        margin-right: 1rem;
      }



      &--btn{
        margin-top: 2.5rem;
      }
    }

  }

  .price{    
    padding: 7.5rem 5rem;

    &-grid{
      display: flex;
      justify-content: space-between;
      padding-bottom: 2.5rem;

      .promo-code{
        color: #ccc;
      }
    }
  }

  .complete-payment{
    padding: 7.5rem 5rem;
    display: flex;
    justify-content: space-between;

    .button{
      width: 35rem;
    }

    .total-price{
      font-size: 3.5rem;
      font-weight: 800;
    }

    @media only screen and (max-width: 37.5em) {
      flex-direction: column-reverse;
      align-items: center;

      h1{
        padding-bottom: 5rem;
      }
    }

  }

  .radio-input{
    padding: 2.5px 5px;
    position: relative;

    &--input{
      opacity: 0;
      visibility: hidden;
      position: absolute;
      left: 0;
      top: 0;
    }

    &--btn{
      height: 5px;
      width: 5px;
      border-radius: 7px;
      border: 5px solid #ccc;
      background-color: #ccc;
      margin-right: 10px;
      cursor: pointer;
    }

    &--input:checked ~ .radio-input--btn{
      background-color: #fff;      
      border: 5px solid #065e91;
    }
  }
`;

const App = props =>{
  const [cardNo, setCardNo] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardCode, setCardCode] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const cardNoChangedHandler = (e) => {
    //setCardNo(e.target.value.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,''));

    const replaceText = (text) => {
      let returnText;

      if(text.length === 4){
        returnText = text + " ";
      }
      else if (text.length === 9){
        returnText = text + " ";
      }
      else if (text.length === 14){
        returnText = text + " ";
      }
      else if(text.length > 19){
        returnText = text.slice(0, 19);
      }
      else{
        returnText = text;
      }

      return returnText;
    }

    setCardNo(replaceText(e.target.value));
  };

  const cardDateChangedHandler = (e) => {
    
    const replaceText = (text) => {
      let returnText;
      if(text.length < 2){
        returnText = text;
      }
      else if(text.length === 2){
        returnText = text + "/"
      }
      else if(text.length > 5){
        returnText = text.slice(0, 5);
      }
      else if (text.includes("/")){
        returnText = text; 
      }

      return returnText;
    }
    setCardDate(replaceText(e.target.value));
  };

  const cardCodeChangedHandler = (e) => {
    
    const replaceText = (text) => {
      let returnText;
      if(text.length > 3){
        returnText = text.slice(0, 3);
      }
      else{
        returnText = text;
      }

      return returnText;
    }
    setCardCode(replaceText(e.target.value));
  };

  const postalCodeChangedHandler = (e) => {
    
    const replaceText = (text) => {
      let returnText;
      if(text.length > 6){
        returnText = text.slice(0, 6);
      }
      else{
        returnText = text;
      }

      return returnText;
    }
    setPostalCode(replaceText(e.target.value));
  };


  return(
    <StyledDiv>
      <header>
        <nav>
              <ul>
                  <li><a href="/">trips</a> </li>
                  <li><a href="/">recently booked</a> </li>
                  <li><a href="/">bookings</a> </li>
              </ul>
              <div className="avi">
                <img src="/cardi.png" alt="avatar" />
              </div>
          </nav>
      </header>

      <div className="divider"></div>

      <div className="payment">

        <div className="payment-header">
          <div className="payment-headings">
            <h1>Payment Information</h1>
            <h2>Choose your method of payment.</h2>

          </div>

          <div className="payment-platform">
            <div className="payment-platform--img-small bg-blue">
              <img src="/visa.webp" alt="visa" />
            </div>
            <div className="payment-platform--img-small bg-grey">
              <img src="/discover.png" alt="discover" />
            </div>
            <label className="radio-input payment-platform--label">
              <input type="radio" className="radio-input--input" ></input>
              <div className="radio-input--btn"></div>
              <div className="payment-platform--img">
                <img src="/paypal.png" alt="papypal" />
              </div>
            </label>
            
          </div>
        </div>

        <div className="payment-details">
          <div className="payment-card">
            <h3>CARD NUMBER</h3>
            <h3>{cardNo}</h3>
            <div className="card-chip">
              <WifiOutline cssClasses="wifi" />
              <div className="qr-wrapper"><QrCodeOutline cssClasses="qr-code" /></div>
            </div>
            <h3>EXPIRATION DATE</h3>
            <h3>{cardDate}</h3>
            <h3>John Doe</h3>

            <div className="master-card">
              <img src="/Mastercard-Logo.wine.svg" alt="master card" />
            </div>
          </div>

          <div className="payment-form">
            <form>
              <div>
                <label>Credit card number</label>
                <input type="text" value={cardNo} onChange={cardNoChangedHandler} />
              </div>

              <div>
                <label>Expiration date</label>
                <input type="text" placeholder="mm/yy" value={cardDate} onChange={cardDateChangedHandler}/>
              </div>

              <div>
                <label>Security code</label>
                <input type="text" value={cardCode} onChange={cardCodeChangedHandler}/>
              </div>

              <div>
                <label>Postal Code</label>
                <input type="text" value={postalCode} onChange={postalCodeChangedHandler}/>
              </div>
            </form>

            <label className="save-card radio-input">
              <input type="radio" className="radio-input--input" />
              <div className="radio-input--btn"></div>
              <h2>Use this card for next time purchase</h2>
            </label>

            <button className="save-card--btn">Add card</button>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="price" >
        <div className="price-grid">
          <h1>Subtotal</h1>
          <h1>&#8358;2,497.00</h1>
        </div>
        
        <div className="price-grid">
          <h1>Estimated TAX</h1>
          <h1>&#8358;119.64</h1>
        </div>
        
        <div className="price-grid">
          <h1>Promotional Code: <span className="promo-code" >Z4KXLM9A</span></h1>
          <h1>&#8358;-60.00</h1>
        </div>
      </div>

      <div className="divider"></div>

      <div className="complete-payment">
        <div className="button">
          <button>Complete Payment</button>
        </div>
        <h1 className="total-price">TOTAL:&#8358;2556.64</h1>
      </div>
    </StyledDiv>
  )
}

export default App;