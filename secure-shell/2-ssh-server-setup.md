run
```sh
sudo apt install openssh-server

man sshd_config

sudo shutdown -h now
````

Go to virtual machine config -> network  adapter -> set as network bridge

Boot your machine again

run

```sh
ip addr | grep inet
```

Grab your ip
