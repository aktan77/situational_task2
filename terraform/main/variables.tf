variable "region" {
  type = string
  default = "us-east-1"
}

variable "prefix" {
  type    = string
  default = "st2"
}

variable "pub_key" {
  description = "your pub key"
  sensitive   = true
  default     = "./public.pem"
}

variable "env" {
  type    = string
  default = "dev"
}

