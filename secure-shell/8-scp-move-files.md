# SCP - Remote file copy program

## Downloading a file from remote server

```sh
scp user@ip-address:/file /home/username/file
```

## Uploading a file from remote server

```sh
scp /home/username/file user@ip-address:/file
```

## Downloading a directory from remote server

```sh
scp -r user@ip-address:/dir /home/username/dir
```

## Uploading a directory from remote server

```sh
scp -r /home/username/dir user@ip-address:/dir
```

## Download a file from a remote server to another

```sh
scp -3 user@ip-address:/file another-user@another-ip-address:/file
```

## Upload a file from a remote server to another

```sh
scp -3 user@ip-address:/file another-user@another-ip-address:/file
```