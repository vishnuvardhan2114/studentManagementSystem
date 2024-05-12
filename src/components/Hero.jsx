import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { Link } from "react-router-dom";

const Hero = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const handleDelete = (id) => {
    setSelectedStudentId(id);
    setOpen(true);
  };

  const confirmDelete = () => {
    if (selectedStudentId) {
      axios
        .delete(`http://localhost:8081/delete/${selectedStudentId}`)
        .then(() => {
          console.log("Record deleted successfully");
          location.reload();
        })
        .catch((err) => {
          if (err.response) {
            console.log(
              "Server responded with status code:",
              err.response.status
            );
          } else if (err.request) {
            console.log("No response received from server");
          } else {
            console.log("Error:", err.message);
          }
        });
    }
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const rows = data.map((student, index) => (
    <React.Fragment key={index}>
      <tr className="h-[180px]">
        <td className="text-center">{student.student_id}</td>
        <td className="text-center">{student.first_name}</td>
        <td className="text-center">{student.last_name}</td>
        <td className="text-center">{student.location}</td>
        <td className="text-center">
          <a href={"mailto:" + student.email}>{student.email}</a>
        </td>
        <td className="text-center">{student.dob}</td>
        <td className="text-center">{student.education}</td>
        <td className="text-center">
          <Link
            to={`/update-student/${student.student_id}`}
            sx={{ backgroundColor: "white", color: "black" }}
          >
            <EditIcon />
            Edit
          </Link>
        </td>
        <td className="text-center">
          <Button
            onClick={() => handleDelete(student.student_id)}
            sx={{ backgroundColor: "white", color: "black" }}
          >
            <DeleteIcon />
            Delete
          </Button>
        </td>
      </tr>
      <tr>
        <td colSpan="8">
          <hr />
        </td>
      </tr>
    </React.Fragment>
  ));

  return (
    <div className="pl-16">
      <table className="w-full border-2 border-b-0 rounded-lg mt-14">
        <thead>
          <tr>
            <th className="py-10 px-2">ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Education</th>
            <th>Action</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tr>
          <td colSpan="9">
            <hr />
          </td>
        </tr>
        <tbody>{rows}</tbody>
      </table>
      <Dialog open={open} onClose={handleClose}>
        <div className="bg-[#717171] ">
          <DialogTitle>
            <DeleteIcon
              fontSize="large"
              sx={{ fontSize: "450%", marginLeft: "65px" }}
            />
          </DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ color: "white" }}>
              Are you sure you want to delete
            </DialogContentText>
          </DialogContent>
          <DialogActions style={{ marginTop: "-10px" }}>
            <Button
              sx={{
                backgroundColor: "#C4C4C4",
                width: "75%",
                color: "white",
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                },
              }}
              onClick={handleClose}
              color="primary"
            >
              Cancel
            </Button>
            <Button
              sx={{
                backgroundColor: "#C4C4C4",
                width: "75%",
                color: "white",
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                },
              }}
              onClick={confirmDelete}
              color="primary"
              autoFocus
            >
              Confirm
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default Hero;
