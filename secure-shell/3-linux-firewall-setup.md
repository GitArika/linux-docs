To see your firewall status run:

```sh
sudo ufw status
```

Allow ssh 

```sh
sudo ufw allow ssh
```

Default deny incoming

```sh
sudo ufw default deny incoming
```

Default allow outgoing

```sh
sudo ufw default allow outgoing
```

Enable your firewall

```sh
sudo ufw enable
```

To see your firewall status run:

```sh
sudo ufw status
```

Or use verbose to see more details

```sh
sudo ufw status verbose
```

Then you can start ssh service, run

```sh
sudo service ssh start
```

Check your service status

```sh
sudo service ssh status
```

