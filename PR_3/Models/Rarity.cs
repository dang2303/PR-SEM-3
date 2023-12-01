using System.ComponentModel.DataAnnotations;

namespace PR_3.Models
{
    public class Rarity
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Type { get; set; }    
    }
}
