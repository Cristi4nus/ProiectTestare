@echo off
set DBPATH=C:\data\db

REM Ensure dbpath exists
if not exist "%DBPATH%" mkdir "%DBPATH%"

echo Starting MongoDB on port 27018 with replica set rs0...
start "" mongod --port 27018 --replSet rs0 --dbpath "%DBPATH%" --bind_ip_all

REM Wait for the server to start
timeout /t 5 >nul

echo Initializing replica set if needed...
mongosh --port 27018 --quiet --eval ^
"try { rs.status() } catch (err) { rs.initiate({_id:'rs0',members:[{_id:0,host:'localhost:27018'}]}) }"

echo Done.
pause
