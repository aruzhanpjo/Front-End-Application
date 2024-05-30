using Microsoft.EntityFrameworkCore;
using eCommerceWeb.Models;

namespace eCommerceWeb.Data;

public class ProductContext :DbContext

{
    public ProductContext(DbContextOptions<ProductContext> options) : base(options)
    {
        
    }
//basic method
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        //connecting to the ProductsDescription
        modelBuilder.Entity<ProductsDescription>().HasKey(di => new
        {
            di.ProductId,
            di.DescriptionId
        });
        
        //need to specify relationship of Products and ProductsDescription
        modelBuilder.Entity<ProductsDescription>().HasOne(d => d.Product).WithMany(di => di.ProductDescription)
            .HasForeignKey(d => d.ProductId);
        modelBuilder.Entity<ProductsDescription>().HasOne(i => i.Ingredient).WithMany(di => di.ProductDescription)
            .HasForeignKey(i => i.DescriptionId);
        
        //adding data
        modelBuilder.Entity<Products>().HasData(
            new Products {Id = 1, Name = "Strawberry IceCream", Price = 3.50, ImageUrl = "https://www.allrecipes.com/thmb/pH8hoFfytcOT9XVK1DSmxv3L0OU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/140877-easy-eggless-strawberry-ice-cream-ddmfs-3x4-1-092e4d11b59049c8b3843014ea3c57f2.jpg"}
            );
        modelBuilder.Entity<Ingredients>().HasData(
            new Ingredients {Id = 1, Name = "Strawberry"},
            new Ingredients {Id = 2, Name = "Milk"},
            new Ingredients {Id = 3, Name = "Sugar"}
        );
        
        //connecting Products model with the 3 Ingredients Model
        modelBuilder.Entity<ProductsDescription>().HasData(
            new ProductsDescription {ProductId = 1, DescriptionId = 1},
            new ProductsDescription {ProductId = 1, DescriptionId = 2},
            new ProductsDescription {ProductId = 1, DescriptionId = 3}
            );
        
        base.OnModelCreating(modelBuilder);
    }
    
    public DbSet<Products> Products { get; set; }
    public DbSet<Ingredients> Ingredients { get; set; }
    public DbSet<ProductsDescription> ProductsDescriptions { get; set; }
}