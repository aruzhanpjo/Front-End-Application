namespace eCommerceWeb.Models;

public class ProductsDescription
{
    public int ProductId { get; set; }
    public Products Product { get; set; }
    
    public int DescriptionId { get; set; }
    public Ingredients Ingredient { get; set; }
    
}