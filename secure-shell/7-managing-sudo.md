# Manage visudo at /etc/sudoers.d/my-sudoers

In this example, we are giving for ariel the nginx permissions into our server


> sudo visudo -f /etc/sudoers.d/my-sudoers

The following conf give ariel the nginx privileges

```
ariel ALL=/etc/init.d/nginx status, /etc/init.d/nginx realod, /etc/init.d/nginx restart, /etc/init.d/nginx start, /etc/init.d/nginx stop 
```

You can also use alias for commands using Cmnd_Alias and User_Alias
Following the conf belllow

```
User_Alias WEBMASTERS=ariel

Cmnd_Alias WEB=/etc/init.d/nginx status, /etc/init.d/nginx realod, /etc/init.d/nginx restart, /etc/init.d/nginx start, /etc/init.d/nginx stop

WEBMASTERS  ALL=WEB
````


You can see more info at /var/log/auth.log

