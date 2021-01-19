-- Drop table

-- DROP TABLE ease_task.dbo.Vendor GO

CREATE TABLE ease_task.dbo.Vendor (
	FirstName varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	LastName varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	Phone varchar(10) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	Email varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	Expertise char(100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	Description varchar(8000) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	VendorName varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	Type_of_service varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	Min_service_cost varchar(10) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	Availability varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	ID int IDENTITY(0,1) NOT NULL
) GO
