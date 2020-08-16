---
title: "ssh to vagrant machine"
---

I'm using Vagrant to study Ansible. To achieve my goal, I need to be able to access to Vagrant machine (VBox) using SSH.

At first, I use a Vagrantfile as following

```text
IMAGE_NAME = "centos/7"
N = 1

Vagrant.configure("2") do |config|
  config.vm.provider "virtualbox" do |v|
    v.memory = 512
    v.cpus = 1
  end

  config.vm.define "hadoop-master" do |master|
    master.vm.box = IMAGE_NAME
    master.vm.network "private_network", ip: "192.168.51.10"
  end

end
```

When I try ssh to initialized machine with Vagrant's shared private key (located at `~/.vagrant.d/insecure_private_key` by default), I face this error:

```sh
ssh vagrant@192.168.51.10 -i ~/.vagrant.d/insecure_private_key
The authenticity of host '192.168.51.10 (192.168.51.10)' can't be established.
ECDSA key fingerprint is SHA256:HCOHJJfNvD4y3vVDTs4JwAHPhAWAJzEmvoUh7Kx3sm8.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '192.168.51.10' (ECDSA) to the list of known hosts.
vagrant@192.168.51.10: Permission denied (publickey,gssapi-keyex,gssapi-with-mic).
```

Taking look at Vagrant documentation page, I found [this](https://www.vagrantup.com/docs/vagrantfile/ssh_settings#config-ssh-insert_key)

> config.ssh.insert_key (boolean) - By default or if set to true, Vagrant will automatically insert a keypair to use for SSH, replacing Vagrant's default insecure key inside the machine if detected. If you already use private keys for authentication to your guest, or are relying on the default insecure key, this option will not be used. If set to false, Vagrant will not automatically add a keypair to the guest.

I add a line to set the `...ssh.insert_key` variable to false

```text
...
    master.vm.box = IMAGE_NAME
    master.vm.network "private_network", ip: "192.168.51.10"
    master.ssh.insert_key = false
...
```

Destroy current machine and `vagrant up` again. Remove host signed key in `~/.ssh/known_hosts` and enter newly initialized machine with ssh.

```sh
ssh vagrant@192.168.51.10 -i ~/.vagrant.d/insecure_private_key
The authenticity of host '192.168.51.10 (192.168.51.10)' can't be established.
ECDSA key fingerprint is SHA256:RQgQaT8oDw5MqXhZ9qbxi9Fg2sGpKmEoBkGz8XwmT9A.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '192.168.51.10' (ECDSA) to the list of known hosts.
[vagrant@localhost ~]$
```

