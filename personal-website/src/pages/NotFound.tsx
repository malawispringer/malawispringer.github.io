import React from "react"
import { Link } from "react-router-dom"

const NotFoundPage: React.FC = () => {
    return (
      <div>
        <h1>This Page does not exist</h1>
        <Link to="/">Go to Home</Link>
      </div>
    );
  };
  
  export default NotFoundPage;
