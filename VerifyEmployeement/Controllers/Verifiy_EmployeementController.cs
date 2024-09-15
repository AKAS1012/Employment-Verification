using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using VerifyEmployeement.Data;
using VerifyEmployeement.DataExtension;
namespace VerifyEmployeement.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Verifiy_EmployeementController : ControllerBase
    {
        private readonly List<EmpVerifityDetails> _verifiyemp;

        public Verifiy_EmployeementController()
        {
            _verifiyemp = GetEmployees.employees();

        }

        [HttpPost("VerifiyEmployee")]
        public async Task<ActionResult<EmpVerifityDetails>> VerifyEmployeement(EmpVerifityDetails emp)
        {
            Func<EmpVerifityDetails, bool> predicate = p =>  p.Employee_ID == emp.Employee_ID && p.Company_Name == emp.Company_Name && p.Verification_Code==emp.Verification_Code;
            var filteredVerifiydetails =  _verifiyemp.Filter(predicate);
            Dictionary<string, string> msg = new Dictionary<string, string>();
            try
            {
                if (filteredVerifiydetails.Count>0)
                {
                    msg.Add("message", "Verified");
                    return Ok(msg);
                }
                else
                {
                    msg.Add("message", "Not Verified");
                    return Ok(msg); 
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An unexpected error occurred", details = ex.Message });
            }
        }   
    }
}