CREATE TABLE IF NOT EXISTS test (
  ID INT PRIMARY KEY NOT NULL,
  FIRST_NAME VARCHAR(30) NOT NULL,
  LAST_NAME VARCHAR(30) NOT NULL
);
INSERT INTO
  test (ID, FIRST_NAME, LAST_NAME)
VALUES
  (1, 'Kent', 'Caparas'),
  (2, 'David', 'Goodfellows'),
  (3, 'Damaso', 'Gui')
