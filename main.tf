provider "aws" {
  shared_config_files      = ["~/.aws/config"]
  shared_credentials_files = ["~/.aws/credentials"]
}

module "vpc" {
  source = "./modules/aws_vpc"
}

module "subnet" {
  source = "./modules/aws_subnet"
  vpc_id = module.vpc.fis_vpc_id
  depends_on = [module.vpc]
}

module "security_groups" {
  source = "./modules/aws_security_group"
  vpc_id = module.vpc.fis_vpc_id
  depends_on = [ module.vpc ]
}

module "ubuntu_ami" {
  source = "./modules/aws_ami"
}

module "network_interface" {
  source = "./modules/aws_network_interface"
  public_subnet_id = module.subnet.public_subnet_id
  security_group_id = module.security_groups.security_group_id
  depends_on = [module.subnet, module.security_groups]
}


module "ubuntu_instance" {
  source = "./modules/aws_instance"
  ami_id = module.ubuntu_ami.ubuntu
  network_interface_id = module.network_interface.network_interface_id
  depends_on = [ module.network_interface ]
}

module "eip" {
  source = "./modules/aws_eip"
  network_interface_id = module.network_interface.network_interface_id
  network_interface_private_ip = module.network_interface.private_ips
  instance_id = module.ubuntu_instance.ubuntu_instance_id
  depends_on = [module.ubuntu_instance]
}
module "ecr" {
  source = "./modules/aws_ecr"
  
}

output "public_aeis_ip" {
  value = module.eip.eip_id
}
output "private_aeis_ip" {
  value = module.network_interface.private_ips
  
}
output "url_ecr_repository_aeis" {
  value = module.ecr.url_ecr_repository_aeis
  
}

