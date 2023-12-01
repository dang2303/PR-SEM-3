using Azure;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PR_3.Data;
using PR_3.Models;
using Project_Sem_3.Models.Dto;
using System.Net;

namespace Project_Sem_3.Controllers
{
    [Route("api/Rarity")]
    [ApiController]
    public class RarityController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        private ApiResponse _res;
        public RarityController(ApplicationDbContext db)
        {
            _db = db;
            _res = new ApiResponse();
        }
        [HttpGet]
        public async Task<IActionResult> GetRarities()
        {
            _res.Result = _db.Rarity;
            _res.StatusCode = HttpStatusCode.OK;
            return Ok(_db.Rarity.ToList());
        }
        [HttpGet("{id:int}", Name = "GetRarity")]
        public async Task<IActionResult> GetRarity(int id)
        {
            if(id == 0)
            {
                _res.StatusCode = HttpStatusCode.BadRequest;
                _res.IsSuccess = false;
                return BadRequest(_res);
            }
            Rarity rarity = _db.Rarity.FirstOrDefault(u => u.Id == id);
            if(rarity == null)
            {
                _res.StatusCode = HttpStatusCode.NotFound;
                _res.IsSuccess = false;
                return NotFound(_res);
            }
            _res.Result = rarity;
            _res.StatusCode = HttpStatusCode.OK;
            return Ok(_res);
        }

        [HttpPost]
        public async Task<IActionResult> CreateRarity([FromBody] RarityCreateDto model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    Rarity rarityCreate = new()
                    {
                        Type = model.Type,
                    };
                    _db.Rarity.Add(rarityCreate);
                    _db.SaveChanges();
                    _res.Result = rarityCreate;
                    _res.StatusCode = HttpStatusCode.Created;
                    return CreatedAtRoute("GetRarity", new { id = rarityCreate.Id }, _res);
                }
                else
                {
                    _res.IsSuccess = false;
                }
            }
            catch(Exception ex)
            {
                _res.IsSuccess = false;
                _res.ErrorMessage = new List<string>() { ex.ToString() };
            }
            return Ok(_res);
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateRarity(int id,[FromBody] RarityUpdateDto model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    Rarity rarity = _db.Rarity.FirstOrDefault(u => u.Id == id);
                    if(rarity == null)
                    {
                        _res.StatusCode = HttpStatusCode.NotFound;
                        _res.IsSuccess = false;
                        return BadRequest();
                    }
                    rarity.Type = model.Type;
                    _db.Rarity.Update(rarity);
                    _db.SaveChanges();
                    _res.Result = model;
                    _res.StatusCode = HttpStatusCode.NoContent;
                    return Ok(_res);
                }
            }
            catch (Exception ex)
            {
                _res.IsSuccess = false;
                _res.ErrorMessage = new List<string>() { ex.ToString() };
            }
            return Ok(_res);
        }
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteRarity(int id)
        {
            try
            {
                if (id == 0)
                {
                    _res.StatusCode = HttpStatusCode.NotFound;
                    _res.IsSuccess = false;
                    return BadRequest();
                }
                Rarity rarity = _db.Rarity.FirstOrDefault(x => x.Id == id);
                if (rarity == null)
                {
                    _res.StatusCode = HttpStatusCode.NotFound;
                    _res.IsSuccess = false;
                    return BadRequest();
                }
                _db.Rarity.Remove(rarity);
                _db.SaveChanges();
                _res.StatusCode = HttpStatusCode.NoContent;
                return Ok(_res);
            }
            catch (Exception ex)
            {
                _res.IsSuccess = false;
                _res.ErrorMessage = new List<string>() { ex.ToString() };
            }
            return Ok(_res);
        }

    }
}
