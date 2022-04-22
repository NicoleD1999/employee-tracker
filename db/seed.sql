INSERT INTO emp_department (id, name)
VALUES (1, "Parks and Rec Department"),
       (2, "Health Department");

INSERT INTO emp_role (id, title, salary, department_id)
VALUES(1, "Intern", 17.00, 1),
      (2, "Administrator", 22.00, 1),
      (3, "Deputy Director", 24.00, 1),
      (4, "Park Ranger", 16.00, 1),
      (5, "Client Service Coordinator", 15.00, 2),
      (6, "Registered Nurse" 28.00, 2),
      (7, "Clinic Assistant" 18.00, 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES(1, "April", "Ludgate", 2, 1),
      (2, "Tom", "Havaford", 2, 1),
      (3, "Leslie", "Knope", 3, 1),
      (4, "Andy", "Dwyer", 5, 2),
      (5, "Ann", "Perkins", 6, 2,),
      (6, "Chris", "Traeger", 7, 2),
      (7, "Donna", "Megeagle", 7, 2),
      (8, "Ben", "Wyatt", 3, 1),
      (9, "Ron", "Swanson", 4, 1),
      (10, "Jean-Ralphio", "Saperstein", 1, 1),
      (11, "Bobby", "Newport", 4, 1),
      (12, "Mona-Lisa", "Saperstein", 6, 2),
      (13, "Jeremy", "Jamm", 1, 1);

