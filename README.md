# LasterTech Front-End Repository

### Members
- Tyler Cash
- Shawn Ericksen
- Malachi Massey
- Cassie Smith
- Alex Tran
- Shawn Wheeler


# How to run the application locally
1. Ensure that you are running this on the provided Ubuntu VM (these instruction will not work on Mac or Window due to network restriction)
2. Install Docker (look at the bottom of this page if you don't already have docker installed)
3. Download the repo
4. Navigate to the directory containing the "docker-compose.yml" file, type "ls" in the terminal to confirm.
![Screenshot from 2024-02-24 20-38-11](https://github.com/QuantumRangers-SE-Team-10/lasertech-backend/assets/76791231/a83d3a11-5703-4e68-8769-df84f8f34e54)

5. Ensure your docker-compose.yml file looks like this
<img width="775" alt="image" src="https://github.com/QuantumRangers-SE-Team-10/lasertech-backend/assets/76791231/bac91b4e-85e5-491c-9fc8-0d1eee3d6e45">



6. Ensure that nothing is running on port 8080, 3000, 5432 (postgresql). You will get an error if those ports are not freed. 
7. Run ```sudo docker compose up``` and provide the password
8. Open your web browser and navigate to ```127.0.0.1:3000```

## Troubleshooting
- If your internet connection get disconnected while Docker download the image, re-run the command ```sudo docker compose up``` 
## Addtional Info
- The backend is running on port 8080, Swagger UI will display the API documentation if you navigate to ```127.0.0.1:8080```
- The pre-migrated PostgreSQL database is running on port 5432, you can try connecting to it using the credential in the docker compose file. The host will be ```127.0.0.1```
- The images (pods) are stored remotely on Docker hub.
- The backend image contain a .Net runtime along with a compiled version of the .NET core app.
- The frontend image contain a Node.js runtime along with a compiled version of the React app. 

## Docker installation instruction
1. Navigate to this page for reference https://docs.docker.com/engine/install/ubuntu/
2. Run these commands in the terminal
3. Add Docker's official GPG key
```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

4. Add the repository to Apt sources
``` 
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```
5. Install docker packages
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```


# To run the Development build

To run the project, you need to have Node.js and npm installed on your machine.

Commands to run the project:

```bash
npm install
npm run dev
```

Go to http://localhost:5173/ to see the project running.

To start coding, clone the repository and create a new branch with the name of the feature you are working on.
