import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { Button, InputAdornment } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Searchbar = () => {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate("/create-student");
  };
  return (
    <div className="pl-[65px] pt-[40px] flex items-center">
      <TextField
        variant="outlined"
        placeholder="Search"
        sx={{
          paddingLeft: "10px",
          width: "27%",
          height: "18%",
          borderRadius: "5px",
          backgroundColor: "#F0F0F0",
          borderColor: "#F0F0F0",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" sx={{ paddingRight: "12px" }}>
              <SearchIcon fontSize="medium" />
            </InputAdornment>
          ),
          sx: {
            "& .MuiOutlinedInput-notchedOutline": {
              borderWidth: "0",
            },
          },
        }}
      />
      <div className="pl-[60%]">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            borderRadius: "25px",
            height: "48px",
            width: "148px",
            "&:hover": {
              backgroundColor: "white",
              color: "black",
            },
          }}
          onClick={handleAddClick}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default Searchbar;
