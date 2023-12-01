using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Project_Sem_3.Migrations
{
    /// <inheritdoc />
    public partial class seedDataToMedimTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Medium",
                columns: new[] { "Id", "Type" },
                values: new object[,]
                {
                    { 1, "Unique" },
                    { 2, "Limited Edition" },
                    { 3, "Open Edition" },
                    { 4, "Unknow Edition" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Medium",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Medium",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Medium",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Medium",
                keyColumn: "Id",
                keyValue: 4);
        }
    }
}
