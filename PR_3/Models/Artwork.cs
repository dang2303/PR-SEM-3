using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PR_3.Models
{
    public class Artwork
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Title { get;set; }
        [Required]
        public DateTime Year { get;set; }
        [Required]
        public string Material { get;set; }
        [Required]
        public int RarityId { get; set; }
        [ForeignKey("RarityId")]
        public Rarity Rarity { get; set; }
        [Required]
        public int MediumId { get; set; }
        [ForeignKey("MediumId")]
        public Medium Medium { get; set; }
        [Required]
        public double Art_Height { get; set; }
        [Required]

        public double Art_Width { get; set;}
        [Required]
        public string Image { get; set; }
    }
}
