import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateStudent = () => {
  const [student, setStudent] = useState({
    first_name: "",
    last_name: "",
    location: "",
    email: "",
    dob: "",
    education: "",
    about: "",
  });
  const navigate = useNavigate();
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setStudent({ ...student, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/students", student)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  console.log(student);
  return (
    <div className="m-[7%] bg-white">
      <div className="pl-2">
        <form className="flex flex-wrap">
          <div className="">
            <label className="text-[20px] font-semibold ">First Name : </label>
            <input
              type="text"
              name="first_name"
              value={student.first_name}
              className="border-[2px] w-[380px] h-[50px] pl-3 ml-4 "
              onChange={handleInput}
            />
          </div>
          <div className="pl-[18%]">
            <label className="text-[20px] font-semibold ">Last Name : </label>
            <input
              value={student.last_name}
              type="text"
              name="last_name"
              className="border-[2px] w-[380px] h-[50px] pl-3  ml-4 "
              onChange={handleInput}
            />
          </div>
          <div className=" my-[4%]">
            <label className="text-[20px] font-semibold ">
              Location <span className="px-5">:</span>{" "}
            </label>
            <input
              value={student.location}
              name="location"
              type="text"
              onChange={handleInput}
              className="border-[2px] w-[380px] h-[50px] pl-2"
            />
          </div>
        </form>
        <form>
          <div className="">
            <label className="text-[20px] font-semibold ">
              Email <span className="pl-12">:</span>
            </label>
            <input
              value={student.email}
              type="email"
              name="email"
              onChange={handleInput}
              className="border-[2px] w-[380px] h-[50px] pl-3 ml-6 "
            />
          </div>
          <div className="my-[55px]">
            <label className="text-[20px] font-semibold ">
              DOB <span className="pl-14">:</span>
            </label>
            <input
              value={student.dob}
              type="date"
              name="dob"
              onChange={handleInput}
              className="border-[2px] w-[380px] h-[50px] pl-3 ml-6 "
            />
          </div>
          <div className="">
            <label className="text-[20px] font-semibold ">
              Education <span className="pl-1">:</span>
            </label>
            <input
              value={student.education}
              type="email"
              name="education"
              onChange={handleInput}
              className="border-[2px] w-[380px] h-[50px] pl-3 ml-6 "
            />
          </div>
          <div className="mt-[50px] flex">
            <label className="text-[20px] font-semibold block">
              About <span className="pl-10">:</span>
            </label>
            <div className="flex items-center ">
              <textarea
                className="border-[2px] w-[380px] h-[250px] pl-3 pt-3 ml-6 resize-none"
                name="about"
                onChange={handleInput}
              ></textarea>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-[4%] ml-[9%]">
        <Button
          type="submit"
          onClick={handleSubmit}
          sx={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "50px",
            fontSize: "15px",
            fontWeight: "semibold",
            padding: "10px",
            width: "200px",
            height: "50px",
            margin: "10px",
            "&:hover": {
              backgroundColor: "gray",
              color: "black",
              borderRadius: "50px",
              fontSize: "15px",
              fontWeight: "semibold",
              padding: "10px",
              width: "200px",
              height: "50px",
              margin: "10px",
              cursor: "pointer",
            },
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CreateStudent;
