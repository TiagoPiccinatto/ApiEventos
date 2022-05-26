using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data;
using WebApplication1.Modesl;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("api/test/[controller]")]
    public class EventoController : ControllerBase
    {
        
        private readonly BancoEventosContext _context;

        public EventoController(BancoEventosContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<EventoModel> Get()
        {
            return _context.Eventos;

        }

        [HttpGet("{id}")]
        public EventoModel GetById(int id)
        {
            return _context.Eventos.FirstOrDefault(evento => evento.id == id);
        }



        [HttpPost]
        public string Post()
        {
            return "Exemplo de Post";
        }

        [HttpPut("{id}")]
        public string Put(int id)
        {
            return $"Exemplo de put {id} ";
        }

        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return $"Exemplo de Apagar {id} ";
        }


    }
}




