import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "estimator",
      status: "Read Only",
    }
  ]);

  const [selectedUser, setSelectedUser] = useState({
    name: "",
    email: "",
    role: "estimator",
    status: "Read Only",
  });

  const [showNewUserForm, setShowNewUserForm] = useState(false);

  const handleInputChange = (field) => (event) => {
    setSelectedUser({ ...selectedUser, [field]: event.target.value });
  };

  const handleDeleteUser = () => {
    console.log("Deleting user:", selectedUser);
  };

  const handleAddNewUser = () => {
    setShowNewUserForm(!showNewUserForm);
  };

  const handleCancelNewUser = () => {
    setSelectedUser({
      name: "",
      email: "",
      role: "estimator",
      status: "Read only",
    });
    setShowNewUserForm(false);
  };

  const handleSaveNewUser = () => {
    setUsers([...users, { ...selectedUser, id: users.length + 1 }]);
    setSelectedUser({
      name: "",
      email: "",
      role: "estimator",
      status: "Read Only",
    });
    setShowNewUserForm(false);
  };

  const handleRoleChange = (userId) => (event) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, role: event.target.value } : user
    );
    setUsers(updatedUsers);
  };

  const handleStatusChange = (userId) => (event) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, status: event.target.value } : user
    );
    setUsers(updatedUsers);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >

      <TableContainer component={Box} mt={4}>
        <Table>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell><Avatar src="/broken-image.jpg" /></TableCell>
                <TableCell>
                  <Typography>{user.name}</Typography>
                  <Typography variant="caption">{user.email}</Typography>
                </TableCell>
                <TableCell>
                  <FormControl variant="outlined" size="small">
                    <InputLabel>Role</InputLabel>
                    <Select
                      value={user.role}
                      onChange={handleRoleChange(user.id)}
                      label="Role"
                    >
                      <MenuItem value="estimator">Estimator</MenuItem>
                      <MenuItem value="estimatee">Estimatee</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell >
                  <FormControl variant="outlined" size="small" >
                    <InputLabel >Status</InputLabel>
                    <Select
                      value={user.status}
                      onChange={handleStatusChange(user.id)}
                      label="Status"
                      // sx={{
                      //   color: user.status === "Full Access" ? '#66bb6a' : '#f44336',
                      // }}
                    >
                      <MenuItem value="Full Access">Full Access</MenuItem>
                      <MenuItem value="Read Only">Read Only</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <Button
                    sx={{ color: 'rgba(0, 0, 0, 1)' }}
                    onClick={handleDeleteUser}
                  >
                    <Delete></Delete>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {!showNewUserForm ? (
        <Button variant="contained" size="large" sx={{width:'85%', marginTop:'20px', marginLeft:'0px'}} color="primary" onClick={handleAddNewUser} fullWidth>
          Add New User
        </Button>
      ) : (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'space-evenly', padding: '20px', gap:'20px', width:'100%' }}>
            <Box sx={{display:'flex',flexDirection:'column' ,gap:'20px'}}>
              <TextField
                label="Name"
                size='small'
                variant="outlined"
                value={selectedUser.name}
                onChange={handleInputChange('name')}
                fullWidth
                  mb={2}
                  sx={{width:'400px'}}
              />
  
              <TextField
                label="Email"
                size='small'
                variant="outlined"
                value={selectedUser.email}
                onChange={handleInputChange('email')}
                fullWidth
                mb={2}
              />
            </Box>

            <Box sx={{display:'flex',flexDirection:'column' ,gap:'20px'}}>
              <FormControl fullWidth variant="outlined" mb={2} size='small'>
                <InputLabel>Role</InputLabel>
                <Select value={selectedUser.role} onChange={handleInputChange('role')} label="Role">
                  <MenuItem value="estimator">Estimator</MenuItem>
                  <MenuItem value="estimatee">Estimatee</MenuItem>
                </Select>
              </FormControl>
  
              <FormControl fullWidth variant="outlined" mb={2} size='small'>
                <InputLabel>Status</InputLabel>
                <Select value={selectedUser.status} onChange={handleInputChange('status')} label="Status">
                  <MenuItem value="enabled">Enabled</MenuItem>
                  <MenuItem value="disabled">Disabled</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Box sx={{display:'flex', gap:'20px'}}>
            <Button variant="contained" color="primary" onClick={handleSaveNewUser} fullWidth >
              Save
            </Button>
  
            <Button  variant="outlined" color="error" onClick={handleCancelNewUser} fullWidth >
              Cancel
            </Button>
          </Box>
        </>
      )}

    </Box>
  );
};

export default UserManagement;
