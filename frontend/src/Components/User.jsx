import { TableCell, TableRow } from "@mui/material";

const User = ({ user }) => {
  return (
    <TableRow
      key={user._id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {user.name}
      </TableCell>
      <TableCell align="right">{user.email}</TableCell>
      <TableCell align="right">{user.role}</TableCell>
      <TableCell align="right">{user._id}</TableCell>
      <TableCell align="right">{user.email}</TableCell>
    </TableRow>
  );
};

export default User;
