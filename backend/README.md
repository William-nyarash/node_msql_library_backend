

## connection issues

when you run into  this

- The "Client does not support authentication protocol requested by server" 
- or your  routes are not working as expected (` the ones that connect to mysql database`)
first of all dont panic

### solution
 if you are using  `mysql-client` , `dbeaver-ce`,`mysql work bench` the command is the same 
    
run the below script / command

```sql 
             alter user '<new_user>'@'localhost' identified with mysql_native_password by 'password';
             -- please remember to change the <password> field and the <new_user> field with the appropriate value
```


example change  `<new_user>`  to *`admin`* , `password`   to maybe *`sol12ts`*

- you can the run this 

```sql 
FLUSH PRIVILEGES;
```

It is used to reload the grant tables in the mysql database. This ensures that any changes made to user privileges, such as creating or modifying users and their permissions, take effect immediately.

After altering the user's authentication method, you need to execute the `FLUSH PRIVILEGES;` statement to ensure that the updated authentication method is applied to the user and takes effect in the current session. This allows the client to authenticate with the server using the new authentication method.