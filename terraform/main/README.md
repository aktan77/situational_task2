### Terraform Variables:

1. **region**
   - Type: string
   - Default: "us-east-1"
   - Description: Specifies the AWS region where resources will be provisioned.

2. **prefix**
   - Type: string
   - Default: "dev"
   - Description: Prefix used for naming resources. Helps differentiate resources for different environments or projects.

3. **pub_key**
   - Type: string
   - Default: "./public.pem"
   - Description: Path to the public key file used for SSH access. This key pair is associated with the AWS Key Pair resource.

4. **env**
   - Type: string
   - Default: "dev"
   - Description: Environment tag used for labeling resources. Helps categorize resources based on the environment they belong to.



### Terraform Provider and Configuration:

- **Terraform Block:**
  - Specifies the required providers and their versions.

- **AWS Provider:**
  - Configures the AWS provider with the specified region from the `region` variable.

### Terraform Output:

- **cluster_name:**
  - Outputs the name of the EKS cluster provisioned by the Terraform configuration. This can be useful for referencing the cluster in subsequent steps or scripts.

### Note:
- Variables marked as sensitive contain confidential information and should be handled securely.
- Ensure proper access control and encryption mechanisms are in place for handling sensitive data.