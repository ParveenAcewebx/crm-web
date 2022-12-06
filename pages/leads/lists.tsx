import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import LeadAddHeader from "./add/header";
import Layout from "../../src/Layout/layout";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import Link from "next/link";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ListHeader from "./header";
const Leadlists = () => {
  const [getData, setGetData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://jsonplaceholder.typicode.com/posts"
      );
      setGetData(response.data);
    } catch (err: any) {
      console.log("err", err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 240 },
    { field: "title", headerName: "Title", width: 240 },
    { field: "body", headerName: "Message", width: 240 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      sortable: false,
      filterable: false,
      hideable: false,
      renderCell: (params) => {
        return (
          <>
            {" "}
            <Button>
              <Link href={`/leads/edit/${params.row.id}`}>
                <CreateOutlinedIcon />
              </Link>
            </Button>
            <Button>
              <Link href={`/leads/delete/${params.row.id}`}>
                <DeleteOutlineOutlinedIcon />
              </Link>
            </Button>
          </>
        );
      },
    },
  ];

  const rows = getData.map((item) => {
    return item;
  });

  return (
    <Layout commonHeader={<ListHeader />}>
      <Box className="w-full py-10 ">
        <div style={{ height: 600, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
          />
        </div>
      </Box>
    </Layout>
  );
};

export default Leadlists;
