using Domain;
using Domain.Modesl;
using Microsoft.EntityFrameworkCore;
using Repositorio.Data;
using Repositorio.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositorio
{
    public class EventosPersistence : IEventosPersistence
    {
        private readonly BancoEventosContext context;

        public EventosPersistence(BancoEventosContext _context)
        {
            context = _context;
        }

        public async Task<EventoModel> GetEventoByIdAsync(int EventoId, bool includePalestrantes = false)
        {
            IQueryable<EventoModel> query = context.Eventos
               .Include(e => e.Lote)
               .Include(e => e.RedeSociais);

            if (includePalestrantes)
            {
                query = query
                    .Include(pe => pe.PalestranteEventos)
                    .ThenInclude(p => p.Palestrante);
            }

            query = query.AsNoTracking()
            .OrderBy(e => e.Id).Where(e => e.Id == EventoId);

            return await query.FirstOrDefaultAsync();
        }
        public async Task<EventoModel[]> GetEventosByTemaAsync(string tema, bool includePalestrantes = false)
        {
            IQueryable<EventoModel> query = context.Eventos
               .Include(e => e.Lote)
               .Include(e => e.RedeSociais);

            if (includePalestrantes)
            {
                query = query
                    .Include(pe => pe.PalestranteEventos)
                    .ThenInclude(p => p.Palestrante);
            }

            query = query.AsNoTracking()
            .OrderBy(e => e.Id).Where(e => e.Tema.ToLower().Contains(tema.ToLower()));

            return await query.ToArrayAsync();

        }
        public async Task<EventoModel[]> GetAllEventosAsync(bool includePalestrantes = false)
        {
            IQueryable<EventoModel> query = context.Eventos
                .Include(e => e.lote)
                .Include(e => e.RedeSociais);

            if (includePalestrantes)
            {
                query = query
                    .Include(pe => pe.PalestranteEventos)
                    .ThenInclude(p => p.Palestrante);
            }

            query = query.AsNoTracking()
            .OrderBy(e => e.Id);

            return await query.ToArrayAsync();

            //   return (await context.Eventos.ToArrayAsync());
            // return (await list<context.Eventos>.ToArrayAsync()); talvez seja melhor
        }


    }
}
