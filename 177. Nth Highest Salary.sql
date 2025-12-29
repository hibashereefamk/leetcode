CREATE OR REPLACE FUNCTION NthHighestSalary(N INT)
RETURNS TABLE (Salary INT) AS $$
BEGIN
  RETURN QUERY
  SELECT sub.salary
  FROM (
      SELECT DISTINCT e.salary
      FROM Employee e
      ORDER BY e.salary DESC
      OFFSET N - 1
      LIMIT 1
  ) sub;
END;
$$ LANGUAGE plpgsql;
