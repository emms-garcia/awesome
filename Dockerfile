FROM ubuntu:14.04

ENV apt_packages apt-packages.txt
ENV requirements requirements.txt
ENV code /code
ENV PYTHONPATH  ${code}:$PYTHON_PATH

COPY ${apt_packages} /
RUN apt-get update && apt-get install -y --no-install-recommends software-properties-common

RUN add-apt-repository ppa:nginx/stable
RUN apt-get update && cat ${apt_packages} | xargs sudo apt-get install -y

WORKDIR /
COPY . ${requirements} /
RUN pip install -r ${requirements}

WORKDIR ${code}
COPY . ${code}

RUN echo "daemon off; error_log stderr debug:" >> /etc/nginx/nginx.conf
RUN rm /etc/nginx/sites-enabled/default
RUN ln -s ${code}/nginx.conf /etc/nginx/sites-enabled/awesome.conf
RUN ln -s ${code}/supervisor.conf /etc/supervisor/conf.d/awesome.conf

EXPOSE 8080

cmd ["/usr/bin/supervisord"]
