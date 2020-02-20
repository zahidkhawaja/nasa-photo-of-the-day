import React, { useState } from "react";
import { Alert } from "reactstrap";

export default function AlertUser() {
    const [visible, setVisible] = useState(true);
  
    const onDismiss = () => setVisible(false);
  
    return (
      <Alert color="success" isOpen={visible} toggle={onDismiss}>
        The data on this page is being fetched from the <a href="https://api.nasa.gov/" className="alert-link">NASA API</a>
      </Alert>
    );
  };