variable "ami_id" {
  
}
variable "network_interface_id" {
  
}

resource "aws_instance" "ubuntu_aeis_instance_ubuntu" {
  ami = var.ami_id
  instance_type = "t2.micro"
  network_interface {
    network_interface_id = var.network_interface_id
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

output "ubuntu_instance_id" {
  value = aws_instance.ubuntu_aeis_instance_ubuntu.id
  
}