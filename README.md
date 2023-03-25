# Simp'L

## Start Project

- `` nvm install``
- `` npm install``
- `` npm run local:watch ``

## InitDatabase

````sql
create user simpl with password 'simpl';
create database simpl;
grant create on database simpl to simpl;
alter user simpl with superuser;
\connect simpl;
create schema simpl authorization simpl;
grant all privileges on database simpl to simpl;
````
