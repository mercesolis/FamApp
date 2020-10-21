using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Claims;
using FamApp2.Models;
using FamApp2.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace FamApp2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EventsController : ControllerBase
    {
        private ApplicationDbContext _context;
        public EventsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<CalEvent> Get()
        {
            var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _context.CalEvents.Where(e => e.UserID == userId);
        }

        [HttpPost]
        public CalEvent Post([FromBody] CalEvent plan)
        {
            plan.UserID = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
            _context.Add(plan);
            _context.SaveChanges();
            return plan;
        }

    

    }
}