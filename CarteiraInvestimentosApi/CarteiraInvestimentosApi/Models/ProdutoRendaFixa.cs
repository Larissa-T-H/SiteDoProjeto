using System.ComponentModel.DataAnnotations;

namespace CarteiraInvestimentosApi.Models
{
    public class ProdutoRendaFixa
    {
        public int ProdutoRendaFixaID { get; set; }
        [Required]
        [StringLength(100)]
        public string ProdutoRendaFixaNome { get; set; }
    }
}
