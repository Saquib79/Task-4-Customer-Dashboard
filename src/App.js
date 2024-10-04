import React, { useState } from 'react';
import './App.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

const App = () => {
  const [selected, setSelected] = useState([]); // To track selected rows
  const [searchQuery, setSearchQuery] = useState(''); // To track search input

  // Define the initial data (can be fetched from an API)
  const [customers,] = useState([
    { id: 1, name: "Branson Weimann", lastSeen: "08/08/2020", orders: 2, totalSpent: "$295.31", latestPurchase: "27/11/2019 @ 13:12:25", news: true, segments: "Regular" },
    { id: 2, name: "Anna Bruen", lastSeen: "08/08/2020", orders: 3, totalSpent: "$647.91", latestPurchase: "07/06/2020 @ 07:48:18", news: false, segments: "" },
    { id: 3, name: "Gudrun Tromp", lastSeen: "08/08/2020", orders: 3, totalSpent: "$0.00", latestPurchase: "", news: true, segments: "" },
    { id: 4, name: "Florencio Roob", lastSeen: "08/08/2020", orders: 0, totalSpent: "$0.00", latestPurchase: "", news: false, segments: "" },
    { id: 5, name: "Maddison Torp", lastSeen: "08/08/2020", orders: 0, totalSpent: "$0.00", latestPurchase: "", news: true, segments: "" },
    { id: 6, name: "Rashawn Beer", lastSeen: "08/08/2020", orders: 3, totalSpent: "$693.50", latestPurchase: "19/05/2020 @ 10:03:18", news: true, segments: "" },
    { id: 7, name: "Beth Hill", lastSeen: "08/08/2020", orders: 0, totalSpent: "$0.00", latestPurchase: "", news: true, segments: "" },
    { id: 8, name: "Brandyn Hoeger", lastSeen: "08/08/2020", orders: 0, totalSpent: "$0.00", latestPurchase: "", news: true, segments: "" },
    { id: 9, name: "Rey Schuster", lastSeen: "08/08/2020", orders: 0, totalSpent: "$0.00", latestPurchase: "", news: true, segments: "" },
    { id: 10, name: "Jakob Armstrong", lastSeen: "08/08/2020", orders: 0, totalSpent: "$0.00", latestPurchase: "", news: true, segments: "" },
    { id: 11, name: "Janea Glover", lastSeen: "08/08/2020", orders: 0, totalSpent: "$0.00", latestPurchase: "", news: true, segments: "Regular" },
    { id: 12, name: "Dina Tillman", lastSeen: "08/08/2020", orders: 0, totalSpent: "$0.00", latestPurchase: "", news: true, segments: "" },
  ]);

  // Handle selecting a row
  const handleSelect = (id) => {
    setSelected(prev =>
      prev.includes(id)
        ? prev.filter(selectedId => selectedId !== id)
        : [...prev, id]
    );
  };

  const isSelected = (id) => selected.includes(id);

  // Filter customers based on the search query
  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Customer Dashboard</h1>

      {/* Search Input */}
      <TextField
        label="Search Customer"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: '20px' }}
      />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Select</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell align="center">Last Seen</TableCell>
              <TableCell align="center">Orders</TableCell>
              <TableCell align="center">Total Spent</TableCell>
              <TableCell align="center">Latest Purchase</TableCell>
              <TableCell align="center">News</TableCell>
              <TableCell align="center">Segments</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCustomers.map((customer) => (
              <TableRow key={customer.id} selected={isSelected(customer.id)}>
                <TableCell>
                  <Checkbox
                    checked={isSelected(customer.id)}
                    onChange={() => handleSelect(customer.id)}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {customer.name}
                </TableCell>
                <TableCell align="center">{customer.lastSeen}</TableCell>
                <TableCell align="center">{customer.orders}</TableCell>
                <TableCell align="center">{customer.totalSpent}</TableCell>
                <TableCell align="center">{customer.latestPurchase || '-'}</TableCell>
                <TableCell align="center">
                  <Checkbox checked={customer.news} disabled />
                </TableCell>
                <TableCell align="center">{customer.segments || '-'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
