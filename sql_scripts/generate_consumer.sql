-- Drop table

-- DROP TABLE ease_task.dbo.Customer GO

CREATE TABLE ease_task.dbo.Customer (
	ID int IDENTITY(0,1) NOT NULL,
	FirstName varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	LastName varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	Address varchar(600) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	Email varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	Phone varchar(10) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	Password varchar(500) COLLATE SQL_Latin1_General_CP1_CI_AS,
) GO
