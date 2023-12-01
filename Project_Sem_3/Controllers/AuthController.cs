using Microsoft.AspNetCore.Http;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using PR_3.Data;
using PR_3.Models;
using Project_Sem_3.Models.Dto;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Text;
using Project_Sem_3.Util;

namespace Project_Sem_3.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        private ApiResponse _res;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private string _secretKey;
        public AuthController(ApplicationDbContext db,
            IConfiguration configuration,
            UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager)
        {
            _db = db;
            _secretKey = configuration.GetValue<string>("ApiSettings:SecretApi");
            _res = new ApiResponse();
            _userManager = userManager;
            _roleManager = roleManager;
        }
        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginRequestDto loginRequestDto)
        {
            ApplicationUser userFrDb = _db.ApplicationUsers
                .FirstOrDefault(u => u.UserName.ToLower() == loginRequestDto.UserName.ToLower());
            bool isValid = await _userManager.CheckPasswordAsync(userFrDb, loginRequestDto.Password);
            if (!isValid)
            {
                _res.Result = new LoginResponseDto();
                _res.StatusCode = HttpStatusCode.BadRequest;
                _res.IsSuccess = false;
                _res.ErrorMessage.Add("Username is incorrect");
                return BadRequest(_res);
            }
            // generate JWT
            JwtSecurityTokenHandler tokenHandler = new();
            byte[] key = Encoding.ASCII.GetBytes(_secretKey);
            var role = await _userManager.GetRolesAsync(userFrDb);
            SecurityTokenDescriptor tokenDescriptor = new()
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim("fullname", userFrDb.UserName),
                    new Claim("id", userFrDb.Id.ToString()),
                    new Claim(ClaimTypes.Email, userFrDb.UserName.ToString()),
                    new Claim(ClaimTypes.Role, role.FirstOrDefault())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
            };

            SecurityToken securityToken = tokenHandler.CreateToken(tokenDescriptor);

            LoginResponseDto loginResponse = new()
            {
                Email = userFrDb.Email,
                Token = tokenHandler.WriteToken(securityToken),
            };
            if (loginResponse.Email == null && string.IsNullOrEmpty(loginResponse.Token))
            {
                _res.StatusCode = HttpStatusCode.BadRequest;
                _res.IsSuccess = false;
                _res.ErrorMessage.Add("Username or password is incorrec");
                return BadRequest(_res);
            }
            _res.StatusCode = HttpStatusCode.OK;
            _res.IsSuccess = true;
            _res.Result = loginResponse;
            return Ok(_res);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Register([FromBody] RegisterRequestDto registerRequestDto)
        {
            ApplicationUser userFrDb = _db.ApplicationUsers.FirstOrDefault(u => u.UserName.ToLower() == registerRequestDto.UserName.ToLower());
            if (userFrDb != null)
            {
                _res.StatusCode = HttpStatusCode.BadRequest;
                _res.IsSuccess = false;
                _res.ErrorMessage.Add("Username already exists");
                return BadRequest(_res);
            }
            ApplicationUser newUser = new()
            {
                UserName = registerRequestDto.UserName,
                Email = registerRequestDto.UserName,
                NormalizedEmail = registerRequestDto.UserName.ToUpper(),
                Name = registerRequestDto.Name
            };
            try
            {
                var result = await _userManager.CreateAsync(newUser, registerRequestDto.Password);
                if (result.Succeeded)
                {
                    if (!_roleManager.RoleExistsAsync(SD.Role_Admin).GetAwaiter().GetResult())
                    {
                        // create role
                        await _roleManager.CreateAsync(new IdentityRole(SD.Role_Admin));
                        await _roleManager.CreateAsync(new IdentityRole(SD.Role_Cus));
                    }
                    if(registerRequestDto.Role.ToLower() == SD.Role_Admin)
                    {
                        await _userManager.AddToRoleAsync(newUser, SD.Role_Admin);
                    }
                    else
                    {
                        await _userManager.AddToRoleAsync(newUser, SD.Role_Cus);
                    }
                }
                _res.StatusCode = HttpStatusCode.OK;
                _res.IsSuccess = true;
                return Ok(_res);
            }
            catch(Exception ex) 
            {
                _res.StatusCode = HttpStatusCode.BadRequest;
                _res.IsSuccess = false;
                _res.ErrorMessage.Add("Error while regitering");
                return BadRequest(_res);
            }
        }
    }
}
