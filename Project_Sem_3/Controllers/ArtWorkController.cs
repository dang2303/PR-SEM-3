using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PR_3.Data;
using PR_3.Models;
using System.Net;

namespace Project_Sem_3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArtWorkController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        private ApiResponse _res;
        public ArtWorkController(ApplicationDbContext db)
        {
            _db = db;
            _res = new ApiResponse();
        }
        [HttpGet]
        public async Task<IActionResult> GetArtWorks()
        {
            _res.Result = _db.Artworks;
            _res.StatusCode = HttpStatusCode.OK;
            return Ok(_db.Artworks.ToList());
        }

        [HttpGet("{id:int}", Name ="GetArtWork")]
        public async Task<IActionResult> GetArtWork(int id)
        {
            if(id ==0)
            {
                _res.StatusCode = HttpStatusCode.BadRequest;
                _res.IsSuccess = false;
                return BadRequest(_res);
            }
            Artwork art = _db.Artworks.FirstOrDefault(u => u.Id == id); 
            if(art == null)
            {
                _res.StatusCode = HttpStatusCode.NotFound;
                _res.IsSuccess =false;
                return NotFound(_res);
            }
            _res.Result = art;
            _res.StatusCode = HttpStatusCode.OK;
            return Ok(_res);
        }

        [HttpPost]
        public async Task<IActionResult> CreateArtWork([FromBody])
    }
}
