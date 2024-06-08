variable "vpc_id" {
  
}

resource "aws_security_group" "web_server_sg" {
  vpc_id = var.vpc_id

  ingress {
    description = "Allow HTTP inbound traffic"
    //Rango de puertos de 80 a 80 entr
    from_port   = 80 //Desde el puerto 80
    to_port     = 80 //Hasta el puerto 80 
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Allow HTTP inbound traffic"
    cidr_blocks = ["0.0.0.0/0"]
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"

  }

  egress {
    description = "Allow all outbound traffic"
    from_port   = 0 # All ports
    to_port     = 0
    protocol    = "-1" # All protocols
    cidr_blocks = ["0.0.0.0/0"]

  }
  tags = {
    Name = "aeis security group"
  }
}

output "security_group_id" {
  value = aws_security_group.web_server_sg.id
  
}