using LoyaltyBonus.API.Models;
using Microsoft.EntityFrameworkCore;

namespace LoyaltyBonus.API.Data {
    public class DataContext : DbContext {
        public DataContext (DbContextOptions<DataContext> options) : base (options) { }

        public DbSet<Consult> Consults { get; set; }

        public DbSet<User> Users { get; set; }

    }
}