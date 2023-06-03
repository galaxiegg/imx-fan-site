import { Construct } from "constructs";
import * as cdk from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import * as acm from "aws-cdk-lib/aws-certificatemanager";
export class Galaxie extends cdk.Stack {
  constructor(scope: Construct, id: string, deployEnv: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const env = deployEnv

    const bucket = new s3.Bucket(this, `${env}-galaxie-bucket`, {
      websiteIndexDocument: "index.html",
      publicReadAccess: true,
      blockPublicAccess: new s3.BlockPublicAccess({
        blockPublicAcls: false,
        ignorePublicAcls: false,
        blockPublicPolicy: false,
        restrictPublicBuckets: false,
      }),
    });

    const certificateArn =
      "arn:aws:acm:us-east-1:694091393426:certificate/26250a90-1607-47eb-b46a-305642f00a65";
    const certificate = acm.Certificate.fromCertificateArn(
      this,
      `${env}-galaxie-cert`,
      certificateArn
    );

    const distribution = new cloudfront.CloudFrontWebDistribution(
      this,
      `${env}-galaxie-distribution`,
      {
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: bucket,
            },
            behaviors: [
              {
                isDefaultBehavior: true,
                defaultTtl: cdk.Duration.seconds(0),
                maxTtl: cdk.Duration.seconds(0)
              },
            ],
          },
        ],
        viewerCertificate: cloudfront.ViewerCertificate.fromAcmCertificate(
          certificate,
          {
            aliases:
              env === "prod"
                ? ["galaxie.gg", "www.galaxie.gg"]
                : ["staging.galaxie.gg"],
          }
        ),
      }
    );

    new s3deploy.BucketDeployment(this, `${env}-galaxie-s3-deploy`, {
      sources: [s3deploy.Source.asset("../dist")],
      destinationBucket: bucket,
      distribution,
      distributionPaths: ["/*"],
    });

    new cdk.CfnOutput(this, `${env}-cloudfront-domain-name`, {
      value: distribution.distributionDomainName,
    });
  }
}
