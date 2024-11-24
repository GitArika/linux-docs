# Nohup - command immune to hangups, with output to a non-tty

Just for example let's write a sh program sleep4.sh

```sh
vim sleep4.sh
```

## Past the following content in the file
```
#!/bin/bash
echo "I'm sleeping for 4 seconds..."
sleep 4
echo "I'm awake now!"
```

## Give it running privileges

```sh
chmod +x sleep4.sh
```

Then let's run it using bash

```sh
bash sleep4.sh
```

Then let's run it using nohup and bash

```sh
nohup bash sleep4.sh
```

That will create a nohup.out file in our directory

```sh
cat nohup.out
```

```
# Output
I'm sleeping for 4 seconds...
I'm awake now!
```

You can also redirect nohup output to a custom file 

```sh
nohup bash sleep4.sh > myoutput.txt
```

Nohup also allows you to run programs in background using & 

```sh
nohup bash sleep4.sh >> myoutput.txt &
```