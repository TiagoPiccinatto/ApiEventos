using Microsoft.EntityFrameworkCore;
using WebApplication1.Modesl;

namespace WebApplication1.Data
{
    public class BancoEventosContext : DbContext
    {
        public BancoEventosContext(DbContextOptions<BancoEventosContext> options) : base(options)
        {

        }

        public DbSet<EventoModel> Eventos { get; set; }
    }
}
