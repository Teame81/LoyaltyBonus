using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoyaltyBonus.API.Dtos {
    public class ConsultForAddDto {
        public string Name { get; set; }

        [Column (TypeName = "Date")]
        public DateTime EmploymentDate { get; set; }
        public int InvoiceHoursWorkedThisYear { get; set; }
    }
}