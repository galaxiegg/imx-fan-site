import React from "react";
import Layout from "../components/common/layouts/layout";
import {Paths} from "../router/paths";
import {Login} from "../components/auth/login";
import HeroLayout from "../components/landing-components/hero-layout";

export const LoginPage = () => {
  return (
    <Layout>
      <HeroLayout>
        <Login redirectOnLogin={Paths.toHome()}/>
      </HeroLayout>
    </Layout>
  );
};
