variable "vpc_id" {
  
}



output "subnet_ids" {
  value = {
    public_subnet_id  = aws_subnet.public_subnet.id
    private_subnet_id = aws_subnet.private_subnet.id
  }
  
}