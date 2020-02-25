import React, { useState } from "react";
import { Alert } from "reactstrap";

export default function AlertUser({ loaded }) {
    const [visible, setVisible] = useState(true);
  
    const onDismiss = () => setVisible(false);

    if(loaded) {
        return (
            <Alert color="success" isOpen={visible} toggle={onDismiss}>
              Successfully fetched data from the <a href="https://api.nasa.gov/" className="alert-link">NASA API</a>
            </Alert>
          );
        } return (
            <Alert color="danger">
              Error fetching data from the <a href="https://api.nasa.gov/" className="alert-link">NASA API</a>
            </Alert>
        );
    }
