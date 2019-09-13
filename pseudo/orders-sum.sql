SELECT
	cutomer, SUM(ordervalue)
FROM
	orders
GROUP BY
	customer;
