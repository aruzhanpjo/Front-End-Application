namespace eCommerceWeb.Models;

public class Ingredients
{
    public int Id { get; set; }
    
    public string Name { get; set; }
    
    public List<ProductsDescription>? ProductDescription { get; set; }
}