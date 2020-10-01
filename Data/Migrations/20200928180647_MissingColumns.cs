using Microsoft.EntityFrameworkCore.Migrations;

namespace capstone.Data.Migrations
{
    public partial class MissingColumns : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Defense",
                table: "DbzMembers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Notes",
                table: "DbzMembers",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Defense",
                table: "DbzMembers");

            migrationBuilder.DropColumn(
                name: "Notes",
                table: "DbzMembers");
        }
    }
}
