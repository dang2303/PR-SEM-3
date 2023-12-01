using PR_3.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Project_Sem_3.Models
{
    public class CartItem
    {
        public int Id { get; set; } 
        public int ArtworkId { get; set; }
        [ForeignKey("ArtworkId")]
        public Artwork Artwork { get; set; }
        public int Quantity { get; set; }   
        public int ShoppingCartId { get; set; } 

    }
}
