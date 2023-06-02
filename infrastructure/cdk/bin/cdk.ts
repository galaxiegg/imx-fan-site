#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { Galaxie } from '../lib/galaxie';

const app = new cdk.App();
new Galaxie(app, 'Galaxie', {
});