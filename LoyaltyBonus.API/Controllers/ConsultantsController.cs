using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LoyaltyBonus.API.Data;
using LoyaltyBonus.API.Dtos;
using LoyaltyBonus.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace LoyaltyBonus.API.Controllers {
    [Authorize]
    [ApiController]
    [Route ("api/[controller]")]
    public class ConsultantsController : ControllerBase {

        private readonly DataContext _context;

        public ConsultantsController (DataContext context) {
            _context = context;
        }

        //Get all consultants
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetConsultants () {

            var consultats = await _context.Consults.ToListAsync ();
            return Ok (consultats);
        }

        //Get one consultant
        [AllowAnonymous]
        [HttpGet ("{id}")]
        public async Task<IActionResult> GetConsultat (int id) {
            var consultant = await _context.Consults.FirstOrDefaultAsync (x => x.Id == id);
            return Ok (consultant);
        }

        [AllowAnonymous]
        [HttpPost ("addconsult")]
        public async Task<IActionResult> AddConsultant (ConsultForAddDto consultForAddDto) {
            //Validate

            consultForAddDto.Name = consultForAddDto.Name.ToLower ();
            var consultToCreate = new Consult { Name = consultForAddDto.Name, EmploymentDate = consultForAddDto.EmploymentDate, InvoiceHoursWorkedThisYear = consultForAddDto.InvoiceHoursWorkedThisYear };
            _context.Consults.Add (consultToCreate);
            await _context.SaveChangesAsync ();

            return StatusCode (201);

        }

        [AllowAnonymous]
        [HttpPut ("editconsult/{id}")]
        public async Task<IActionResult> EditConsultant (int id, ConsultForAddDto consultForAddDto) {
            //Validate
            var consultant = await _context.Consults.FirstOrDefaultAsync (x => x.Id == id);

            if (id != consultant.Id) {
                return BadRequest ();
            }
            if (consultant == null) {
                return NotFound ();
            }

            consultant.Name = consultForAddDto.Name;
            consultant.EmploymentDate = consultForAddDto.EmploymentDate;
            consultant.InvoiceHoursWorkedThisYear = consultForAddDto.InvoiceHoursWorkedThisYear;

            try {
                await _context.SaveChangesAsync ();
            } catch (DbUpdateConcurrencyException) {
                if (!ConsultForAddDtoExists (id)) {
                    return NotFound ();
                } else {
                    throw;
                }
            }

            return NoContent ();

        }

        [AllowAnonymous]
        [HttpDelete ("delconsult/{id}")]
        public async Task<IActionResult> DelConsultant (int id) {

            var consultant = await _context.Consults.FindAsync (id);

            if (consultant == null) {
                return NotFound ();
            }

            _context.Consults.Remove (consultant);
            await _context.SaveChangesAsync ();

            return NoContent ();
        }
        private bool ConsultForAddDtoExists (int id) =>
            _context.Consults.Any (x => x.Id == id);
    }
}