using System;

namespace Domain
{
    public class Lote
    {
        public int id { get; set; }

        public string name { get; set; }

        public decimal preco { get; set; }

        public DateTime DataInicio { get; set; }

        public DateTime DataFim { get; set; }

        public int quantidade { get; set; }

        public int EventoId { get; set; }

        public Evento Evento { get; set; }

    }




}