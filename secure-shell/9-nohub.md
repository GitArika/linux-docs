# Nohup - command immune to hangups, with output to a non-tty

Just for example let's write a sh program sleep4.sh

```
#!/bin/bash
echo "I'm sleeping for 4 seconds..."
sleep 4
echo "I'm awake now!"
```

Give it running privileges

> chmod +x sleep4.sh

Then let's run it using bash

> bash sleep4.sh

Then let's run it using nohup and bash

> nohup bash sleep4.sh

That will create a nohup.out file in our directory

> cat nohup.out

```
I'm sleeping for 4 seconds...
I'm awake now!
```

You can also redirect nohup output to a custom file 

> nohup bash sleep4.sh > myoutput.txt

Nohup also allows you to run programs in background using & 

> nohup bash sleep4.sh >> myoutput.txt &