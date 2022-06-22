﻿namespace CarteiraInvestimentosApi.Models
{
    public class TesouroDireto
    {
        public int TesouroDiretoId { get; set; }
        public decimal ValorTotalInvestido { get; set; }
        public decimal Rendimento { get; set; }
        public decimal Rentabilidade { get; set; }
        public DateTime Vencimento { get; set; }
        public string Liquidez { get; set; }
        public decimal Custos { get; set; }
        public int CarteiraId { get; set; }
        public Carteira Carteira { get; set; }
        public int BancoId { get; set; }
        public Banco Banco { get; set; }
        public int IndexadorRendimentosId { get; set; }
        public IndexadorRendimentos IndexadorRendimentos { get; set; }
        IEnumerable<Movimentacao> Movimentacoes { get; set; }
    }
}
