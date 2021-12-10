import React from "react";
import { Link } from "react-router-dom";
import Layout from "layout";
export const Home = () => {
  return (
    <Layout>
      <Link to="/">Home</Link>
      <Link to="/login">Logout</Link>
      <Link to="/profile">Profile</Link>
    </Layout>
  );
};
