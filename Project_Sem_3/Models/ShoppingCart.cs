using System.ComponentModel.DataAnnotations.Schema;

namespace Project_Sem_3.Models
{
    public class ShoppingCart
    {
        public int Id { get; set; } 
        public string UserId { get; set; }
        public ICollection<CartItem> Items { get; set; }
        [NotMapped]
        public string StripePaymentIntentId { get; set; }
        [NotMapped]
        public double CartTotal { get; set; }
    }
}
