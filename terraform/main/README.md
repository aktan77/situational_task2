Here's a documentation template for the provided Jenkins pipeline:

---

# Jenkins Pipeline Documentation

## Overview

This Jenkins pipeline automates the deployment and management of infrastructure using Terraform. It provides options for initializing Terraform, generating a plan, obtaining approval, and applying changes. Additionally, it supports the destruction of infrastructure if required.

## Requirements

- Jenkins server with Pipeline support.
- Terraform installed on the Jenkins server.
- AWS credentials configured in Jenkins for Terraform operations.
- Proper Terraform configurations and scripts.

## Pipeline Structure

The pipeline consists of several stages:

### 1. Agent Declaration

```groovy
agent any
```

Specifies that the pipeline can execute on any available Jenkins agent.

### 2. Parameters

- **environment**: Workspace/environment file to use for deployment.
- **autoApprove**: Automatically run apply after generating plan.
- **destroy**: Destroy Terraform build.

### 3. Stages

#### a. Terraform Init Stage

Initializes Terraform in the specified workspace/environment.

#### b. Terraform Plan Stage

Generates a Terraform plan, unless the `destroy` parameter is set to true.

#### c. Approval Stage

Obtains approval before applying the plan, unless `autoApprove` or `destroy` is set to true.

#### d. Terraform Apply Stage

Applies the Terraform plan, unless the `destroy` parameter is set to true.

#### e. Destroy Stage

Destroys the Terraform infrastructure if the `destroy` parameter is set to true.

## Usage

1. Create a Jenkins job and configure it to use this pipeline script.
2. Set up the required parameters according to your environment and requirements.
3. Ensure that Terraform configurations are correctly set up in your repository.
4. Run the Jenkins job and provide necessary inputs when prompted.