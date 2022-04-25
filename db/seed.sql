INSERT INTO emp_department (id, name)
VALUES (1, "Parks and Rec Department"),
       (2, "Health Department");

INSERT INTO emp_role (id, title, salary, department_id)
VALUES(1, "Intern", 17.00, 1),
      (2, "Administrator", 22.00, 1),
      (3, "Deputy Director", 24.00, 1),
      (4, "Park Ranger", 16.00, 1),
      (5, "Client Service Coordinator", 15.00, 2),
      (6, "Registered Nurse", 28.00, 2),
      (7, "Clinic Assistant", 18.00, 2),
      (8, "Office Manager", 27.00, 1),
      (9, "Clinic Manager", 29.00, 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES(1, "Michael", "Scott", 8, 1),
      (2, "Dwight", "Schrute", 9, 2),
      (3, "April", "Ludgate", 2, 1),
      (4, "Tom", "Havaford", 2, 1),
      (5, "Leslie", "Knope", 3, 1),
      (6, "Andy", "Dwyer", 5, 2),
      (7, "Ann", "Perkins", 6, 2),
      (8, "Chris", "Traeger", 7, 2),
      (9, "Donna", "Megeagle", 7, 2),
      (10, "Ben", "Wyatt", 3, 1),
      (11, "Ron", "Swanson", 4, 1),
      (12, "Jean-Ralphio", "Saperstein", 1, 1),
      (13, "Bobby", "Newport", 4, 1),
      (14, "Mona-Lisa", "Saperstein", 6, 2),
      (15, "Jeremy", "Jamm", 1, 1);




