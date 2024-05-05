output "cluster_sg_id" {
  value = aws_security_group.cluster.id
}
output "cluster_name" {
  value = aws_eks_cluster.cluster.name
}