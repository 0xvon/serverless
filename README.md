# Serverless Infrastructure CF Template

This is CloudFormation Template for Serverless Framework (API Gateway + Lambda) Infrastructure.

## Environment

- API Gateway
- Lambda

## How to Use

### 1.set your environment variables on .env

.env
```
APP_NAME=sample-serverless-api
TEMPLATE_BUCKET=sample-bucket
```

### 2.login with your AWS account

```
$ aws configure
```

### 3.deploy your service

ENV ... prd | something

```
$ sh deploy ENV
```

### 4. Go To your console and Try it!

enjoy serverless life!