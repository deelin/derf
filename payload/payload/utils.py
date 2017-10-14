import os

from django.core.exceptions import ImproperlyConfigured


def get_envvar(var_name, default=None, show_warnings=True):
    """
    Get the environment variable or return exception
    """
    value = default

    try:
        value = os.environ[var_name]
    except KeyError:
        value = None
        
    if value is None:
        err = "Environment variables %s not set" % var_name
        raise ImproperlyConfigured(err)

    return value

