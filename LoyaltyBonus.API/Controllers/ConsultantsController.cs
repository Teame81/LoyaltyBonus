using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LoyaltyBonus.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace LoyaltyBonus.API.Controllers {
    [ApiController]
    [Route ("api/[controller]")]
    public class ConsultantsController : ControllerBase {

        private readonly DataContext _context;

        public ConsultantsController (DataContext context) {
            _context = context;
        }

        //Get all consultants
        [HttpGet]
        public async Task<IActionResult> GetConsultants () {

            var consultats = await _context.Consults.ToListAsync ();
            return Ok (consultats);
        }

        //Get one consultant
        [HttpGet ("{id}")]
        public async Task<IActionResult> GetConsultat (int id) {
            var consultant = await _context.Consults.FirstOrDefaultAsync (x => x.Id == id);
            return Ok (consultant);
        }

    }
}