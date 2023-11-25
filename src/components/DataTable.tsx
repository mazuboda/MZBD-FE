import { Box } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: '', width: 150, headerAlign: "center", headerClassName: 'super-app-theme--header', align: "center" },
  { field: 'orderName', headerName: '주문명', width: 200, headerAlign: "center", headerClassName: 'super-app-theme--header', align: "center" },
  { field: 'quantity', headerName: '수량', width: 100, headerAlign: "center", headerClassName: 'super-app-theme--header', align: "center" },
  {
    field: 'amount',
    headerName: '상품금액',
    type: 'number',
    width: 130,
    headerAlign: "center",
    headerClassName: 'super-app-theme--header',
    align: "center"
  },
  {
    field: 'discount',
    headerName: '할인/적립',
    type: 'number',
    width: 130,
    headerAlign: "center",
    headerClassName: 'super-app-theme--header',
    align: "center"
  },
  {
    field: 'total',
    headerName: '합계금액',
    type: 'number',
    width: 130,
    headerAlign: "center",
    headerClassName: 'super-app-theme--header',
    align: "center"
  },
  {
    field: 'delivery',
    headerName: '배송비',
    type: 'number',
    width: 130,
    headerAlign: "center",
    headerClassName: 'super-app-theme--header',
    align: "center"
  },
];

const rows = [
  { id: 1, orderName: '생일케이크', quantity: 1, amount: 31000, discount: 3000, total: 28000, delivery: 3500 },
  { id: 2, orderName: '생일케이크', quantity: 1, amount: 31000, discount: 3000, total: 28000, delivery: 3500 },
  { id: 3, orderName: '생일케이크', quantity: 1, amount: 31000, discount: 3000, total: 28000, delivery: 3500 },
  { id: 4, orderName: '생일케이크', quantity: 1, amount: 31000, discount: 3000, total: 28000, delivery: 3500 },
  { id: 5, orderName: '생일케이크', quantity: 1, amount: 31000, discount: 3000, total: 28000, delivery: 3500 },
  { id: 6, orderName: '생일케이크', quantity: 1, amount: 31000, discount: 3000, total: 28000, delivery: 3500 },
  { id: 7, orderName: '생일케이크', quantity: 1, amount: 31000, discount: 3000, total: 28000, delivery: 3500 },
  { id: 8, orderName: '생일케이크', quantity: 1, amount: 31000, discount: 3000, total: 28000, delivery: 3500 },
  { id: 9, orderName: '생일케이크', quantity: 1, amount: 31000, discount: 3000, total: 28000, delivery: 3500 },
];

export default function DataTable() {
  return (
    <Box sx={{
      height: "639px",
      width: '100%',
      borderTop: "2px #FF679D solid",
    }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </Box>
  );
}