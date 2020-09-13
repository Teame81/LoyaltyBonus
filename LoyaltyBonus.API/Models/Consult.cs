using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoyaltyBonus.API.Models {
    public class Consult {
        public int Id { get; set; }
        public string Name { get; set; }

        [Column (TypeName = "Date")]
        public DateTime EmploymentDate { get; set; }

        public int InvoiceHoursWorkedThisYear { get; set; }
    }
}