using Application.Interface;
using Domain.Modesl;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Repositorio.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;




namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
        private readonly IEventoService _eventoService;

        public EventoController(IEventoService eventoService)
        {
            _eventoService = eventoService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var eventos = await _eventoService.GetAllEventosAsync(true);
                return Ok(eventos);

            }
            catch (Exception erro)
            {

                throw new Exception(erro.Message);
            }
             

        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            try
            {
                var evento = await _eventoService.GetEventoByIdAsync(id, true);
                return Ok(evento);

            }
            catch (Exception erro)
            {

                throw new Exception(erro.Message);
            }
        }


        [HttpGet("tema/{tema}")]
        public async Task<IActionResult> GetByTema(string tema)
        {
            try
            {
                var evento = await _eventoService.GetEventosByTemaAsync(tema, true);
                return Ok(evento);

            }
            catch (Exception erro)
            {

                throw new Exception(erro.Message);
            }
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
            return $"Exemplo De Delete {id} ";
        }
        

    }
}




