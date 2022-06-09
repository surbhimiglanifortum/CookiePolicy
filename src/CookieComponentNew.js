import React from "react";
import {
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow, Divider
} from "@mui/material";

import {Modal,Typography} from '@mui/material';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";

function CookieComponent(props) {
  const [showPolicyModel, setPolicyModel] = React.useState(true);

 
const style = {
    width: '600px',
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
  };
  

  return (
    <>
      {showPolicyModel ? (
        <Modal
          open={showPolicyModel}
          onClose={()=>{setPolicyModel(false)}}
        >
          <Box sx={{ ...style, width: 400 }}>
            <h2>Cookie Policy - Fortum CND India</h2>
          <label style= {{color:"black"}}>We use cookies to provide necessary website functionality, improve your experience and analyze our site usage. By using our website, you agree to our <a href="google.com">Privacy Policy</a> and cookies usage</label>

            <ChildModal />
          </Box>
        </Modal>
      ) : null}
    </>
  );
}

function ChildModal() {
  const [showChildModal, setChildModal] = React.useState(false);

  const [showDataGrid, setDataGrid] = React.useState(false);


 
  const style = {
    width: '600px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    height: '380px'
  };

  const columns = [
    { field: "Provider", headerName: "Provider", width: "20%" },
    { field: "CookieName", headerName: "Cookie Name", width: "20%" },
    { field: "Description", headerName: "Description", width: "60%" },
  ];

  const rows = [
    {
      Provider: "AWS Cognito",
      CookieName: "CognitoIdentityProvider.*",
      Description:
        "AWS Cognito maintains cookies with user log in information for user authprization requests and persisting the user login until sign out fpr better brosing experience.",
    },
  ];
  return (
    <React.Fragment>
        <div style={{marginTop: '30px', width: '100%',
        display: 'flex', justifyContent: 'space-around'
         }}>
        <Button
            mt={2}
            variant="contained"
            position='absolute'
            left='0'
            style={{backgroundColor:"rgba(55,122,108,1)",  width: '30%', padding:'10px', marginLeft:'20px', borderRadius: '0px'}}
          >
            Accept
          </Button>
          <Button
            onClick={() => {
                setChildModal(true);
            }}
            mt={2}
            style={{ color:"rgba(55,122,108,1)",marginRight:'20px'
             ,marginLeft: 'auto', marginBottom:'0px', padding:'10px', borderRadius: '0px' }}
          >
            Details
          </Button></div>
      <Modal
        hideBackdrop
        open={showChildModal}
        onClose={() => {
          setChildModal(false);
        }}
        style={{...style, padding: '20px'}}
        aria-labelledby="modal-modal-title"
      >
        <List style={{ overflow: 'auto', maxHeight: '100%' }}>
          
        <div>
          <h2>Fortum</h2>
          <Divider style={{marginBottom: '10px', color: 'black'}}/>
          </div>
          {["Strictly Necessary Cookies", "Performance Cookies"].map((text, index) => (
            <ListItem key={text} disablePadding style={{}}>
              <div style={{ alignContent: "vertical" }}>
                <ListItemText
                  primary={<b>{text}</b>}
                  style={{ fontWeight: "bold" }}
                />
                  
          <Divider light variant="middle"  />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "0px",
                  }}
                  flex={1}
                >
                  <p>
                    These type of cookies are required to maintain the user
                    access and save user sessions for a better browsing
                    experience.
                  </p>
                  <IconButton
                    alignSelf="flex-end"
                    onClick={() => {
                      (showDataGrid) ? setDataGrid(false) : setDataGrid(true);
                    }}
                  >
                    {" "}
                    {showDataGrid && index==0 ? (
                      
                      <KeyboardArrowUpIcon />
                    ) : (
                      
                      <KeyboardArrowDownIcon />
                    )}
                  </IconButton>
                </div>
                <Collapse in={showDataGrid && index==0 } timeout="auto" unmountOnExit>
                  <Table size="small" aria-label="purchases">
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <b>Provider</b>
                        </TableCell>
                        <TableCell>
                          <b>CookieName</b>
                        </TableCell>
                        <TableCell align="right">
                          <b>Description</b>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.Provider}>
                          <TableCell component="th" scope="row">
                            {row.Provider}
                          </TableCell>
                          <TableCell>{row.CookieName}</TableCell>
                          <TableCell align="right">{row.Description}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Collapse>
              </div>
            </ListItem>
          ))}
          
        <Button
            mt={2}
            variant="contained"
            style={{backgroundColor:"rgba(55,122,108,1)",  width: '30%', padding:'10px', marginTop: '10px',
             borderRadius: '0px', alignContent: 'center' }}
          >
            Accept All
          </Button>
        </List>
      </Modal>
    </React.Fragment>
  );
}

export default CookieComponent;
