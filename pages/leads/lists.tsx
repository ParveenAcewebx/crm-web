import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import LeadAddHeader from "./add/header";
import Layout from "../../src/Layout/layout";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ListHeader from "./header";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FilterLeadForm from "../../src/components/shared/leadsForm/filterLeadForm";
const Leadlists = () => {
  const [getData, setGetData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://jsonplaceholder.typicode.com/users"
      );
      setGetData(response.data);
    } catch (err: any) {}
  };

  useEffect(() => {
    fetchData();
  }, []);
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      renderCell: (params) => {
        return params.formattedValue.city;
      },
    },
    { field: "phone", headerName: "Phone", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      sortable: false,
      filterable: false,
      hideable: false,
      renderCell: (params) => {
        const actions = (
          <>
            <ul className="flex list-none flex-row space-x-4 text-sky-600 p-0">
              <li>
                <Link href={`/leads/view/${params.row.id}`}>
                  <VisibilityOutlinedIcon />
                </Link>
              </li>

              <li>
                <Link href={`/leads/edit/${params.row.id}`}>
                  <CreateOutlinedIcon />
                </Link>
              </li>
              <li>
                <Link href={`#`}>
                  <DeleteOutlineOutlinedIcon />
                </Link>
              </li>
            </ul>
          </>
        );
        return actions;
      },
    },
  ];

  const rows = getData.map((item) => {
    return item;
  });

  return (
    <Layout commonHeader={<ListHeader />}>
      <Box className="w-full py-10 ">
        <FilterLeadForm />
        <div className="h-150">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            // checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </Box>
    </Layout>
  );
};

export default Leadlists;
