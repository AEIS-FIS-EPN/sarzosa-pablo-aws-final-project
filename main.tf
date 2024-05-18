provider "aws" {
  shared_config_files      = ["/Users/pavox20/.aws/config"]
  shared_credentials_files = ["/Users/pavox20/.aws/credentials"]
}

resource "aws_vpc" "fis_vpc" { #Defining the VPC with a specific CIDR block
  cidr_block = "10.0.0.0/16"
}

resource "aws_subnet" "public_subnet" { #Defining the public subnet with a specific CIDR block
  cidr_block = "10.0.1.0/24"
  vpc_id     = aws_vpc.fis_vpc.id
}

resource "aws_subnet" "private_subnet" { #Defining the private subnet with a specific CIDR block
  cidr_block = "10.0.2.0/24"
  vpc_id     = aws_vpc.fis_vpc.id
}

resource "aws_internet_gateway" "fis_public_internet_gateway" { #Defining the internet gateway
  vpc_id = aws_vpc.fis_vpc.id
}

resource "aws_route_table" "fis_public_subnet_route_table" { #Defining the route table for the public subnet, allowing all traffic to the internet
  vpc_id = aws_vpc.fis_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.fis_public_internet_gateway.id
  }

  route {
    ipv6_cidr_block = "::/0"
    gateway_id      = aws_internet_gateway.fis_public_internet_gateway.id
  }
}

resource "aws_route_table_association" "fis_public_association" {
  route_table_id = aws_route_table.fis_public_subnet_route_table.id
  subnet_id      = aws_subnet.public_subnet.id
}

resource "aws_security_group" "web_server_sg" {
  vpc_id = aws_vpc.fis_vpc.id

  ingress {
    description = "Allow HTTP inbound traffic"
    from_port   = 80
    to_port     = 80
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

# Data source to get the latest Amazon Linux 2 AMI ID
data "aws_ami" "ubuntu"{
  most_recent = "true"
  filter {
    name  = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }
  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
  
  owners = ["099720109477"] # Canonical
}

resource "aws_instance" "ubuntu_aeis_instance_ubuntu" {
  ami = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"
  network_interface {
    network_interface_id = aws_network_interface.aeis_network_interface.id
    device_index = 0 //Aquí se define el´índice del dispositivo, mirar la ip de la interfaz de red 0 sería la posición 0
  
  }
  user_data = <<-EOF
              #!bin/bash
              sudo apt update -y
              sudo apt install nginx -y
              sudo systemctl start nginx
              EOF
  tags = {
    Name = "AEIS ubuntu instance"
  }
}

resource "aws_network_interface" "aeis_network_interface" {
  subnet_id = aws_subnet.public_subnet.id
  private_ips       = ["10.0.1.124"]  # Lista de IPs privadas
  security_groups = [aws_security_group.web_server_sg.id]
}

resource "aws_eip" "aeis_eip" {
  network_interface = aws_network_interface.aeis_network_interface.id
  associate_with_private_ip = tolist(aws_network_interface.aeis_network_interface.private_ips)[0]
  instance = aws_instance.ubuntu_aeis_instance_ubuntu.id
}

output "public_aeis_ip" {
  value = aws_eip.aeis_eip.public_ip
}
output "private_aeis_ip" {
  value = aws_network_interface.aeis_network_interface.private_ips
  
}

