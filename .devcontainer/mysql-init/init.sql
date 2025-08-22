GRANT ALL PRIVILEGES ON mika_db.* TO 'mika_user'@'%';
GRANT ALL PRIVILEGES ON mika_db_shadow.* TO 'mika_user'@'%';
FLUSH PRIVILEGES;

CREATE DATABASE IF NOT EXISTS mika_db_shadow;
