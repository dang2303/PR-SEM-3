using System.ComponentModel.DataAnnotations;
using System.Runtime.CompilerServices;

namespace Project_Sem_3.Models.Dto
{
    public class RarityUpdateDto
    {
        [Required]
        public string Type { get; set; }
    }
}
