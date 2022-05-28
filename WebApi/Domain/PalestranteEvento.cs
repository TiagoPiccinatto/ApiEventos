using System;
namespace Domain
{
    public class PalestranteEvento
    {
        public int id { get; set; }

        public Palestrante Palestrante { get; set; }

        public int EventoId { get; set; }

        public EventoModel Evento { get; set; }

    }
}