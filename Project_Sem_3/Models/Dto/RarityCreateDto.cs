using System.ComponentModel.DataAnnotations;

namespace Project_Sem_3.Models.Dto
{
    public class RarityCreateDto
    {
        [Required]
        public string Type { get; set; }
    }
}
