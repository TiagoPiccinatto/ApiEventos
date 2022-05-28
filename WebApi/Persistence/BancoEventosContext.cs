using Domain.Modesl;
using Microsoft.EntityFrameworkCore;


namespace BancoContext.Persistence
{
    public class BancoEventosContext : DbContext
    {
        public BancoEventosContext(DbContextOptions<BancoEventosContext> options) : base(options)
        {

        }

        public DbSet<EventoModel> Eventos { get; set; }
    }
}
