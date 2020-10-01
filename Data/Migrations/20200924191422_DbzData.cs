using Microsoft.EntityFrameworkCore.Migrations;

namespace capstone.Data.Migrations
{
    public partial class DbzData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "DbzMembers",
                columns: new[] { "Id", "Attack", "Name", "UserId" },
                values: new object[] { 1, "Spirit Bomb, Kamehameha", "Goku", "00973448-2f4b-44ec-a2d9-dbbc9663eb93" });

            migrationBuilder.InsertData(
                table: "DbzMembers",
                columns: new[] { "Id", "Attack", "Name", "UserId" },
                values: new object[] { 2, "Galick Gun", "Vegeta", "00973448-2f4b-44ec-a2d9-dbbc9663eb93" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "DbzMembers",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "DbzMembers",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
