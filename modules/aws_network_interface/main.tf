variable "public_subnet_id" {
  
}

variable "security_group_id" {
  
}

resource "aws_network_interface" "aeis_network_interface" {
  subnet_id        = var.public_subnet_id
  private_ips       = ["10.0.1.124"]  # Lista de IPs privadas
  security_groups = [var.security_group_id]
}

output "network_interface_id" {
  value = aws_network_interface.aeis_network_interface.id
  
}
output "private_ips" {
  value = aws_network_interface.aeis_network_interface.private_ips
  
}