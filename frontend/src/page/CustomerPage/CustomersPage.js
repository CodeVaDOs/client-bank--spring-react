import React, {useEffect, useState} from 'react';
import Table from "@material-ui/core/Table";
import {TableBody, TableHead, TableCell} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import {connect} from "react-redux";
import {customerAction} from "../../redux/_actions/CustomerAction";
import {useTranslation, withTranslation} from "react-i18next";
import {accountAction} from "../../redux/_actions/AccountAction";
import CustomerTable from "./CustomerTable";

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

function CustomersPage(props) {
  const {dispatch} = props;

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    dispatch(customerAction.get());
  }, [])

  useEffect(() => {
    if (JSON.stringify(customers) !== JSON.stringify(props.customer.customerList)) {
      setCustomers(props.customer.customerList);
    }
  }, [props.customer])


  return (
    <div>
      <CustomerTable customers={customers}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  const {customer} = state;
  return {
    customer,
  }
}

export default connect(mapStateToProps)(CustomersPage);
