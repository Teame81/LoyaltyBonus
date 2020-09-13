using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LoyaltyBonus.API.Data;
using Microsoft.AspNetCore.Mvc;
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
        public IActionResult GetConsultants () {

            var consultats = _context.Consults.ToList ();
            return Ok (consultats);
        }

        //Get one consultant
        [HttpGet ("{id}")]
        public IActionResult GetConsultat (int id) {
            var consultant = _context.Consults.FirstOrDefault (x => x.Id == id);
            return Ok (consultant);
        }

    }
}