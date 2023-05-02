--CREATE TABLE user( userid INTEGER NOT NULL PRIMARY KEY, username TEXT NOT NULL, email NOT NULL, password INGTEGER NOT NULL PRIMARY KEY); 
--CREATE TABLE game( gameid INTEGER NOT NULL PRIMARY KEY, gamename TEXT NOT NULL, image NOT NULL, gamedescription NOT NULL, gamegenre NOT NULL, gamedate NOT NULL PRIMARY KEY, gameplatfrom NOT NULL);

--INSERT INTO user( userid, username, email)
--VALUES (1, "PeterParker12", "peterparker@gmail.com");

--INSERT INTO game( gameid, gamename, image, gamedescription, gamegenre, gamedate, gameplatform)
--VALUES (1, "Counter-Strike: Global Offensive", "", "CS:GO is a popular shooting game where players team up to complete objectives like planting bombs or rescuing hostages. 
--Players earn money to buy better weapons and equipment. The game has a large competitive community and lots of different maps and modes to play.", "Tactical-Shooter", "August 21, 2012",
--"PC");

SELECT * FROM user ;
SELECT * FROM game :