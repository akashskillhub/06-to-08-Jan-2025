Open PowerShell as Administrator
Press Win + X → Select Windows PowerShell (Admin) or Terminal (Admin)

🧰 2. Run the Installation Command
Paste the following command into the PowerShell window:


Set-ExecutionPolicy Bypass -Scope Process -Force; `
[System.Net.ServicePointManager]::SecurityProtocol = `
[System.Net.ServicePointManager]::SecurityProtocol -bor 3072; `
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

3. Verify Installation
choco -v

4.
choco install -y nodejs-lts microsoft-openjdk17

5.
Install Android Studio