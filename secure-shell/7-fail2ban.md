sudo apt install fail2ban

> sudo vim /etc/fail2ban/jail.local

```
[DEFAULT]
# Ban hosts for one hour:
bantime = 3600

# Override /etc/fail2ban/jail.d/00-firewalld.conf:
banaction = iptables-multiport

[sshd]
enabled = true
```

> sudo service fail2ban start

> sudo fail2ban-client status sshd