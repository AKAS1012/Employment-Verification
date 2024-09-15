namespace VerifyEmployeement.Data
{
    public static class GetEmployees
    {
        public static List<EmpVerifityDetails> employees()
        {
            List<EmpVerifityDetails> newEmployees = new List<EmpVerifityDetails>();
            EmpVerifityDetails empVerifityDetails = new EmpVerifityDetails
            {
                Employee_ID = 1,
                Company_Name = "FMPL",
                Verification_Code = "123"
            };
            newEmployees.Add(empVerifityDetails);
            empVerifityDetails = new EmpVerifityDetails
            {
                Employee_ID = 2,
                Company_Name = "Secureye",
                Verification_Code = "12"
            };
            newEmployees.Add(empVerifityDetails);
            empVerifityDetails = new EmpVerifityDetails
            {
                Employee_ID = 3,
                Company_Name = "Tenda",
                Verification_Code = "15"
            };
            newEmployees.Add(empVerifityDetails);
            return newEmployees;
        }
        //public static Dictionary<string, object> BindResultData(bool Status, dynamic data)
        //{
        //    Dictionary<string, object> obj = new Dictionary<string, object>();
        //    obj.Add("STATUS", Status ? "true" : "false");
        //    obj.Add("Data", data);
        //    return obj;
        //}

    }
}
