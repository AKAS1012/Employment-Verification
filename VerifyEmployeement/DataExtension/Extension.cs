namespace VerifyEmployeement.DataExtension
{
    public static class Extension
    {
        public static List<T> Filter<T>(this List<T> records, Func<T, bool> func)
        {
            List<T> filteredlist = new List<T>();
            foreach (T record in records)
            {
                if (func(record))
                {
                    filteredlist.Add(record);
                }
            }
            return filteredlist;

        }
        //public static List<T> Filter<T>(this List<T> records, Func<T, bool> predicate)
        //{
        //    return records.Where(predicate).ToList();
        //}

    }
}
