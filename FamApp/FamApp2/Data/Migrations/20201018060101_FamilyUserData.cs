using Microsoft.EntityFrameworkCore.Migrations;

namespace FamApp2.Data.Migrations
{
    public partial class FamilyUserData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "FamilyUsers",
                columns: new[] { "Id", "Name", "UserID" },
                values: new object[] { 1, "Mercedes", "8877cebd-2eef-4426-be63-4ed0ea251a69" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "FamilyUsers",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
