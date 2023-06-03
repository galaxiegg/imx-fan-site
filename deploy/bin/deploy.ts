#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { Galaxie } from "../lib/galaxie";

const app = new cdk.App({
  context: {
    account: "694091393426",
    region: "us-east-1",
  },
});


new Galaxie(app, "prod-galaxie", "prod", {});
new Galaxie(app, "staging-galaxie", "staging", {});

