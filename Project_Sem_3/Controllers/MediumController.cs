using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PR_3.Data;
using PR_3.Models;
using Project_Sem_3.Models.Dto;
using System.Net;

namespace Project_Sem_3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MediumController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        private ApiResponse _res;
        public MediumController(ApplicationDbContext db)
        {
            _db = db;
            _res = new ApiResponse();   
        }
        [HttpGet]
        public async Task<IActionResult> GetMediums()
        {
            _res.Result = _db.Medium;
            _res.StatusCode = HttpStatusCode.OK;
            return Ok(_db.Medium.ToList());
        }
        [HttpGet("{id:int}", Name = "GetMedium")]
        public async Task<IActionResult> GetMedium(int id)
        {
            if (id == 0)
            {
                _res.StatusCode = HttpStatusCode.BadRequest;
                _res.IsSuccess = false;
                return BadRequest(_res);
            }
            Medium medium = _db.Medium.FirstOrDefault(u => u.Id == id);
            if (medium == null)
            {
                _res.StatusCode = HttpStatusCode.NotFound;
                _res.IsSuccess = false;
                return NotFound(_res);
            }
            _res.Result = medium;
            _res.StatusCode = HttpStatusCode.OK;
            return Ok(_res);
        }

        [HttpPost]
        public async Task<IActionResult> CreateMedium([FromBody] MediumCreateDto model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    Medium mediumCreate = new()
                    {
                        Type = model.Type,
                    };
                    _db.Medium.Add(mediumCreate);
                    _db.SaveChanges();
                    _res.Result = mediumCreate;
                    _res.StatusCode = HttpStatusCode.Created;
                    return CreatedAtRoute("GetRarity", new { id = mediumCreate.Id }, _res);
                }
                else
                {
                    _res.IsSuccess = false;
                }
            }
            catch (Exception ex)
            {
                _res.IsSuccess = false;
                _res.ErrorMessage = new List<string>() { ex.ToString() };
            }
            return Ok(_res);
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateMedium(int id, [FromBody] MediumUpdateDto model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    Medium medium = _db.Medium.FirstOrDefault(u => u.Id == id);
                    if (medium == null)
                    {
                        _res.StatusCode = HttpStatusCode.NotFound;
                        _res.IsSuccess = false;
                        return BadRequest();
                    }
                    medium.Type = model.Type;
                    _db.Medium.Update(medium);
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
        public async Task<IActionResult> DeleteMedium(int id)
        {
            try
            {
                if (id == 0)
                {
                    _res.StatusCode = HttpStatusCode.NotFound;
                    _res.IsSuccess = false;
                    return BadRequest();
                }
                Medium medium = _db.Medium.FirstOrDefault(x => x.Id == id);
                if (medium == null)
                {
                    _res.StatusCode = HttpStatusCode.NotFound;
                    _res.IsSuccess = false;
                    return BadRequest();
                }
                _db.Medium.Remove(medium);
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
