-- docker run --rm -d --name mysql-container -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=userdb -p 3306:3306 mysql:8.4.2

CREATE USER 'app_user'@'%' IDENTIFIED WITH caching_sha2_password BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'app_user'@'%';
FLUSH PRIVILEGES;