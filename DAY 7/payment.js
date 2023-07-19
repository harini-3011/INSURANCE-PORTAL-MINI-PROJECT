import './payment.css';
import React from "react";

const CreditCardForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Successful")
    
  };
 
  return (
    
    <div  style={{
        maxwidth: '1000px',
        marginTop: '150px',
        marginLeft:"500px",
        marginRight:"600px",
        marginBottom:"100px"
        
       
        }}>
      <div className="form" style={{ borderRadius: "15px", backgroundColor: "#fff", minWidth: "100%", paddingTop: "165px",paddingLeft:"100px",paddingRight:"100px",paddingBottom:"100px",position: "relative", boxShadow: "-5px 7px 32px 0px rgba(0, 0, 0, 0.35)" }}>
        <form onSubmit={handleSubmit} style={{ padding: "70px", display: "flex", flexDirection: "row", flexWrap: "wrap",color:"goldenrod" }}>
          <div className="flex-row" style={{ width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            <label htmlFor="card-number">Card Number:&nbsp;&nbsp;</label>
            <input name="card-number" className="card-number" type="text"  style={{ padding: "10px", height: "20px",width:"1000px", fontSize: "18px", border: "1px solid #ccc", borderRadius: "5px", outlineColor: "#4183f5" }} />
          </div>
          <div className="flex-row" style={{ width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            <label htmlFor="card-name">Holder Name:</label>
            <input name="card-name" className="card-name" type="text"  style={{ padding: "10px", height: "20px",width:"1000px", fontSize: "18px", border: "1px solid #ccc", borderRadius: "5px", outlineColor: "#4183f5" }} />
          </div>
          <div className="flex-row" style={{ width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            <table>
              <tr>
                <td className="table-column">
                  <label htmlFor="month">Expiration Date:</label>
                  <br></br>
                  <select name="month" id="month-select" style={{ appearance: "none", padding: "10px 15px", width: "80%", height: "40px", marginRight: "10px", border: "1px solid #ccc", borderRadius: "5px", background: "url(\"https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-arrow-arrows-those-icons-lineal-color-those-icons-1.png\")", backgroundSize: "15px", backgroundRepeat: "no-repeat", backgroundPosition: "125px center", fontSize: "18px", outlineColor: "#4183f5" }}>
                    <option value="Month" selected disabled>Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                  
                  <select name="year" id="year-select" style={{ appearance: "none", padding: "10px 15px", width: "80%", height: "40px", marginRight: "10px", border: "1px solid #ccc", borderRadius: "5px", background: "url(\"https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-arrow-arrows-those-icons-lineal-color-those-icons-1.png\")", backgroundSize: "15px", backgroundRepeat: "no-repeat", backgroundPosition: "125px center", fontSize: "18px", outlineColor: "#4183f5" }}>
                    <option value="Year" selected disabled>Year</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                  </select>
                </td>
                <td className="table-column">
                  <label htmlFor="card-cvv">CVV:</label>
                  <br></br>
                  <input name="card-cvv" className="card-cvv" type="text"  style={{ padding: "10px", height: "20px",width:"300px", fontSize: "18px", border: "1px solid #ccc", borderRadius: "5px", outlineColor: "#4183f5" }} />
                </td>
              </tr>
            </table>
          </div>
          <div className="flex-row" style={{ width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            <label htmlFor="amount">Amount:</label>
            <input name="card-name" className="card-name" type="numbers"  style={{ padding: "10px", height: "20px",width:"1000px", fontSize: "18px", border: "1px solid #ccc", borderRadius: "5px", outlineColor: "#4183f5" }} />
          </div>
     <div style={{display:"flex"}}>
     <div>
      <img style={{height:"100px",width:"100px"}}src="https://cdn-icons-png.flaticon.com/128/196/196578.png"></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <div>
      <img style={{height:"100px",width:"100px"}}src="https://cdn-icons-png.flaticon.com/128/11378/11378315.png"></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <div>
      <img style={{height:"100px",width:"100px"}}src="https://cdn-icons-png.flaticon.com/128/11378/11378185.png"></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <div>
      <img style={{height:"100px",width:"100px"}}src="https://cdn-icons-png.flaticon.com/128/196/196565.png"></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      </div>
          <div className="flex-row" style={{ width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            <input className="card-submit" type="submit" value="Pay" style={{ width: "100%", margin: "0 auto", color: "#fff", fontSize: "18px", height: "50px", border: "none", borderRadius: "5px", backgroundColor: "#2364d2", transition: "background-color 250ms ease-in-out" }} />
          </div>
        </form>
        <img className="card-image" src="https://pngimg.com/uploads/credit_card/credit_card_PNG99.png" alt="Card image" style={{ width: "425px", position: "absolute", top: "-125px", left: "100px", zIndex: "1" }} />
        <div className="card-image-shadow" style={{ position: "absolute", width: "410px", height: "253px", top: "-113px", left: "107px", borderRadius: "15px", boxShadow: "-5px 10px 32px 0px #000", zIndex: "0" }}></div>
      </div>
    </div>
   

  );
};

export default CreditCardForm;
