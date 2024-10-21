Create a file in /etc/sysctl.d named 99-my-disable-ipv6.conf

> sudo /etc/sysctl.d/99-my-disable-ipv6.conf

Past the content bellow

```
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
net.ip6.conf.lo.disable_ipv6 = 1
```

Restart procps service

> sudo service procps reload

Ensure that ipv6 is disabled

>  cat /proc/sys/net/ipv6/conf/all/disable_ipv6

That will propmt 1 if ipv6 is disabled

Disable ipv6 in ufw

> sudo vim /etc/default/ufw

change line where says:
> IPV6=yes
to
> IPV6=no

restart ufw
> sudo service ufw stop
> sudo service ufw start
> sudo ufw status
