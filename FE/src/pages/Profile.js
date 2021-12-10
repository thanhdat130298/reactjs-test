import React from "react";
import { Link } from "react-router-dom";
import Layout from "layout";
export const Profile = () => {
  return (
    <Layout>
      <Link to="/">Profile</Link>
      <Link to="/login">Profile</Link>
      <Link to="/profile">Profile</Link>
    </Layout>
  );
};
