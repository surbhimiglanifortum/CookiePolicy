import React from "react";
import {Button,Box,Drawer,List, ListItem, ListItemText,Collapse, Table, TableHead, TableCell, TableBody, TableRow} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';


function CookieComponent(props) {
  const [showPolicyModel, setPolicyModel] = React.useState(true);
  const [showDrawer, setDrawer] = React.useState(false);
  const [showDataGrid, setDataGrid] = React.useState(false);

  
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawer(open)
  };


  const columns = [
	{ field: 'Provider', headerName: 'Provider', width: '20%' },
	{ field: 'CookieName', headerName: 'Cookie Name', width: '20%' },
	{ field: 'Description', headerName: 'Description', width: '60%' },
  ];
  
  const rows = [
	{ Provider: 'AWS Cognito', CookieName: 'CognitoIdentityProvider.*',
	 Description: 'AWS Cognito maintains cookies with user log in information for user authprization requests and persisting the user login until sign out fpr better brosing experience.' }
  ];
  
  return (
    <>
      {showPolicyModel ? (
        <Box
        width={"100%"}
          position={"absolute"}
          bottom={0}
          zIndex={99}
          bg="#c7c7c7"
          paddingTop={3}
          paddingBottom={3}
          color="white"
		  boxShadow={3}
      backgroundColor="white"
        >
          <label style= {{color:"black", margin: "4px"}}>
		  We use cookies to provide necessary website functionality, improve your experience and analyze our site usage.
		By using our website, you agree to our <a href="google.com">Privacy Policy</a> and cookies usage
          </label>
          <Button
            onClick={() => {
              setPolicyModel(false);
              props.overlay(()=>{
                  return false;
              })
            }}
            colorScheme="teal"
            mt={2}
            variant="outlined"
            style={{marginLeft: "5px"}}
          >
            Accept
          </Button>
          <Button
            onClick={() => {
			  setDrawer(true);
            }}
            colorScheme="teal"
            mt={2}
            variant="outlined"
            style={{marginLeft: "5px"}}
          >
            Details
          </Button>
        </Box>
      ) : null}
      {showDrawer ? (
        <Drawer
          anchor="bottom"
          open={true}
          onClose={toggleDrawer(false)}
		       p={3}
        >
		<List style={{margin: "20px"}}>
        {['Strictly Necessary Cookies' ].map((text, index) => (
          <ListItem key={text} disablePadding style={{ }}>
			  <div style={{alignContent:'vertical'}}> 
              <ListItemText primary={<b>{text}</b>} style={{fontWeight: 'bold'}}/>
			  <hr
        style={{
            color: 'grey', height:'0.5px'
        }}
    />
			  <div style={{ display:'flex', flexDirection: 'row', padding: '0px' }} flex={1}>
			  <p>These type of cookies are required to maintain the user access and save user sessions for a better browsing experience.</p>
			  <IconButton alignSelf='flex-end' onClick={()=>{
                     showDataGrid?  setDataGrid(false): setDataGrid(true);
			  }}>  {showDataGrid ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
			  </IconButton>
			  </div>
			<Collapse in={showDataGrid} timeout="auto" unmountOnExit>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell><b>Provider</b></TableCell>
                    <TableCell><b>CookieName</b></TableCell>
                    <TableCell align="right"><b>Description</b></TableCell>
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
      </List>
			</Drawer>
      ) : null}
    </>
  )
}

export default CookieComponent;
