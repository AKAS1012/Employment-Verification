using System.ComponentModel.DataAnnotations;

namespace VerifyEmployeement.Data
{
    public class EmpVerifityDetails
    {

        [Required]
        public int Employee_ID { get; set; }
        [Required]
        public string Company_Name { get; set; }
        [Required]
        public string Verification_Code { get; set; }

    }
}
