import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { jobData } from "../../../../utils/jobData";
import TableCard from "./TableCard";

const rows = [];

export default function JobTable() {
  return (
    <TableContainer component={Paper} className="rounded-xl">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="bg-background2">
          <TableRow>
            <TableCell>Job</TableCell>
            <TableCell align="center">Applications</TableCell>
            <TableCell align="center">Created</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="bg-primary">
          {jobData.slice(0, 6).map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <TableCard
                  image={row.image}
                  name={row.jobTitle}
                  company={row.company}
                  location={row.location}
                />
              </TableCell>
              <TableCell align="center">{row.applied}</TableCell>
              <TableCell align="center">{row.deadline}</TableCell>
              <TableCell align="center">
                {row.isActive ? "Active" : "Inactive"}
              </TableCell>
              <TableCell align="center">
                <div className="flex gap-3 justify-between">
                  <button className="text-blue-700 bg-blue-100 hover:bg-blue-200 p-2 rounded-xl">
                    View
                  </button>
                  <button className="text-yellow-700 bg-yellow-100 hover:bg-yellow-200 p-2 rounded-xl">
                    Edit
                  </button>
                  <button className="text-red-700 bg-red-100 hover:bg-red-200 p-2 rounded-xl">
                    Delete
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
