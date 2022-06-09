import React from "react";
import CookieComponent from "./CookieComponentNew"
import {Modal,Box, Typography, Button} from '@mui/material';

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === "localhost";

function App() {
  const [showOverlay, setOverlay] = React.useState(true);
  const [showModal, setModal] = React.useState(false);

  //#region 
  async function displayRazorpay(UPI) {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/razorpay.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch("http://localhost:1337/razorpay", {
      method: "POST",
    }).then((t) => t.json());

    console.log(data);
	
    const options = {
      key: __DEV__ ? "rzp_test_xxxxxxxxxxxxxx" : "PRODUCTION_KEY",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "xxxxx",
      description: "Thank you for nothing. Please give us some money",
      image: "http://localhost:1337/logo.svg",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      hide_topbar: true,
      prefill: {
        email: "xxxxxx@gmail.com",
        contact: "9999999999",
        name: "Surbhi Miglani",
        method: "upi", //card|upi|wallet
      },
      save: 1,
    };

    const customCard = {
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "xxxxxxxxx",
      image: "http://localhost:1337/logo.svg",
      email: "xxxxxxxxxx@gmail.com",
      contact: "999999999",
      name: "xxxxxx",
      method: "card", //card|upi|wallet
      save: 1,
      "card[name]": "xxxxxx",
      "card[number]": "111111111111111",
      "card[expiry_month]": "09",
      "card[expiry_year]": "23",
      "card[cvv]": "100",
    };

    const customNetBanking = {
      amount: data.amount.toString(),
      order_id: data.id,
      email: "xxxxxx@gmail.com",
      contact: "9999999999",
      method: "netbanking", //card|upi|wallet
      save: 1,
      bank: "xxxx",
    };

    const customUPI = {
      amount: data.amount.toString(),
      order_id: data.id,
      email: "xxxxxx@gmail.com",
      contact: "9999999999",
      method: "upi", //card|upi|wallet
      vpa: "failed@razorpay",
    };


    console.log("1");
    const paymentObject = new window.Razorpay({
      key: "rzp_test_xxxxxxxxxxxxx",
      image: "https://i.imgur.com/n5tjHFD.png",
    });
    paymentObject.createPayment(customCard);

    console.log("2");
    paymentObject.on("payment.success", (resp) => {
      alert(resp.razorpay_payment_id);
      alert(resp.razorpay_order_id);
      alert(resp.razorpay_signature);
    }); // will pass payment ID, order ID, and Razorpay signature to success handler.

    paymentObject.on("payment.error", function (resp) {
      alert(resp.error.description);
    }); // will pass error object to error handler
  }

  const [state, setState] = React.useState({
    UPI: "",
  });

  function handleChange(event) {
    setState({ UPI: event.target.value });
  }
//#endregion

  return (
    <>
   
    <div style = {{textAlign: 'center'}}>
    {showOverlay ? <div id="overlay" 
    style = {{textAlign: 'center', position: "fixed",   top: "0",  left: "0", 
     width: "100vw",  height: "100vh",   backgroundColor: "rgba(0,0,0,0.7)",  zIindex: "2"}}
     onClick={()=>{setModal(true)}}
     >
      </div> : null}
     <form
        onSubmit={(event) => {
          event.preventDefault();
          // displayRazorpay(state.UPI);
        }}
      >
        <label>
          Name:
          <input type="text" value={state.UPI} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

      {showModal? <Modal
        open={showModal}
        onClose={()=>{setModal(false)}}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style} hideBackdrop={true}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Please accept the cookie policy to continue.
          </Typography>
          <Button
            onClick={()=>{setModal(false)}}
            colorScheme="teal"
            mt={2}
            variant="outlined"
            style={{marginTop: "10px"}}
          >
            Ok
          </Button>
        </Box>
      </Modal> : null}
       <CookieComponent overlay= {()=>{setOverlay()}}/>
       </div>
    </>
  )
}

export default App;
