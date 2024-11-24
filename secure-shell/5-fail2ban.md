# Install fail2ban

```sh
sudo apt install fail2ban
```

# Edit the jail file
```sh
sudo vim /etc/fail2ban/jail.local
```

# Insert the following content at the file

```
[DEFAULT]
# Ban hosts for one hour:
bantime = 3600

# Override /etc/fail2ban/jail.d/00-firewalld.conf:
banaction = iptables-multiport

[sshd]
enabled = true
```

```sh
sudo service fail2ban start
```

```sh
sudo fail2ban-client status sshd
```