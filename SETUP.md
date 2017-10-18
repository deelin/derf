# Server setup

1. `sudo yum install gcc git nginx python-devel mysql-devel`
2. `pip install --user -r $PROJECT_ROOT/requirements.txt`
3. `sudo -s && pip install uwsgi && exit`
4. `sudo easy_install supervisor`
    - Ensure that supervisor is available to the `root` user
5. `cd ~/projects/ ; git clone https://github.com/deelin/derf/`


# Set up supervisord/uWSGI
1. `sudo ln -s -f $PROJECT_ROOT/nginx/payload.conf /etc/nginx/conf.d/virtual.conf`
2. `sudo ln -s -f $PROJECT_ROOT/supervisord/supervisord.conf /etc/sueprvisord.conf`
