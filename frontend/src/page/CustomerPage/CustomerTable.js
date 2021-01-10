import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import {TableBody, TableCell, TableHead} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useTranslation, withTranslation} from "react-i18next";

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  }
});

function CustomerTable(props) {
  const classes = useStyles();
  const {customers} = props;
  const [t, i18n] = useTranslation();


  return (
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableCell>
              <Typography variant="h5" id="tableTitle" component="div">
                ID
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h5" id="tableTitle" component="div">
                {t("Имя")}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h5" id="tableTitle" component="div">
                {t("Возраст")}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h5" id="tableTitle" component="div">
                {t("Почта")}
              </Typography>
            </TableCell>

          </TableHead>
          <TableBody>
            {customers.map(c => (
              <TableRow key={c.id}>

                <TableCell>
                  <Typography variant="h5" id="tableTitle" component="div">
                    {c.id}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography variant="h5" id="tableTitle" component="div">
                    {c.name}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography variant="h5" id="tableTitle" component="div">
                    {c.age}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography variant="h5" id="tableTitle" component="div">
                    {c.email}
                  </Typography>
                </TableCell>
              </TableRow>

            ))}
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default CustomerTable;
