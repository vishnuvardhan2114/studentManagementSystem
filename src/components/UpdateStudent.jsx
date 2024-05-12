import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8081/read/${id}`)
      .then((res) => {
        console.log(res);
        const data = res.data;
        if (data && data.Message) {
          console.log("Error from server:", data.Message);
        } else {
          const studentData = data[0];
          setValues({
            ...values,
            first_name: studentData.first_name || "",
            last_name: studentData.last_name || "",
            email: studentData.email || "",
            dob: studentData.dob || "",
            education: studentData.education || "",
            location: studentData.location || "",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    location: "",
    email: "",
    dob: "",
    education: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8081/update/" + id, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="ml-[6%]  bg-white">
      <div className="pb-3 mt-[4%] mb-[6%]">
        <h1 className="text-center text-3xl font-bold ">
          Update Student Details
        </h1>
      </div>
      <div className="pl-2">
        <form className="flex flex-wrap">
          <div className="">
            <label className="text-[20px] font-semibold ">First Name : </label>
            <input
              type="text"
              name="first_name"
              value={values.first_name}
              className="border-[2px] w-[380px] h-[50px] pl-3 ml-4 "
              onChange={handleInput}
            />
          </div>
          <div className="pl-[18%]">
            <label className="text-[20px] font-semibold ">Last Name : </label>
            <input
              value={values.last_name}
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
              value={values.location}
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
              value={values.email}
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
              value={values.dob}
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
              value={values.education}
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
              <textarea className="border-[2px] w-[380px] h-[250px] pl-3 pt-3 ml-6 resize-none"></textarea>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-[4%] ml-[9%]">
        <Button
          type="submit"
          onClick={handleUpdate}
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
          Update
        </Button>
      </div>
    </div>
  );
};

export default UpdateStudent;
