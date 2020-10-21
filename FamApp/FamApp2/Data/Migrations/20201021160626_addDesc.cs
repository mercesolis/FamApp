﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FamApp2.Data.Migrations
{
    public partial class addDesc : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "FamilyUsers",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "CalEvents",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Date",
                table: "FamilyUsers");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "CalEvents");
        }
    }
}
