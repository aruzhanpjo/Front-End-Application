namespace eCommerceWeb.Models;

public class Products
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string ImageUrl { get; set; }
    public double Price { get; set; }
    
    public List<ProductsDescription>? ProductDescription { get; set; }
}