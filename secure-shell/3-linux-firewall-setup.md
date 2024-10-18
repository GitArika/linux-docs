To see your firewall status run:

> sudo ufw status

Allow ssh 

> sudo ufw allow ssh

Default deny incoming

> sudo ufw default deny incoming

Default allow outgoing

> sudo ufw default allow outgoing

Enable your firewall

> sudo ufw enable

To see your firewall status run:

> sudo ufw status

Or use verbose to see more details

> sudo ufw status verbose

Then you can start ssh service, run

> sudo service ssh start

Check your service status

> sudo service ssh status


