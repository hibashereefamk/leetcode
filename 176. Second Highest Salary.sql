-- Write your PostgreSQL query statement below
SELECT Max(salary) AS SecondHighestSalary
FROM Employee
WHERE salary< (SELECT max(salary) FROM Employee);
