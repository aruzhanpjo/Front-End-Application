using Microsoft.EntityFrameworkCore;
using eCommerceWeb.Models;

namespace eCommerceWeb.Data;

public class ProductContext :DbContext

{
    public ProductContext( DbContextOptions<ProductContext> options)
    {}
}