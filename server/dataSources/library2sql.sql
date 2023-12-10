PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "users" (
	"emailId"	TEXT,
	"name"	TEXT,
	"password"	TEXT,
	PRIMARY KEY("emailId")
);
INSERT INTO users VALUES('coolsushnata@gmail.com','Sushnata Sarkar','$2b$12$sok7WuLrhtJfeOPzHohiKeZ2LbNLfBmUrZskLyHveigU8UhZOSYUC');
INSERT INTO users VALUES('coolsushnata11@gmail.com','Sushnata Sarkar','$2b$12$Fi3mgTuLHCB1LDpl4SO/POZFtrOKwInevBXoLz0MW5o/pJIX0TzKC');
INSERT INTO users VALUES('sayariya98@gmail.com','Sayantanee Sarkar','$2b$12$cPQFB.p8.aKH3rV1rj4J7uWSTosRU6t0fBOzWhhXvoJbCeizVQvFy');
INSERT INTO users VALUES('sayariya982@gmail.com','Sayantanee Sarkar2','$2b$12$oPVghypFwShq0ajU5JgvEum/npNtlBDvBLHNPR3UqwHXHI.ORrq6S');
COMMIT;
