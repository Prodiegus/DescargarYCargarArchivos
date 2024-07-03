# Inicio y host en la clear web
sudo apt-get update
sudo apt-get upgrade -y

sudo apt-get install apt-transport-https ca-certificates curl software-properties-common -y
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install docker-ce -y

sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

sudo apt-get install git -y

git clone https://github.com/Prodiegus/DescargarYCargarArchivos.git
cd DescargarYCargarArchivos

sudo docker-compose up --build -d


#sirviendo en la dark web
sudo apt update
sudo apt install tor

sudo nano /etc/tor/torrc

# Descomentar la línea que dice HiddenServiceDir /var/lib/tor/hidden_service/
# Descomentar la línea que dice HiddenServicePort 80 127.0.0.1:80 y editar el puerto 80 por el puerto que se haya configurado en el archivo docker-compose.yml

sudo systemctl restart tor
sudo cat /var/lib/tor/hidden_service/hostname

