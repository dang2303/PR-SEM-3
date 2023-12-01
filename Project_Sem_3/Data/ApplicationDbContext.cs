using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PR_3.Models;

namespace PR_3.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions options) : base(options) { }
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public DbSet<Medium> Medium { get; set; }
        public DbSet<Rarity> Rarity { get; set; }
        public DbSet<Artwork> Artworks { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<Rarity>().HasData(
                new Rarity
                {
                    Id = 1,
                    Type = "Painting"
                },
                new Rarity
                {
                    Id = 2,
                    Type = "Sculpture"
                },
                new Rarity
                {
                    Id = 3,
                    Type = "Photography"
                },
                new Rarity
                {
                    Id = 4,
                    Type = "Print"
                },
                new Rarity
                {
                    Id = 5,
                    Type = "Drawing, Collage or other Work on Paper"
                },
                new Rarity
                {
                    Id = 6,
                    Type = "Mixed Media"
                },
                new Rarity
                {
                    Id = 7,
                    Type = "Performance Art"
                },
                new Rarity
                {
                    Id = 8,
                    Type = "Installation"
                },
                new Rarity
                {
                    Id = 9,
                    Type = "Video/Film/Animation"
                },
                new Rarity
                {
                    Id = 10,
                    Type = "Architecture"
                },
                new Rarity
                {
                    Id = 11,
                    Type = "Fashion Design and Wearable Art"
                },
                new Rarity
                {
                    Id = 12,
                    Type = "Jewelry"
                },
                new Rarity
                {
                    Id = 13,
                    Type = "Design/Decorative Art"
                },
                new Rarity
                {
                    Id = 14,
                    Type = "Textile Arts"
                },
                new Rarity
                {
                    Id = 15,
                    Type = "Other"
                }
                );

            builder.Entity<Medium>().HasData(
                new Medium
                {
                    Id = 1,
                    Type = "Unique"
                },
                new Medium
                {
                    Id = 2,
                    Type = "Limited Edition"
                },
                new Medium
                {
                    Id = 3,
                    Type = "Open Edition"
                },
                new Medium
                {
                    Id = 4,
                    Type = "Unknow Edition"
                }
                );
        }
    }
}
