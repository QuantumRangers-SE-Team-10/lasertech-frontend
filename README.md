# Photon React App

###  Team 10 Members

Name | GitHub | Slack
|--------------|-----------|------------|
Alex Tran | AlexTran0899 | Alex Tran
Shawn Ericksen | shawnericksen | Shawn Ericksen
Malachi Massey | MalachiMassey | Malachi Massey
Cassie Smith | CassieSmith8001 | Casi Siempre
Shawn Wheeler | Shawn-Wheeler | Shawn Wheeler
Tyler Cash | tcash1990 | Tyler Cash

# To run the application

To run the project, you need to have Node.js (>v21.7.1) and npm installed on your machine.

You will need an API key to connect to supabase
- For Stother and TAs, check the Blackboard submission for the key.
- Team Members can request a key from Shawn Ericksen on slack.

Then put the key in a .env file. Template provided below.

```
# .env
SUPABASE_API_KEY=
```

Commands to run the project:

```bash
npm install
npm run dev
```

Our project uses the `concurrently` package to start both the React app and the server.cjs used for communicating the UDP messages.

Go to http://localhost:5173/ to see the project running.

To start coding, clone the repository and create a new branch with the name of the feature you are working on.
