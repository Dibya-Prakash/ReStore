using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ProductController : BaseApiController
    {
        private readonly StoreContext _context;
        public ProductController(StoreContext context)
        {
            _context=context;
        }
        

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            var products=await _context.Products.ToListAsync();
            return products;
            
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id){
            var product=await _context.Products.FindAsync(id);
            if(!(product==null)) return product;
            else return NotFound();
        }
    }
}