using System.ComponentModel.DataAnnotations;

namespace LoyaltyBonus.API.Dtos {
    public class UserForRegisterDto {

        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength (16, MinimumLength = 4, ErrorMessage = "Passwordlenght must be atleast 4 to 16 long.")]
        public string Password { get; set; }
    }
}