import PropTypes from "prop-types";

export default function PriceCard(props={}) {
  const {width, height, background, title, price, items}=props;
  return (
    
      <div className="priceCard"
      style={{ width: width, height: height, background:background, }}>
      
      <div className="priceCardOne">
        <h6>{title}</h6>
        <h2>{price}</h2>
        <hr></hr>
        </div>
      <div className="content">
      {items.map((element, index) => (
        <p style={{color:element.isAvailable?"black":"grey"}} key={index}>
          {element.isAvailable ? "✔" : "✖"} {element.name}
        </p>
      ))}
    </div>
    <button>BUTTON</button>
    
    </div>
    
   );
      }
      PriceCard.propTypes={
          width:PropTypes.number,
          height:PropTypes.number,
          background:PropTypes.string,
          title:PropTypes.string,
          price:PropTypes.string,
          items:PropTypes.array,
          isAvailable:PropTypes.bool,
      };

