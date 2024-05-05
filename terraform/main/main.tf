resource "aws_key_pair" "deployer" {
  key_name   = var.prefix
  public_key = file("${var.pub_key}")

  tags = {
    Name = "${var.prefix}-key-pair"
  }
}
module "vpc" {
  source = "../modules/vpc"

  prefix          = var.prefix
  vpc_cidr_block  = "192.168.0.0/16"
  public_subnets  = 1
  private_subnets = 2
  public_cidrs    = ["192.168.1.0/24"]
  private_cidrs   = ["192.168.3.0/24", "192.168.4.0/24"]
  env_tag         = var.env
}
module "eks" {
  source = "../modules/eks"


  cluster_name  = "${var.env}-eks"
  prefix        = var.prefix
  subnet_ids    = module.vpc.private_subnets
  vpc_id        = module.vpc.vpc_id
  instance_type = "t3.medium"
  key_name      = aws_key_pair.deployer.key_name
}


