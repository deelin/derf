# Server setup

1. `sudo yum install gcc git nginx python-devel mysql-devel`
2. `pip install --user -r $PROJECT_ROOT/requirements.txt`
3. `sudo -s && pip install uwsgi && exit`
4. `sudo easy_install supervisor`
5. `cd ~/projects/ ; git clone https://github.com/deelin/derf/`


# Set up supervisord/uWSGI
1. Edit `/etc/nginx/conf.d/virtual.conf` to include:
    ```
    #
    # Payloader Nginx
    #

    upstream django {
        server 127.0.0.1:8000;
    }

    server {
        listen       80;
        server_name  .payloadpusher.gg;
        charset utf-8;

        location /static {
            alias /home/ec2-user/projects/derf/payload/static;
        }

        location / {
            uwsgi_pass  django;
            include     /etc/nginx/conf.d/uwsgi_params;
        }
    }
    ```
2. Create `/etc/nginx/conf.d/uwsgi_params`
    ```
    uwsgi_param  QUERY_STRING       $query_string;
    uwsgi_param  REQUEST_METHOD     $request_method;
    uwsgi_param  CONTENT_TYPE       $content_type;
    uwsgi_param  CONTENT_LENGTH     $content_length;

    uwsgi_param  REQUEST_URI        $request_uri;
    uwsgi_param  PATH_INFO          $document_uri;
    uwsgi_param  DOCUMENT_ROOT      $document_root;
    uwsgi_param  SERVER_PROTOCOL    $server_protocol;
    uwsgi_param  REQUEST_SCHEME     $scheme;
    uwsgi_param  HTTPS              $https if_not_empty;

    uwsgi_param  REMOTE_ADDR        $remote_addr;
    uwsgi_param  REMOTE_PORT        $remote_port;
    uwsgi_param  SERVER_PORT        $server_port;
    uwsgi_param  SERVER_NAME        $server_name;
    ```
3. Create uWSGI `.ini` file
    ```
    [uwsgi]
    
    # Base django directory
    chdir           = /home/ec2-user/projects/derf/payload

    # Django's wsgi file
    module          = project.wsgi
    
    # process-related settings
    master          = true
    processes       = 10                   # maximum number of worker processes
    socket          = /tmp/payloader.sock  # the socket (use the full path to be safe
    vacuum          = true
    ```

