import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../App.css";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Header from "./Header";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MasterTable from "./MasterTable";

export default function LeftSideForm() {
  const [openTable, setOpenTable] = useState(true);
  const HandlerCheck = () => {
    setOpenTable(false);
  };

  return (
    <>
      <Header />
      {openTable ? (
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ marginTop: 30, marginLeft: 20, width: "90%" }}
        >
          <Grid item xs={6}>
            <div className="container">
              <div>
                <Typography>Entry</Typography>
                <Typography>Process</Typography>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="process"
                    defaultValue="BreakDown"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="BreakDown"
                      control={<Radio />}
                      label="BreakDown"
                    />
                    <FormControlLabel
                      value="Trim"
                      control={<Radio />}
                      label="Trim"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div>
                <label htmlFor>Dry Room (Phase)</label>
                <input
                  type="text"
                  name="city"
                  list="cityname"
                  placeholder="select"
                />
                <datalist id="cityname">
                  <option value="Test1"></option>
                  <option value="Test2"></option>
                  <option value="Test3"></option>
                  <option value="Test4"></option>
                  <option value="Test5"></option>
                </datalist>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor>Date</label>
                <input type="date" style={{ width: "25%" }} />
              </div>
              <br />
              <div>
                <label htmlFor>Operator (PH2)</label>
                <input type="text" name="city" list="cityname" />
                <datalist id="cityname">
                  <option value="Test1"></option>
                  <option value="Test2"></option>
                  <option value="Test3"></option>
                  <option value="Test4"></option>
                  <option value="Test5"></option>
                </datalist>
                <br />
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <a href style={{ marginRight: 8 }}>
                    <AddIcon />
                  </a>
                  <Typography style={{ color: "blue" }}>
                    Add a New option
                  </Typography>
                </div>
              </div>
              <br />
              <div>
                <label htmlFor>Operator (PH3)</label>
                <input
                  type="text"
                  name="city"
                  list="cityname"
                  placeholder="select..."
                />
                <datalist id="cityname">
                  <option value="Test1"></option>
                  <option value="Test2"></option>
                  <option value="Test3"></option>
                  <option value="Test4"></option>
                  <option value="Test5"></option>
                </datalist>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <a href style={{ marginRight: 8 }}>
                    <AddIcon />
                  </a>
                  <Typography style={{ color: "blue" }}>
                    Add a New option
                  </Typography>
                </div>
              </div>
              <br />
              <div>
                <label htmlFor>Strain</label>
                <input
                  type="text"
                  name="city"
                  list="cityname"
                  placeholder="select..."
                />
                <datalist id="cityname">
                  <option value="Test1"></option>
                  <option value="Test2"></option>
                  <option value="Test3"></option>
                  <option value="Test4"></option>
                  <option value="Test5"></option>
                </datalist>
              </div>
              <br />
              <div>
                <label htmlFor>Flower Room</label>
                <input
                  type="text"
                  name="city"
                  list="cityname"
                  placeholder="select..."
                />
                <datalist id="cityname">
                  <option value="Test1"></option>
                  <option value="Test2"></option>
                  <option value="Test3"></option>
                  <option value="Test4"></option>
                  <option value="Test5"></option>
                </datalist>
              </div>
              <br />
              <div>
                <label htmlFor>Weight (Grams)</label>
                <input type="number" />
              </div>
              <div>
                <label htmlFor>Minutes</label>
                <input type="text" />
              </div>
              <div>
                <Button
                  id="demo-customized-button"
                  aria-controls="demo-customized-menu"
                  aria-haspopup="true"
                  variant="contained"
                  disableElevation
                  style={{
                    backgroundColor: "#00396b",
                    marginTop: 20,
                    marginBottom: 30,
                  }}
                  onClick={() => HandlerCheck()}
                >
                  Submit
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} style={{ marginTop: 30 }}>
            <Typography style={{ marginBottom: 15 }}>Waste</Typography>
            <Divider style={{ marginBottom: 15 }} />
            <div style={{ marginBottom: 15 }}>
              <label htmlFor>Lost Buds</label>
              <input type="text" />
            </div>
            <div style={{ marginBottom: 15 }}>
              <label htmlFor>Dry Waste</label>
              <input type="text" />
            </div>
            <Divider style={{ marginBottom: 15 }} />
            <div>
              <label htmlFor>Speed Settings</label>
              <input type="text" />
            </div>
          </Grid>
        </Grid>
      ) : (
        <MasterTable />
      )}
    </>
  );
}

export { LeftSideForm };
