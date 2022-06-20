using Microsoft.EntityFrameworkCore;

namespace CarteiraInvestimentosApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
    }
}
