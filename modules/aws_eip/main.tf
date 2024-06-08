variable "network_interface_id" {
  
}
variable "network_interface_private_ip" {
  
}
variable "instance_id" {
  
}

resource "aws_eip" "aeis_eip" {
  #Set the network interface ID or instance ID or both
  network_interface = var.network_interface_id
  associate_with_private_ip = tolist(var.network_interface_private_ip)[0]
  instance = var.instance_id 
}

output "eip_id" {
  value = aws_eip.aeis_eip.id
  
}